import React, { useEffect, useState } from 'react'
import { LoginBack, UsuarioLog } from '../../servicios/LoginServicio';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

export default function Login({setIsAuthenticated}) {
  const navigate = useNavigate();
  const{setUser}=useUser();
  const { user } = useUser();

  const[loginData,setLoginData]=useState({
    username : "",
    clave : ""
  })

  const handleChange = (e)=>{
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }


  

function handleSubmit(e){
e.preventDefault();

sendDataToBackEnd();
  
}



const sendDataToBackEnd = async() =>{
  try{

    await LoginBack(loginData);
    const token = localStorage.getItem("token")
    console.log("token ",token)
    const userData = await UsuarioLog(token); // Obtener datos del usuario
    setUser(userData); 
    setIsAuthenticated(true); // Establecer isAuthenticated en true 
    console.log(userData)
    navigate("/")
    
  }catch (error) {
    setError('Credenciales inválidas. Inténtalo de nuevo.');
  }
}


    


  return (
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' onChange={handleChange} value={loginData.username} />

        <label htmlFor="clave">clave</label>
        <input type="password" name='clave' onChange={handleChange} value={loginData.clave}/>

        <button>ingresar</button>
      </form>

    </div>
  )
  }
