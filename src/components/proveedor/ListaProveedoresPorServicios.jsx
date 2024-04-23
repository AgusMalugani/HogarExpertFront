import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listaProveedoresPorServicio } from '../../servicios/ProveedorServicios';
import Proveedor from './Proveedor';

export default function ListaProveedoresPorServicios() {
const{servicio} = useParams()

const[proveedores,setProveedores]=useState([]);
useEffect( ()=>{
    listaProveedoresPorServicio(servicio).then(data=>setProveedores(data))
},[servicio] );
console.log(proveedores);


  return (
   
    <div className='tbody-usuario-proveedor' >
      {proveedores.map(elemento => <Proveedor  key={elemento.id} proveedor ={elemento} />)}
      
      
    </div>
  )
}
