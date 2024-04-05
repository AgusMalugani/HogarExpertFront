import React, { useEffect, useState } from 'react'
import { deleteTrabajo, listaTrabajo, listaTrabajoUsuario } from '../../servicios/TrabajoServicio'
import Trabajo from './Trabajo'
import { useUser } from '../sesion/UserContext'
import { useParams } from 'react-router-dom'

export default function Trabajos() {

  //const{id}=useParams();
  const{user} = useUser();
  
    const[trabajos,setTrabajos]=useState([])
  if(user && user.roles.includes('PROVEEDOR')){
    useEffect( ()=>{
      listaTrabajo(user.id).then( data => {setTrabajos(data)} )
  },[] )
  } else if(user&& user.roles.includes('ADMIN')){
    useEffect( ()=>{
      listaTrabajoUsuario(user.id).then( data => {setTrabajos(data)} )

  },[] )
  }else if(user&& user.roles.includes('USER')){
    useEffect( ()=>{
      listaTrabajoUsuario(user.id).then( data => {setTrabajos(data)} )

  },[] )
  }
   
    async function eliminarTrabajo(trabajo){
      await deleteTrabajo(trabajo.id)
      const newTrabajos = trabajos.filter( tr => tr.id !== trabajo.id)
      setTrabajos(newTrabajos);
    }



  function goBack(){
    window.history.back();
  }
  
    return (
      <div >
        <h2 className='lista-trabajos-titulo' >TRABAJOS ACTIVOS</h2>
   <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "ACTIVO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
  </div>
        <h2 className='lista-trabajos-titulo'>TRABAJOS ESPERANDO</h2>
   <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "ESPERANDO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
   </div>
  
        <h2 className='lista-trabajos-titulo'>TRABAJOS FINALIZADOS</h2>
     <div className='lista-trabajos'>
        {trabajos.length > 0 && trabajos.map(  elemento => elemento.estado === "FINALIZADO" && <Trabajo key={elemento.id} trabajo={elemento} eliminarTrabajo ={eliminarTrabajo} />  ) }
     </div>
   
    
    
  {/*  <button onClick={goBack}>Volver</button> */}
    </div>
  )
}
