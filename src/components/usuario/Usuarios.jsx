import React, { useEffect, useState } from 'react'
import { deleteUsuarios, obtenerUsuarios } from '../../servicios/UsuarioServicios';
import Usuario from './Usuario';

export default function Usuarios() {
    const token = localStorage.getItem("token")
    const[usuarios,setUsuarios] =useState([]);
    useEffect( ()=>{ 
        obtenerUsuarios(token).then(data =>{setUsuarios(data) })
    },[] )

async function eliminarUsuario(usuario){
    await deleteUsuarios(usuario.id,token)
    const newUsuarios = usuarios.filter(us => us.id !== usuario.id)
    setUsuarios(newUsuarios);
}



    return (
   
      
        
        <div className='tbody-usuario-proveedor'>
           {usuarios.length>0 && usuarios.map(elemento => <Usuario key={elemento.id} eliminarUsuario={eliminarUsuario} usuario ={elemento} />)}

        </div>
   
     
   
   
  )

}
