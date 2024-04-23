import React, { useEffect, useState } from 'react'
import { deleteTrabajo, listaTrabajo, listaTrabajoUsuario } from '../../servicios/TrabajoServicio'
import Trabajo from './Trabajo'
import { useUser } from '../sesion/UserContext'
import { useParams } from 'react-router-dom'

export default function Trabajos() {


  const{user} = useUser();
  const token = localStorage.getItem("token");
  
    const[trabajos,setTrabajos]=useState([])
  if(user && user.roles.includes('PROVEEDOR')){
    useEffect( ()=>{
      listaTrabajo(user.id,token).then( data => {setTrabajos(data)} )
  },[] )
  } else if(user&& user.roles.includes('ADMIN')){
    useEffect( ()=>{
      listaTrabajoUsuario(user.id,token).then( data => {setTrabajos(data)} )

  },[] )
  }else if(user&& user.roles.includes('USER')){
    useEffect( ()=>{
      listaTrabajoUsuario(user.id,token).then( data => {setTrabajos(data)} )

  },[] )
  }
   
    async function eliminarTrabajo(trabajo){
      await deleteTrabajo(trabajo.id,token)
      const newTrabajos = trabajos.filter( tr => tr.id !== trabajo.id)
      setTrabajos(newTrabajos);
    }

    function trabajoCotizado(){
     let bandera = 0;
      trabajos.map(e=>{
        if(e.estado==="ESPERANDO" && e.total>0){
          bandera ++;
       }
      })
      if(bandera === 0){
        return false;
      }else{
        return true;
      }
    }

    function trabajoSinCotizar(){
      let bandera = 0;
      trabajos.map(e=>{
        if(e.estado==="ESPERANDO"&& e.total===0){
          bandera++;
           
        }      
      })
      if(bandera === 0){
        return false
      }else{
        return true;
      }
    }



  
  
    return (
    
      <div>
         {trabajos.length>0 && 
         <div>
        <h2 className='lista-trabajos-titulo' >TRABAJOS ACTIVOS</h2>
   <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "ACTIVO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
  </div>
          <div>
  
        <h2 className='lista-trabajos-titulo'>TRABAJOS ESPERANDO</h2>
        
        {trabajoCotizado() ===true && <h4 className='lista-trabajos-subtitulos'>Trabajos Cotizados</h4>}
   <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "ESPERANDO" && elemento.total > 0 && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
   </div>
   
   {trabajoSinCotizar() === true &&<h4 className='lista-trabajos-subtitulos'>Trabajos sin Cotizacion</h4>}
   <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "ESPERANDO" && elemento.total=== 0 &&  <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
   </div>

   </div>
  
        <h2 className='lista-trabajos-titulo'>TRABAJOS FINALIZADOS</h2>
     <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "FINALIZADO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
     </div>

     <h2 className='lista-trabajos-titulo'>TRABAJOS RECHAZADOS</h2>
     <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "RECHAZADO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
     </div>
     </div>
   }

   {trabajos.length===0 && <h2 className='sin-lista-trabajo'>AUN NO TIENES TRABAJOS</h2>}

    </div>
  
  )
}
