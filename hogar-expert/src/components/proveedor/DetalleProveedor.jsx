import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detalleProveedor } from '../../servicios/ProveedorServicios';
import { traerImagenProveedor } from '../../servicios/ImagenServicio';
import { useUser } from '../sesion/UserContext';
import ListaComentarioProveedor from '../comentario/ListaComentarioProveedor';

export default function DetalleProveedor() {
  const { id } = useParams();
 // const idLong = Number(id);
  
  const { user: currentUser } = useUser();
  const [proveedor, setProveedor] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(id){
 detalleProveedor(id,token).then(data => setProveedor(data))
    } else if(currentUser){
      setProveedor(currentUser);
    }
  }
    , [id,currentUser])


    const[imagen,setImagen]=useState();
useEffect( ()=>{
  if(proveedor && proveedor.id){

    traerImagenProveedor(proveedor.id)
    .then(data=> {const imagenUrl = URL.createObjectURL(data)
      
      setImagen(imagenUrl);
    })
  }
  },[proveedor] );



    function goBack(){
      window.history.back();
    }

  return (
    <div>


    <div className='perfil-usuario-proveedor' >
     
      <div className='detalle-cabecera'>

      <h4 >{proveedor.nombreEmpresa}</h4>
      <br />
      <img src={imagen} alt= {proveedor.username} />
            </div>
      
      <div className='detalle-perfil'>
      
        <h4>DATOS PROVEEDOR</h4>
        <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Nombre de la empresa: </span>
      <p className='perfil-valor'>{proveedor.nombreEmpresa}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Matricula: </span>
      <p className='perfil-valor'>{proveedor.matricula}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Servicio que brinda:  </span>
      <p className='perfil-valor'>{proveedor.servicio}</p>
        </div>
      
<br /><br /><br />

         <h4>DATOS CONTACTO</h4>
         <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Celular: </span>
      <p className='perfil-valor'>{proveedor.celular}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'> Email: </span>
      <p className='perfil-valor'>{proveedor.email}</p>
     </div>

     <div className='detalle-perfil-botones-div' >
      { currentUser.roles.includes('ADMIN')  && <button className='detalle-perfil-botones'> <Link to={`/trabajo/crear/${proveedor.id}`}> CONTRATAR </Link></button> }
      { currentUser.id === proveedor.id && <button className='detalle-perfil-botones'> <Link to={`/proveedor/modificar/${proveedor.id}`}> MODIFICAR </Link></button> }
      </div>
    
      <div className='detalle-perfil-calificaciones-comentarios'>
        <h4>CALIFICACIONES Y COMENTARIOS</h4>
       {<ListaComentarioProveedor/>}
      </div>
   
   
      </div>      
     
 </div>

    
    </div>
  )
}
