import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Trabajo({trabajo, eliminarTrabajo}) {
   // const[boton,setBoton]= useState(false);
 /*function estado(){
    setBoton(!boton)
{trabajo.estado = boton}
 }*/

  return (
    
    <tr>
        <td>{trabajo.num_trabajo}</td>
        <td>{trabajo.horasTrabajo}</td>
        <td>{trabajo.total}</td>
        <td>{trabajo.usuario.id}</td>
        <td>{trabajo.proveedor.id}</td>
        <td> {trabajo.estado === false && <p>baja</p> || trabajo.estado === true && <p>alta</p>}</td>
        <td> <button onClick={ ()=>eliminarTrabajo(trabajo)} className='boton' > ❌ </button> </td>
        <td><button  className='boton'> <Link to = {`/trabajo/detalle/${trabajo.num_trabajo}`}> VER </Link></button></td>
        <td><button className='boton'> <Link to={`/trabajo/modificar/${trabajo.num_trabajo}`} > MODIFICAR</Link></button></td>
    </tr>
    
  )
}
