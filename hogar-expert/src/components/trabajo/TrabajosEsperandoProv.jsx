import React, { useEffect, useState } from 'react'
import { trabajosEsperandoProv, trabajosEsperandoUsuario } from '../../servicios/TrabajoServicio';
import { useUser } from '../sesion/UserContext';
import { Link } from 'react-router-dom';

export default function TrabajosEsperandoProv() {
 const{user}=useUser();
    const[trabajos,setTrabajos]=useState();

    if(user.roles.includes("PROVEEDOR")){
        useEffect(()=>{
            trabajosEsperandoProv(user.id).then(data=>{setTrabajos(data)});
        },[user.id]);
        console.log(trabajos);
    } 
    
    else if(user.roles.includes("ADMIN") || user.roles.includes("USER")){
        useEffect(()=>{
            trabajosEsperandoUsuario(user.id).then(data=>{setTrabajos(data)});
            console.log(trabajos);
        },[user.id]);
    }
   

  return (
    <div>
        { trabajos && trabajos.length>0 && <Link to="/trabajo/lista">tienes {trabajos.length} Trabajos pendientes</Link>}
        { trabajos && trabajos.length===0 && <p>No tienes trabajos pendientes</p>}
      
    </div>
  )
}
