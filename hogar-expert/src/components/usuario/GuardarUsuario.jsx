import React, { useState } from 'react'
import {  saveUsuario } from '../../servicios/UsuarioServicios'
import { useNavigate } from 'react-router-dom'

export default function GuardarUsuario() {


const[nombre,setNombre] = useState("")
const[apellido,setApellido] = useState("")
const[celular,setCelular] = useState("")
const[dni,setDni] = useState(0)
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const[domicilio,setDomicilio] = useState("")

const[creacion,setCreacion]=useState(false)

const navigate=useNavigate()

async function CrearUsuario(evento){
  evento.preventDefault();
  if(nombre === "" || apellido === "" || celular === "" || dni<0 || email === "" || password === "" || domicilio === ""   ){
setCreacion(true)
return
}
setCreacion(false)


  const newUsuario ={
    nombre,
    apellido,
    celular,
    dni,
    email,
    password,
    domicilio
}

  await saveUsuario(newUsuario);
  navigate("/") 
}

function goBack() {
  window.history.back();
}

  return (
    <form onSubmit={CrearUsuario} >
        <input type="text" value={nombre} name='nombre' onChange={(evento)=> setNombre(evento.target.value) }  placeholder='nombre' />
        <input type="text" value={apellido} name='apellido' onChange={(evento)=>setApellido(evento.target.value)}   placeholder='apellido' />
        <input type="text" value={celular} name='celular' onChange={(evento)=>setCelular(evento.target.value)}   placeholder='celular' />
        <input type="number" value={dni} name='dni' onChange={(evento)=>setDni(evento.target.value)}  placeholder='dni' />
        <input type="email" value={email} name='email' onChange={(evento)=>setEmail(evento.target.value)}   placeholder='email' />
        <input type="password" value={password} name='password' onChange={(evento)=>setPassword(evento.target.value)}   placeholder='password' />
        <input type="text" value={domicilio} name='domicilio' onChange={(evento)=>setDomicilio(evento.target.value)}  placeholder='domicilio' />
        <button>CREAR</button>
        {creacion === true && <p>error al crear el usuario</p>}
        <br />

        <button className='boton' onClick={goBack}>Volver</button>
        
  </form>
  )
  }