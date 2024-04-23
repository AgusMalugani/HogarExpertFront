import React, { useEffect, useState } from 'react'
import { perfilUsuario } from '../../servicios/UsuarioServicios'

import { Link, useParams } from 'react-router-dom'
import { traerImagenUsuario } from '../../servicios/ImagenServicio';
import { useUser } from '../sesion/UserContext';

export default function Perfil() {
   const {id}=useParams();
   const { user: currentUser } = useUser();
    const [usuario, setUsuario] = useState({});
    const[imagen,setImagen]= useState();

const token = localStorage.getItem("token")
useEffect(() => {
  

if (id) {
  // Si hay un ID en la URL, obtener el perfil del usuario correspondiente
  perfilUsuario(id,token).then(data => setUsuario(data));
} else if (currentUser) {
  // Si no hay ID en la URL pero el usuario actual está disponible en el contexto, usar ese usuario
  setUsuario(currentUser);
}
}, [id, currentUser]);


    useEffect(() => {
      if (usuario && usuario.id) {
        
           traerImagenUsuario(usuario.id)
              .then(data => {
                  const imagenUrl = URL.createObjectURL(data);
                  setImagen(imagenUrl);
              })
              .catch(error => {
                  console.error('Error al cargar la imagen del usuario:', error);
              });
      }
  }, [usuario]); 
  console.log(imagen)
  


    function goBack() {
      window.history.back();
    }

  return (
    <div className='perfil-usuario-proveedor' >
      
{usuario && (
    <div>
  <div className='detalle-cabecera'>
  <h1>MI PERFIL</h1>
  <img src={imagen} alt= {usuario.username} />
  </div>
  
  <div className='detalle-perfil'>
  <span className='perfil-titulo'>NOMBRE: </span>
  <p className='perfil-valor'>{usuario.nombre}</p>
  </div>
  
  <div className='detalle-perfil'>
  <span className='perfil-titulo'>APELLIDO: </span>
  <p className='perfil-valor'>{usuario.apellido}</p>
  </div>
  
  <div className='detalle-perfil'>
  <span className='perfil-titulo'>DNI:  </span>
  <p className='perfil-valor'>{usuario.dni}</p>
  </div>
  


 <div className='detalle-perfil'>
  <span className='perfil-titulo'> EMAIL: </span>
  <p className='perfil-valor'>{usuario.email}</p>
  </div> 

  <div className='detalle-perfil'>
  <span className='perfil-titulo'>USERNAME: </span>
  <p  className='perfil-valor'>{usuario.username}</p>
  </div>    
        <div className='detalle-perfil'>
  <span className='perfil-titulo'>CELULAR: </span>
  <p className='perfil-valor'>{usuario.celular}</p>
  </div>

      <div className='detalle-perfil'>
  <span className='perfil-titulo'>DOMICILIO: </span>
  <p  className='perfil-valor'>{usuario.domicilio}</p>
  </div> 
  <div className='detalle-perfil'>
  <span className='perfil-titulo'>LOCALIDAD: </span>
  <p  className='perfil-valor'>{usuario.localidad}</p>
  </div>
  <div className='perfil-usuario-proveedor-botones-perfil' >
  <button  className="btn btn-sm btn-outline-secondary"  onClick={goBack}>Volver</button>  
    <button type="button" className="btn btn-sm btn-outline-secondary" > <Link to={`/usuario/modificar/${usuario.id}`} >MODIFICAR</Link> </button>
  </div>
  
      
    </div>
  )}
  
  </div>



  )
}
