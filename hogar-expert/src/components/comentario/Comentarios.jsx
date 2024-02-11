import React, { useEffect, useState } from 'react'
import { listaComentarios } from '../../servicios/ComentarioServicio'
import Comentario from './Comentario'


export default function Comentarios() {

  const[comentarios,setComentarios]=useState([])
useEffect( ()=>{
 listaComentarios().then( data => {setComentarios(data)} )
},[] )

function goBack(){
  window.history.back()
}

  return (
    <div>

      <table>
    <thead>
      <tr>
      <th>id_comentario</th>
      <th>proveedor</th>
      <th>usuario</th>
      <th>trabajo</th>
      <th>mensaje</th>
      <th>calificacion</th>
      </tr>
    </thead>
    <tbody>

      { comentarios.length > 0 &&  comentarios.map( elemento => <Comentario key={elemento.id_comentario}  comentario = {elemento} /> ) }

    </tbody>
      </table>
      <br />
      <button className='boton' onClick={goBack}>volver</button>


    </div>
  )
}
