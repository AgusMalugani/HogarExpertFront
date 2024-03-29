import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { listaComentariosPorProveedor } from '../../servicios/ComentarioServicio';

export default function ListaComentarioProveedor() {
const{id}=useParams();//ID proveedor por path
const[comentarios,setComentarios]=useState();
useEffect(()=>{
    listaComentariosPorProveedor(id).then(data=> setComentarios(data));
},[id])


// Función para generar las estrellas según la calificación
const generarEstrellas = (calificacion) => {
    let estrellas = '';
    switch (calificacion) {
      case 1:
        estrellas = '★☆☆☆☆'; // Una estrella
        break;
      case 2:
        estrellas = '★★☆☆☆'; // Dos estrellas
        break;
      case 3:
        estrellas = '★★★☆☆'; // Tres estrellas
        break;
      case 4:
        estrellas = '★★★★☆'; // Cuatro estrellas
        break;
      case 5:
        estrellas = '★★★★★'; // Cinco estrellas
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
    <div className="carousel-inner">
          <div className="card">
            <div className="card-body">    
              <p className="card-text">{generarEstrellas(comentario.calificacion)}</p>
              <p className="card-text">{comentario.mensaje}</p>
              <p className="card-text"><small className="text-muted">-{comentario.usuario.username} </small></p>
            </div>
          </div>
        </div>
    </div>
    )}
  </div>
 
  )
}
