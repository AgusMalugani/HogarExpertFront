import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateTrabajo, verTrabajo } from '../../servicios/TrabajoServicio';
import { useUser } from '../sesion/UserContext';

export default function DetalleTrabajo() {
    const {id} = useParams();
 
    const{user}=useUser();


    const [trabajo, setTrabajo] = useState({})
    useEffect(() => {
         verTrabajo(id).then(data => setTrabajo(data))
    }, [id])

   // const[trabajoMod,setTrabajoMod]=useState({})

    //useEffect(()=>{
      //  setTrabajoMod(trabajo)
    //},[trabajo])
    

const handleChange=(e)=>{
    if(e.target.name === "total"){
        setTrabajo({
            ...trabajo,
            [e.target.name] : e.target.value
        } );
    } else if(e.target.name === "horasTrabajo"){
        setTrabajo({
            ...trabajo,
            [e.target.name]:e.target.value
        });       
    } else if(e.target.name=== "estado"){
        setTrabajo({
            ...trabajo,
            [e.target.name]:e.target.value
        })

    }

}


function modTrabajo(e){
    e.preventDefault();
    console.log("hola")

    modificarBackEnd();

}
function modificarBackEnd(){
    updateTrabajo(trabajo.id,trabajo); // envia a la bd el cambio
    if(user&&user.roles.includes('PROVEEDOR')){
        presupuestar() /// me cambia otra vez a false
    } else if(user&&user.roles.includes('ADMIN') || user&&user.roles.includes('USER') ){
        estadoTrabajo();
    }

}


    function goBack() {
        window.history.back();
    }
    const[input,setInput] =useState(false)
    const[estado,setEstado] =useState(false)

    function presupuestar(){
        setInput(!input);
    }
    function estadoTrabajo(){
        setEstado(!estado);
    }
  

    return (
<div className='detalle-trabajo-form'>
    
        <div class="form-container">
    <div class="form-detalle-trabajo">
     <span class="heading">DETALLE TRABAJO</span>
     <form onSubmit={modTrabajo}>

    

        <div  class="input-detalle-trabajo">
        <span>ID TRABAJO</span> 
        <p >{trabajo.id}</p>
        </div>

        <div  class="input-detalle-trabajo">
        <span>NOMBRE USUARIO</span>
            <p>{trabajo.usuario && trabajo.usuario.username}</p>
        </div>

        <div  class="input-detalle-trabajo">
        <span>NOMBRE PROVEEDOR</span>
            <p>{trabajo.proveedor && trabajo.proveedor.nombreEmpresa}</p>

        </div>
        <div  class="input-detalle-trabajo">

        <span>NOTA DE TRABAJO</span>
            <p className='textarea' >{trabajo.notaTrabajo}</p>
        </div>
        <div  class="input-detalle-trabajo">
        <span>ESTADO</span>
           {estado ===false &&  <p>{trabajo.estado}</p>}
           {user&& (user.roles.includes('ADMIN')|| user.roles.includes('USER') ) && estado ===true &&  
            <select name='estado' value={trabajo.estado} onChange={handleChange} >
                <option value="ACTIVO" >ACTIVO</option>
                <option value="ESPERANDO" >ESPERANDO</option>
                <option value="FINALIZADO" >FINALIZADO</option>
                <option value="RECHAZADO" >RECHAZADO</option>
            </select>
            }
        </div>
        <div  class="input-detalle-trabajo">
        <span>HORAS DE TRABAJO</span>
           { input === false && <p>{trabajo.horasTrabajo}</p>}
           { user && user.roles.includes('PROVEEDOR') && input ===true && <input type="number" name='horasTrabajo' value={trabajo.horasTrabajo} onChange={handleChange} />  }

        </div>

        <div  class="input-detalle-trabajo">
        <span>TOTAL</span>
            { input === false && <p>{trabajo.total}</p>}
            { user&& user.roles.includes('PROVEEDOR') && input ===true && <input type="number" name='total' value={trabajo.total} onChange={handleChange}  /> } 
        </div>

        <div class="button-container">
        <div class="send-button">

            
            
        { trabajo.estado !== "FINALIZADO" &&  trabajo.estado !== "ACTIVO" && trabajo.estado === "ESPERANDO" && user && user.roles.includes('PROVEEDOR') &&  input ===false && <button onClick={presupuestar}>Modificar trabajo-pro</button>}
           
           { trabajo.estado !== "FINALIZADO" && (user&& user.roles.includes('ADMIN') || user.roles.includes('USER') )&&  estado ===false && trabajo.total >0 && <button onClick={estadoTrabajo}>Modificar trabajo-user</button>}

          { trabajo.estado === "ESPERANDO" && input ===true  &&  <button> modificar</button>}
          { estado === true &&  <button> modificar</button>}
          <button onClick={goBack}>Volver</button>
        </div>
        


    </div>

    </form>
    

</div>
</div>
        
    
</div> 
    
    )
}

/*
   <div className='contenedor-detalle'  >
            
            <form  onSubmit={modTrabajo} className='contenedor-detalle-trabajo'>
                <div className='detalle-trabajo-datos'>
            <span>ID TRABAJO</span> 
            <p>{trabajo.id}</p>
                </div>
 
 <div className='detalle-trabajo-datos'>
            <span>NOMBRE USUARIO</span>
            <p>{trabajo.usuario && trabajo.usuario.username}</p>
 </div>

 <div className='detalle-trabajo-datos'>
            <span>NOMBRE PROVEEDOR</span>
            <p>{trabajo.proveedor && trabajo.proveedor.nombreEmpresa}</p>
</div>
            <div className='detalle-trabajo-datos'>         
            <span>NOTA DE TRABAJO</span>
            <p className='detalle-nota-trabajo'>{trabajo.notaTrabajo}</p>
        </div>

            <div className='detalle-trabajo-datos'>
            <span>ESTADO</span>
           {estado ===false &&  <p>{trabajo.estado}</p>}
           </div>

           <div className='detalle-trabajo-datos'>
            {user&& (user.roles.includes('ADMIN')|| user.roles.includes('USER') ) && estado ===true &&  
            <select name='estado' value={trabajo.estado} onChange={handleChange} >
                <option value="ACTIVO" >ACTIVO</option>
                <option value="ESPERANDO" >ESPERANDO</option>
                <option value="FINALIZADO" >FINALIZADO</option>
                <option value="RECHAZADO" >RECHAZADO</option>
            </select>
            }
            </div>

<div className='detalle-trabajo-datos'>
           <span>HORAS DE TRABAJO</span>
           { input === false && <p>{trabajo.horasTrabajo}</p>}
           { user && user.roles.includes('PROVEEDOR') && input ===true && <input type="number" name='horasTrabajo' value={trabajo.horasTrabajo} onChange={handleChange} />  }
</div>

<div className='detalle-trabajo-datos'>
            <span>TOTAL</span>
            { input === false && <p>{trabajo.total}</p>}

            </div>
            { user&& user.roles.includes('PROVEEDOR') && input ===true && <input type="number" name='total' value={trabajo.total} onChange={handleChange}  /> } 

            { trabajo.estado !== "FINALIZADO" && trabajo.estado === "ESPERANDO" && user && user.roles.includes('PROVEEDOR') &&  input ===false && <button onClick={presupuestar}>Modificar trabajo-pro</button>}
           
            { trabajo.estado !== "FINALIZADO" && (user&& user.roles.includes('ADMIN') || user.roles.includes('USER') )&&  estado ===false && <button onClick={estadoTrabajo}>Modificar trabajo-user</button>}

           { trabajo.estado === "ESPERANDO" && input ===true  &&  <button> modificar</button>}
           { estado === true &&  <button> modificar</button>}

           </form>
           
        <button onClick={goBack}>Volver</button>
    
        </div>

*/
