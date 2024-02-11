import React, { useState } from 'react'
import { saveUsuario } from '../../servicios/UsuarioServicios'
import { useNavigate } from 'react-router-dom'

export default function GuardarUsuario() {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    dni: '',
    email: '',
    password: '',
    domicilio: '',
    imagen: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'imagen') {
      setUserData({
        ...userData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales antes de enviar el formulario al backend

    // Enviar el formulario al backend
    sendDataToBackend();
  };

  const sendDataToBackend = async () => {
    const formData = new FormData();

    // Anexar cada propiedad del objeto de usuario al FormData
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
await saveUsuario(formData);
    
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" method='post' >
      <label>
        Nombre:
        <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" name="apellido" value={userData.apellido} onChange={handleChange} />
      </label>
      <br />
      <label>
        Celular:
        <input type="text" name="celular" value={userData.celular} onChange={handleChange} />
      </label>
      <br />
      <label>
        DNI:
        <input type="text" name="dni" value={userData.dni} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Domicilio:
        <input type="text" name="domicilio" value={userData.domicilio} onChange={handleChange} />
      </label>
      <br />
      <label>
        Imagen:
        <input type="file" name="imagen" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  )












  /*
  const[nombre,setNombre] = useState("")
  const[apellido,setApellido] = useState("")
  const[celular,setCelular] = useState("")
  const[dni,setDni] = useState(0)
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[domicilio,setDomicilio] = useState("")
  const[imagen,setImagen]=useState({});
  
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
  
    await saveUsuario(newUsuario,imagen);
    navigate("/") 
  }
  
  
  
  function goBack() {
    window.history.back();
  }
  
    return (
      <form onSubmit={CrearUsuario} encType='multipart/form-data' >
          <input type="text" value={nombre} name='nombre' onChange={(evento)=> setNombre(evento.target.value) }  placeholder='nombre' />
          <input type="text" value={apellido} name='apellido' onChange={(evento)=>setApellido(evento.target.value)}   placeholder='apellido' />
          <input type="text" value={celular} name='celular' onChange={(evento)=>setCelular(evento.target.value)}   placeholder='celular' />
          <input type="number" value={dni} name='dni' onChange={(evento)=>setDni(evento.target.value)}  placeholder='dni' />
          <input type="email" value={email} name='email' onChange={(evento)=>setEmail(evento.target.value)}   placeholder='email' />
          <input type="password" value={password} name='password' onChange={(evento)=>setPassword(evento.target.value)}   placeholder='password' />
          <input type="text" value={domicilio} name='domicilio' onChange={(evento)=>setDomicilio(evento.target.value)}  placeholder='domicilio' />
          <input type="file" name='imagen' onChange={evento=> setImagen(evento.target.files[0])} />
          <button>CREAR</button>
          {creacion === true && <p>error al crear el usuario</p>}
          <br />
  
          <button className='boton' onClick={goBack}>Volver</button>
          
    </form>
    )
    */
}