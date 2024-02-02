import React from 'react'
import { Link } from 'react-router-dom'
import CrearTrabajo from '../trabajo/CrearTrabajo'

export default function Usuario({usuario, eliminarUsuario}) {



  return (
    
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
   
  )
}
