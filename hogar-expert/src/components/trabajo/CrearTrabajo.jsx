import React, { useEffect, useState } from 'react'
import { saveTrabajo } from '../../servicios/TrabajoServicio'
import { obtenerUsuarios, perfilUsuario} from '../../servicios/UsuarioServicios';
import { detalleProveedor, listaProveedores } from '../../servicios/ProveedorServicios';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../sesion/UserContext';


export default function CrearTrabajo() {
const{id}=useParams(); // id proveedor
const{user}=useUser(); // id usuario logueado
const token = localStorage.getItem("token");



   // const [usuario, setUsuario] = useState("");
//const [proveedor, setProveedor] = useState("");

    const [horasTrabajo, setHorasTrabajo] = useState();
    const navigate = useNavigate()

    


    const [proveedor, setProveedor] = useState({});
    useEffect(() => {
        detalleProveedor(id,token).then(data => { setProveedor(data) })
    }, [])


    const [usuario, setUsuario] = useState({});
    useEffect(() => {
         setUsuario(user); 
    }, [user])


const[trabajoDatos,setTrabajoDatos]=useState({
    usuario: {},
    proveedor:{},
    horasTrabajo:0,
    total:0,
    notaTrabajo:"",
    estado:"ESPERANDO"
});


    const handleChange = (e)=>{

        if(e.target.name === "usuario"){
           setTrabajoDatos({
              ...trabajoDatos,
            [e.target.name]: e.target.name ? usuario : e.target.value 
            }
               )
            } else if(e.target.name === "proveedor"){
                setTrabajoDatos({
                    ...trabajoDatos,
                    [e.target.name]: e.target.name ? proveedor : e.target.value
                })
             } else if(e.target.name === "notaTrabajo"){
                setTrabajoDatos({
                    ...trabajoDatos,
                    [e.target.name]:e.target.value
                })
             }

       
    }

   

      function CargarTrabajo(evento) {
        evento.preventDefault();

        
        enviarBackEnd()
    }
    async function enviarBackEnd(){
        console.log(trabajoDatos)
        await saveTrabajo(trabajoDatos);
    }
   

    function goBack(){
        window.history.back()
    }

    return (
<div className="formulario-registro">


<form onSubmit={CargarTrabajo} >
        <p className="title">Cargar nuevo trabajo </p>
        
          <div className="form-trabajo"> 
          <label htmlFor="usuario"> Seleccione el usuario </label>
          <select  name="usuario" onChange={handleChange} value={trabajoDatos.usuario.username || ''}>
          <option value="">seleccione un usuario</option>
               <option value={usuario.username}>{usuario.username}</option>    
            </select>  

            <label htmlFor="proveedor">Seleccione el proveedor</label>
            <select  name="proveedor" onChange={handleChange} value={trabajoDatos.proveedor.nombreEmpresa || ''}>
                <option value="">seleccione un proveedor</option>
               <option value={proveedor.nombreEmpresa}>{proveedor.nombreEmpresa}</option>    
            </select>
             -{/* <input className='input-trabajo'  placeholder={proveedor.nombreEmpresa}  type='text'/>
            */}

            <label>
             Ingrese una nota del trabajo que debe realizar
             
           <input className='input-trabajo' type="text" name='notaTrabajo' value={trabajoDatos.notaTrabajo} onChange={handleChange} />
           </label>
        

             

              <button className="boton">Crear trabajo</button>
        <br />
        <button className="boton" onClick={goBack}>
          Volver
        </button>
        </div>
        </form>

       </div>
                
    )

{/*
 <form onSubmit={CargarTrabajo} >

            <label htmlFor="usuario">Seleccione el usuario</label>
            <select name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}>
                <option value="">Seleccione un usuario</option>
                {usuarios.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.nombre}
                    </option>
                ))}
            </select>

            <label htmlFor="proveedor">Seleccione el proveedor</label>
            <select name="proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)}>
                <option value="">Seleccione un proveedor</option>

                {proveedores.map((proveedor) => (
                    <option key={proveedor.id} value={proveedor.id}>
                        {proveedor.nombreEmpresa}
                    </option>
                ))}
            </select>

            <label htmlFor="horasTrabajo">Ingrese las horas de trabajo</label>
            <input type="number" name='horasTrabajo' value={horasTrabajo} onChange={(e) => setHorasTrabajo(e.target.value)} />

            <button className='boton' > crear </button>
            {error === true && <p>  hubo un error al crear el trabajo. </p>}

        <button onClick={goBack} >volver</button>
        </form>
                */}

}

