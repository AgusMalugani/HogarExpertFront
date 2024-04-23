import React, { useEffect, useState } from 'react'
import { deleteProveedor, listaProveedores } from '../../servicios/ProveedorServicios';
import Proveedor from './Proveedor';

export default function Proveedores() {

    const[proveedores,setProveedores] = useState([]);
    
    useEffect( ()=>{
       listaProveedores().then(data => {setProveedores(data)});
    },[] )

    const token = localStorage.getItem("token");

async function eliminarProveedor(proveedor){
await deleteProveedor(proveedor.id,token)
const newProveedores = proveedores.filter(pr=> pr.id !== proveedor.id)
setProveedores(newProveedores);
}



  return (
    <div className='tbody-usuario-proveedor' >

    {proveedores.length > 0 && proveedores.map(elemento => <Proveedor key={elemento.id} proveedor = {elemento} eliminarProveedor={eliminarProveedor} />)}
    </div>
      
   
  
   )
  
  
  }