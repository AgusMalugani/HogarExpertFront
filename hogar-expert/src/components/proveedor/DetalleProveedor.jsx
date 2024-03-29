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
      <div className='detalle-img'>
      <img src={imagen} alt= {proveedor.username} />
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>nombre de la empresa: </span>
      <p className='perfil-valor'>{proveedor.nombreEmpresa}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>matricula: </span>
      <p className='perfil-valor'>{proveedor.matricula}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>servicio que brinda:  </span>
      <p className='perfil-valor'>{proveedor.servicio}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>celular: </span>
      <p className='perfil-valor'>{proveedor.celular}</p>
      </div>

     <div className='detalle-perfil'>
      <span className='perfil-titulo'> email: </span>
      <p className='perfil-valor'>{proveedor.email}</p>
      </div> 
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>username: </span>
      <p className='perfil-valor'>{proveedor.username}</p>
      </div>

      <div className='detalle-perfil'>
      <span className='perfil-titulo'>costo por hora de su servicio: $</span>
      <p  className='perfil-valor'>{proveedor.costoXHora}</p>
      </div>      
     
      </div>

      <div >
      { currentUser.roles.includes('ADMIN') || currentUser.roles.includes('USER') && <button className='detalle-perfil-botones'> <Link to={`/trabajo/crear/${proveedor.id}`}> CONTRATAR </Link></button> }

      </div>

      <div className='detalle-perfil-calificaciones-comentarios'>
       {<ListaComentarioProveedor/>}
      </div>
    
    </div>
  )
}
