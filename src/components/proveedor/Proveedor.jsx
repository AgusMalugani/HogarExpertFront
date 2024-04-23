import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { traerImagenProveedor } from '../../servicios/ImagenServicio';
import { useUser } from '../sesion/UserContext';

export default function Proveedor({proveedor, eliminarProveedor} ) {
  const{user}=useUser();

const[imagen,setImagen]=useState();
useEffect( ()=>{
  traerImagenProveedor(proveedor.id).then(data=> {const imagenUrl = URL.createObjectURL(data)

    setImagen(imagenUrl);
  })
},[proveedor.id] );

  return (
<div className='carta-proveedores'> 

    <div className="fondo album py-5 ">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img src={imagen}  className="bd-placeholder-img card-img-top" width="100%" height="225" />
    
            <div className="card-body" >
              <p className="card-text">{proveedor.nombreEmpresa}</p>            
              <p className="card-text" >{proveedor.servicio}</p>
              <p className="card-text" >{proveedor.localidad}</p>
 
             <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">       
                {user.roles.includes('ADMIN') && <button  type="button" className="btn btn-sm btn-outline-secondary"  onClick={()=> eliminarProveedor(proveedor)}>❌</button>}
                 <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/proveedor/detalle/${proveedor.id}`} >DETALLE</Link></button>
                 {user.roles.includes('ADMIN') && <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/proveedor/modificar/${proveedor.id}`} >MODIFICAR</Link> </button> }
               </div>
           </div>


            </div>

          </div>
        </div>
        </div>
        
   </div>     
   </div>

  </div>

  )

  
}
