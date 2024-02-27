import React, { useEffect, useState } from 'react'
import { deleteUsuarios, obtenerUsuarios } from '../../servicios/UsuarioServicios';
import Usuario from './Usuario';

export default function Usuarios() {
    const[usuarios,setUsuarios] =useState([]);
    useEffect( ()=>{ 
        obtenerUsuarios().then(data =>{setUsuarios(data) })
    },[] )

async function eliminarUsuario(usuario){
    await deleteUsuarios(usuario.id)
    const newUsuarios = usuarios.filter(us => us.id !== usuario.id)
    setUsuarios(newUsuarios);
}

function goBack() {
    window.history.back();
  }

    return (
   
      
        
        <div className='tbody-usuario-proveedor'>
           {usuarios.length>0 && usuarios.map(elemento => <Usuario key={elemento.id} eliminarUsuario={eliminarUsuario} usuario ={elemento} />)}

        </div>
   
     
   
   
  )

{/*
<table>
        <thead>
            <tr>
                <th>imagen</th>
        <th>id</th>
        <th>nombre</th>
        <th>apellido</th>
        <th>dni</th>
        <th>domicilio</th>
        <th>celular</th>
        <th>email</th>
        <th>password</th>
        <th>ACCIONES</th>
        </tr>
        
        </thead>
        <tbody>
           {usuarios.length>0 && usuarios.map(elemento => <Usuario key={elemento.id} eliminarUsuario={eliminarUsuario} usuario ={elemento} />)}

        </tbody>
        <button className='boton' onClick={goBack}>Volver</button>
    </table>
    */}

}
