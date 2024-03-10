import React, { useState } from 'react'
import { LoginBack } from '../servicios/LoginServicio';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
/*
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");



function handleSubmit(e){
  e.preventDefault();
  
  sendDataToBackEnd();
    
  }
  
  const sendDataToBackEnd = async() =>{
  
  
  await LoginBack(username,password);
    navigate("/")
  */

  const[loginData,setLoginData]=useState({
    username : "",
    password : ""
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

await LoginBack(loginData);
console.log(loginData)

 // navigate("/")


}

  return (
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' onChange={handleChange} value={loginData.username} />

        <label htmlFor="password">password</label>
        <input type="password" name='password' onChange={handleChange} value={loginData.password}/>

        <button>ingresar</button>
      </form>

    </div>
  )
}
