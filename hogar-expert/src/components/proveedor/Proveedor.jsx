import React from 'react'
import { Link } from 'react-router-dom'

export default function Proveedor({proveedor, eliminarProveedor}) {
  return (
    <tr>
        <td>{proveedor.id}</td>
        <td>{proveedor.nombreEmpresa}</td>
        <td>{proveedor.matricula}</td>
        <td>{proveedor.servicio}</td>
        <td>{proveedor.celular}</td>
        <td>{proveedor.email}</td>
        <td>{proveedor.costoXHora}</td>
        <td><button onClick={()=> eliminarProveedor(proveedor)}>❌</button></td>
        <td><button> <Link to={`/proveedor/detalle/${proveedor.id}`} >DETALLE</Link></button></td>
        <td> <button> <Link to={`/proveedor/modificar/${proveedor.id}`} >MODIFICAR</Link> </button> </td>
    </tr>
  )
}
