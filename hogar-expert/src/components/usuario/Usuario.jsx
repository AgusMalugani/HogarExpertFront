import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CrearTrabajo from '../trabajo/CrearTrabajo'
import { traerImagenUsuario } from '../../servicios/ImagenServicio';

export default function Usuario({usuario, eliminarUsuario}) {


  const[imagen,setImagen]= useState();
  

    useEffect(()=>{
        traerImagenUsuario(usuario.id).then(data=> { const imagenUrl = URL.createObjectURL(data) 

        setImagen(imagenUrl);
      })
       
    },[usuario.id])
    console.log(imagen)

 
  return (
    
    <div className='carta-usuarios'> 

    <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img src={imagen}  className="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div className="card-body" >
            <p className="card-text">{usuario.id}</p>
              <p className="card-text">{usuario.nombre}</p>
              <p className="card-text" > {usuario.apellido} </p>
              <p className="card-text" >{usuario.email}</p>
            
             
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">                
        <button type="button" className="btn btn-sm btn-outline-secondary"  onClick={()=> eliminarUsuario(usuario)} >❌</button>
        <button type="button" className="btn btn-sm btn-outline-secondary" > <Link to={ `/usuario/perfil/${usuario.id}`} > PERFIL </Link> </button>
        <button type="button" className="btn btn-sm btn-outline-secondary" > <Link to={`/usuario/modificar/${usuario.id}`} >MODIFICAR</Link> </button>
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
  <tr>
         <td>{usuario.id}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.dni}</td>
        <td>{usuario.domicilio}</td>
        <td>{usuario.celular}</td>
        <td>{usuario.email}</td>
        <td>{usuario.password}</td>
        <td><button onClick={()=> eliminarUsuario(usuario)} >❌</button></td>
        <td><button> <Link to={ `/usuario/perfil/${usuario.id}`} > PERFIL </Link> </button></td>
        <td><button> <Link to={`/usuario/modificar/${usuario.id}`} >MODIFICAR</Link> </button></td>
      
       </tr>
  */}


}
