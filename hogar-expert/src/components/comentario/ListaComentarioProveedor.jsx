import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { listaComentariosPorProveedor } from '../../servicios/ComentarioServicio';
import { useUser } from '../sesion/UserContext';

export default function ListaComentarioProveedor() {
const{id}=useParams();//ID proveedor por path
const[comentarios,setComentarios]=useState();
const{user}=useUser();


useEffect(() => {
  if(id){
    listaComentariosPorProveedor(id).then(data=> setComentarios(data))
  } else if(user){
    listaComentariosPorProveedor(user.id).then(data=> setComentarios(data))
  }
}
  , [id,user])


// Función para generar las estrellas según la calificación
const generarEstrellas = (calificacion) => {
    let estrellas = '';
    switch (calificacion) {
      case 1:
        estrellas = '⭐'; // Una estrella
        break;
      case 2:
        estrellas = '⭐⭐'; // Dos estrellas
        break;
      case 3:
        estrellas = '⭐⭐⭐'; // Tres estrellas
        break;
      case 4:
        estrellas = '⭐⭐⭐⭐'; // Cuatro estrellas
        break;
      case 5:
        estrellas = '⭐⭐⭐⭐⭐'; // Cinco estrellas
        break;
      default:
        estrellas = 'Calificación no válida';
    }
    return estrellas;
  };



  return (
    <div>
        {comentarios  && comentarios.map(comentario =>  
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="comentarios-proveedores">
         
            <div className="comentarios-proveedores-datos">    
              <p className="">{generarEstrellas(comentario.calificacion)}</p>
              <p className="">{comentario.mensaje}</p>
              <p className=""><small className="text-muted">-{comentario.usuario.username} </small></p>
            </div>
          
        </div>
    </div>
    )}
  </div>
 
  )
}
