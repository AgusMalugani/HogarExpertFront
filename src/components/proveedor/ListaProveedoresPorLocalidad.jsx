import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { listaProveedoresPorLocalidad } from '../../servicios/ProveedorServicios';
import Proveedor from './Proveedor';

export default function ListaProveedoresPorLocalidad() {
    const{localidad}=useParams(); 
    const token = localStorage.getItem("token")
const[proveedores,setProveedores]=useState([]);
useEffect(()=>{
    listaProveedoresPorLocalidad(localidad,token).then(data=> setProveedores(data))
},[localidad])


  return (
    <div>
        <div className='tbody-usuario-proveedor' >
      {proveedores.map(elemento => <Proveedor  key={elemento.id} proveedor ={elemento} />)}
        
    </div>
      
    </div>
  )
}
