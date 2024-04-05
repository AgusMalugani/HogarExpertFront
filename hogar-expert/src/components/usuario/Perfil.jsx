import React, { useEffect, useState } from 'react'
import { perfilUsuario } from '../../servicios/UsuarioServicios'

import { useParams } from 'react-router-dom'
import { traerImagenUsuario } from '../../servicios/ImagenServicio';
import { useUser } from '../sesion/UserContext';

export default function Perfil() {
   const {id}=useParams();
   const { user: currentUser } = useUser();
    // Convierte el id a tipo Long (número entero)
    //const idLong = id ? Number(id) : null; // si id es numero, es verdadero, si no, es falso y es null
    const [usuario, setUsuario] = useState({});
    const[imagen,setImagen]= useState();
/*
    useEffect(() => {
        perfilUsuario(idLong).then(data => {setUsuario(data);});
    }, [idLong]);
*/
const token = localStorage.getItem("token")
useEffect(() => {
  
  console.log('ID:', id);
  console.log('CurrentUser:', currentUser);
if (id) {
  // Si hay un ID en la URL, obtener el perfil del usuario correspondiente
  perfilUsuario(id,token).then(data => setUsuario(data));
} else if (currentUser) {
  // Si no hay ID en la URL pero el usuario actual está disponible en el contexto, usar ese usuario
  setUsuario(currentUser);
}
}, [id, currentUser]);

 /*

    useEffect(()=>{
        traerImagenUsuario(usuario.id).then(data=> { const imagenUrl = URL.createObjectURL(data) 

        setImagen(imagenUrl);
      })
       
    },[usuario])
   */
    useEffect(() => {
      if (usuario && usuario.id) {
        
    console.log('Usuario useEffectImg:', usuario);
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

        <br />
    <button className='boton' onClick={goBack}>Volver</button>  
    <button className='boton' onClick={goBack}>Modificar Perfil</button>  
   </div>
  )}
  </div>



  )
}

/*
  <div className='perfil'>
      {usuario && (
        <>
        
      <h1>imagen</h1>
      <img src={imagen} width="100px" alt="goku" />
      <br />

       
        <h3  className='titulo'>id</h3> <p className='valor'>{usuario.id}</p>
        <br />
        <h3 className='titulo'>nombre</h3> <p className='valor'>{usuario.nombre}</p>
        <br />
        <h3 className='titulo'>apellido</h3> <p className='valor'>{usuario.apellido}</p>
        <br />
        <h3 className='titulo'>dni</h3> <p className='valor'> {usuario.dni}</p>
        <br />
        <h3 className='titulo'>domicilio</h3> <p className='valor'>{usuario.domicilio}</p>
        <br />
        <h3 className='titulo'>celular</h3> <p className='valor'> {usuario.celular}</p>
        <br />
        <h3 className='titulo'>email</h3> <p className='valor'> {usuario.email}</p>
        <br />
        <h3 className='titulo'>password</h3> <p className='valor'> {usuario.password}</p>
        <br />
        <button className='boton' onClick={goBack}>Volver</button>
        </>
      )}
    </div>

<div>
*/