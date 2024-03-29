import React, { useEffect, useState } from 'react'
import { listaComentarios } from '../../servicios/ComentarioServicio'



export default function Comentarios() {

  const[comentarios,setComentarios]=useState([])
useEffect( ()=>{
 listaComentarios().then( data => {setComentarios(data)} )
},[] )

function goBack(){
  window.history.back()
}

  return (
    <div id='carrusel-comentarios' >
      <img src="https://zolvers.com/img/home_new/icon-comillas.webp" alt="img-comillas" />

<h3>LO QUE DICEN NUESTROS CLIENTES</h3>
      {/*{ comentarios.length > 0 &&  comentarios.map( elemento => <Comentario key={elemento.id}  comentario = {elemento} /> ) }
*/}

{comentarios.length > 0 && (
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {comentarios.map((comentario, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div className="card">
            <div className="card-body">
        
              <p className="card-text">{comentario.mensaje}</p>
              <p className="card-text"><small className="text-muted">-{comentario.usuario.username} </small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true">⬅</span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true">➡</span>
        <span className="visually-hidden">Siguiente</span>
      </button>
  </div>
)}


    </div>
  )
}
