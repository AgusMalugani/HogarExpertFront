import React, { useEffect, useState } from 'react'
import { trabajosEsperandoProv, trabajosEsperandoUsuario } from '../../servicios/TrabajoServicio';
import { useUser } from '../sesion/UserContext';
import { Link } from 'react-router-dom';

export default function TrabajosEsperandoProv() {
 const{user}=useUser();
    const[trabajos,setTrabajos]=useState();
const token = localStorage.getItem("token")
    
        useEffect(()=>{
            if(user.roles.includes("PROVEEDOR")){
            trabajosEsperandoProv(user.id,token).then(data=>
                { if (JSON.stringify(data) !== JSON.stringify(trabajos)) {
                    setTrabajos(data);
                 
                }
            });             
              
        }
    },[trabajos,user.id]);
       
   
    
    
        useEffect(()=>{
            if(user.roles.includes("ADMIN") || user.roles.includes("USER")){
            trabajosEsperandoUsuario(user.id,token).then(data=>{
                if(JSON.stringify(data)!== JSON.stringify(trabajos)){
                    setTrabajos(data)
                    
                }
                
            });
            }
           
        },[trabajos,user.id]);
    
   

  return (
    <div>
        { trabajos && trabajos.length>0 && (user.roles.includes("ADMIN") || user.roles.includes("USER")) && <Link to="/trabajo/lista">tienes {trabajos.length} Trabajos pendientes ya cotizados</Link>}
        { trabajos && trabajos.length>0 && user.roles.includes("PROVEEDOR") && <Link to="/trabajo/lista">tienes {trabajos.length} Trabajos pendientes para cotizar</Link>}
        { trabajos && trabajos.length===0 && <p>No tienes trabajos pendientes</p>}
      
    </div>
  )
}
