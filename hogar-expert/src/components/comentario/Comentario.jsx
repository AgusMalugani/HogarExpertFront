import React from 'react'

export default function Comentario({comentario}) {
  return (
    
        <tr>
            <td>{comentario.id_comentario}</td>
            <td>{comentario.proveedor.id}</td>
            <td>{comentario.usuario.id}</td>
            <td>{comentario.trabajo.num_trabajo}</td>
            <td>{comentario.mensaje}</td>
            <td>{comentario.calificacion}</td>
        </tr>
      
    
  )
}
