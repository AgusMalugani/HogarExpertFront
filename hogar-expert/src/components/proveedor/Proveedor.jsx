import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { traerImagenProveedor } from '../../servicios/ImagenServicio';

export default function Proveedor({proveedor, eliminarProveedor}) {


const[imagen,setImagen]=useState();
useEffect( ()=>{
  traerImagenProveedor(proveedor.id).then(data=> {const imagenUrl = URL.createObjectURL(data)

    setImagen(imagenUrl);
  })
},[proveedor.id] );



  return (
<div className='carta-proveedores'> 

    <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img src={imagen}  className="bd-placeholder-img card-img-top" width="100%" height="225" />
    
            <div className="card-body" >
              <p className="card-text">{proveedor.nombreEmpresa}</p>
              <p className="card-text" > {proveedor.id} </p>
              <p className="card-text" >{proveedor.servicio}</p>
 
             <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">       
          <button  type="button" className="btn btn-sm btn-outline-secondary"  onClick={()=> eliminarProveedor(proveedor)}>❌</button>
          <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/proveedor/detalle/${proveedor.id}`} >DETALLE</Link></button>
          <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/proveedor/modificar/${proveedor.id}`} >MODIFICAR</Link> </button> 
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

  {/*
  
  <tr id='lista-filas'>
  <td className='lista-fila-elemento' >{proveedor.id}</td>
  <td className='lista-fila-elemento' >{proveedor.nombreEmpresa}</td>
  <td className='lista-fila-elemento' >{proveedor.matricula}</td>
        <td className='lista-fila-elemento' >{proveedor.servicio}</td>
        <td className='lista-fila-elemento' >{proveedor.celular}</td>
        <td className='lista-fila-elemento' >{proveedor.email}</td>
        <td className='lista-fila-elemento' >{proveedor.costoXHora}</td>
        
        <div>
        <td className='lista-fila-elemento' ><button onClick={()=> eliminarProveedor(proveedor)}>❌</button></td>
        <td className='lista-fila-elemento' ><button> <Link to={`/proveedor/detalle/${proveedor.id}`} >DETALLE</Link></button></td>
        <td className='lista-fila-elemento' > <button> <Link to={`/proveedor/modificar/${proveedor.id}`} >MODIFICAR</Link> </button> </td>
        </div>
        
    </tr>
  */}
}
