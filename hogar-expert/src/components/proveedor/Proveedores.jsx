import React, { useEffect, useState } from 'react'
import { deleteProveedor, listaProveedores } from '../../servicios/ProveedorServicios';
import Proveedor from './Proveedor';

export default function Proveedores() {

    const[proveedores,setProveedores] = useState([]);
    
    useEffect( ()=>{
       listaProveedores().then(data => {setProveedores(data)});
    },[] )

async function eliminarProveedor(proveedor){
await deleteProveedor(proveedor.id)
const newProveedores = proveedores.filter(pr=> pr.id !== proveedor.id)
setProveedores(newProveedores);
}

function goBack() {
  window.history.back();
}

  return (
    <div className='tbody-usuario-proveedor' >

    {proveedores.length > 0 && proveedores.map(elemento => <Proveedor key={elemento.id} proveedor = {elemento} eliminarProveedor={eliminarProveedor} />)}
    </div>
      
   
  
   )
  
   {/* 
   <table className='lista-proveedores'>
   <thead >
   <tr id='lista-columnas' > 
   <th>ID</th>
   <th>NOMRE EMPRESA</th>
   <th>MATRICULA</th>
   <th>SERVICIO</th>
   <th>CELULAR</th>
   <th>EMAIL</th>
   <th>COSTO POR HORA</th>
   <th>ACCIONES</th>
   </tr>
   </thead>
   <tbody >
   {proveedores.length > 0 && proveedores.map(elemento => <Proveedor proveedor = {elemento} eliminarProveedor={eliminarProveedor} />)}
   
   </tbody>
   <br />
   <button className='boton' onClick={goBack}>Volver</button>
   
   </table>
  */}
  }