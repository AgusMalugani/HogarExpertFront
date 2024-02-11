import React, { useEffect, useState } from 'react'
import { crearComentario } from '../../servicios/ComentarioServicio'
import { detalleProveedor } from '../../servicios/ProveedorServicios'
import { perfilUsuario } from '../../servicios/UsuarioServicios'
import { verTrabajo } from '../../servicios/TrabajoServicio'
import { useNavigate } from 'react-router-dom'


export default function GuardarComentario() {
    const navigate = useNavigate();

const[IDproveedor,setIDProveedor]=useState(0)

const[proveedor,setProveedor]=useState({})
useEffect( ()=>{
    if(IDproveedor){
    detalleProveedor(IDproveedor).then(data=> setProveedor(data)) }
   },[IDproveedor] )



  const[IDusuario,setIDUsuario]=useState(0) 
const[usuario,setUsuario]=useState({})
useEffect(()=>{
    if(IDusuario){

    perfilUsuario(IDusuario).then(data=> setUsuario(data))}
},[IDusuario])



const[IDtrabajo,setIDTrabajo]=useState(0)
const[trabajo,setTrabajo]=useState({})
useEffect(()=>{
    if(IDtrabajo){
 verTrabajo(IDtrabajo).then(data=> setTrabajo(data))}
},[IDtrabajo])



const[mensaje,setMensaje]=useState("")
const[calificacion,setCaliicacion]=useState(0)





async function cargarComentario(evento){
evento.preventDefault()

const newComentario= {
proveedor : proveedor,
usuario : usuario,
trabajo : trabajo,
mensaje,
calificacion

}

await crearComentario(newComentario);

navigate("/")
}

function goBack(){
    window.history.back()
}



  return (
    <div>
        <form onSubmit={cargarComentario}>
        <label htmlFor="IDproveedor">Ingrese el id del proveedor</label>
        <input type="number" name='IDproveedor' value={IDproveedor} onChange={e=>setIDProveedor(e.target.value)} />
        <br />


        <label htmlFor="IDusuario">ingrese el id del usuario</label>
        <input type="number" name='IDusuario' value={IDusuario} onChange={e=> setIDUsuario(e.target.value)} />
        <br />
        <label htmlFor="IDtrabajo">ingrese el id del trabajo</label>
        <input type="number"  name='IDtrabajo' value={IDtrabajo} onChange={e=> setIDTrabajo(e.target.value)}/>
        <br />
        <label htmlFor="mensaje">INGRESE EL MENSAJE</label>
        <textarea type="text" name='mensaje' value={mensaje} onChange={e=> setMensaje(e.target.value)} />
        <br />
        <label htmlFor="calificacion">INGRESE LA CALIFICACION DE 1 A 5</label>
        <input type="number" name='calificacion' value={calificacion} onChange={e=> setCaliicacion(e.target.value)} />
        <br />
        <button className='boton' >CREAR</button>
        </form>    
        <br />
        <button className='boton' onClick={goBack}>volver</button>
        </div>
  )
}
