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
    estado:"ESPERANDO",
    fechaInicio:"",
    fechaFin:""
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
       
        const token = localStorage.getItem("token")
        await saveTrabajo(trabajoDatos,token);
        alert("Trabajo Creado")
        navigate("/trabajo/lista")
    }
   

    function goBack(){
        window.history.back()
    }

    return (
<div className="formulario-registro">


<form onSubmit={CargarTrabajo} >
       
        
          <div className="form-trabajo"> 

          <h3>Cargar nuevo Trabajo</h3>
        <div className='form-trabajo-datos'>
          <label htmlFor="usuario"> Seleccione el usuario </label>

          <select  name="usuario" onChange={handleChange} value={trabajoDatos.usuario.username || ''}>
          <option value="">seleccione un usuario</option>
               <option value={usuario.username}>{usuario.username}</option>    
            </select>  
        </div>

<div className='form-trabajo-datos'>
            <label htmlFor="proveedor">Seleccione el proveedor</label>

            <select  name="proveedor" onChange={handleChange} value={trabajoDatos.proveedor.nombreEmpresa || ''}>
                <option value="">seleccione un proveedor</option>
               <option value={proveedor.nombreEmpresa}>{proveedor.nombreEmpresa}</option>    
            </select>
</div>
            
  <div className='form-trabajo-datos'>
            <label> Ingrese una nota del trabajo que debe realizar</label>  
           <textarea placeholder='NOTA DE TRABAJO' className='input-trabajo' type="text" name='notaTrabajo' value={trabajoDatos.notaTrabajo} onChange={handleChange}  required title="Por favor, introduce la nota de trabajo"
  maxlength="255"
  minlength="10" />
    </div>          
           
        

             

              <button className="boton">Crear trabajo</button>
        
        <button className="boton" onClick={goBack}>
          Volver
        </button>
        </div>
        </form>

       </div>
                
    )


}

