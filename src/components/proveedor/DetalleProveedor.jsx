import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detalleProveedor } from '../../servicios/ProveedorServicios';
import { traerImagenProveedor } from '../../servicios/ImagenServicio';
import { useUser } from '../sesion/UserContext';
import ListaComentarioProveedor from '../comentario/ListaComentarioProveedor';

export default function DetalleProveedor() {
  const { id } = useParams();

  
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



   

  return (
    <div>


    <div className='perfil-usuario-proveedor' >
     
      <div className='detalle-cabecera'>

      <h4 >{proveedor.nombreEmpresa}</h4>
      <br />
      <img src={imagen} alt= {proveedor.username} />
            </div>

            <div className='detalle-perfil-titulo'>
        <h4>DATOS PROVEEDOR</h4>
      </div>
      <div className='detalle-perfil'>
     

  <div>

        <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Nombre de la empresa: </span>
      <p className='perfil-valor'>{proveedor.nombreEmpresa}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Matricula: </span>
      { currentUser.roles.includes("USER") && <p className='perfil-valor'>**********</p> }
    
    { (currentUser.roles.includes("PROVEEDOR") || currentUser.roles.includes("ADMIN")) && currentUser.id === proveedor.id &&  <p className='perfil-valor'>{proveedor.matricula}</p> }
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Servicio que brinda:  </span>
      <p className='perfil-valor'>{proveedor.servicio}</p>
        </div>

  </div>

 <div className='descripcion'>       
        <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Descripcion:  </span>
      <p className='perfil-valor'>{proveedor.descripcion}</p>
        </div>
 </div>
        
        </div> 



        <div className='detalle-perfil-article2'>

       
<div className='detalle-perfil-titulo'>
         <h4>DATOS CONTACTO</h4>
</div>
         <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Celular: </span>
      { currentUser.roles.includes("USER") && <p className='perfil-valor'>**********</p> }
    
    { (currentUser.roles.includes("PROVEEDOR") || currentUser.roles.includes("ADMIN")) && currentUser.id === proveedor.id &&  <p className='perfil-valor'>{proveedor.celular}</p> }
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'> Email: </span>
      { currentUser.roles.includes("USER") && <p className='perfil-valor'>**********</p> }   
    { (currentUser.roles.includes("PROVEEDOR") || currentUser.roles.includes("ADMIN")) && currentUser.id === proveedor.id &&  <p className='perfil-valor'>{proveedor.email}</p> }
     </div>
     <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'> Localidad: </span>
      <p className='perfil-valor'>{proveedor.localidad}</p>
     </div>

     <div className='detalle-perfil-botones-div' >
      { currentUser.roles.includes('ADMIN') || currentUser.roles.includes("USER")  && <button className='detalle-perfil-botones'> <Link to={`/trabajo/crear/${proveedor.id}`}> CONTRATAR </Link></button> }
      { currentUser.id === proveedor.id && <button className='detalle-perfil-botones'> <Link to={`/proveedor/modificar/${proveedor.id}`}> MODIFICAR </Link></button> }
      </div>
    
      <div className='detalle-perfil-calificaciones-comentarios'>
        <div className='detalle-perfil-titulo'>
        <h4>CALIFICACIONES Y COMENTARIOS</h4>
        </div>
       { <ListaComentarioProveedor/>}
      </div>

      </div>
   
   
          
     
 </div>

    
    </div>
  )
}
