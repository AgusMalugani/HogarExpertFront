import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { obtenerUsuarios, perfilUsuario, updateUsuario } from '../../servicios/UsuarioServicios';


export default function ModificarUsuario() {
    const {id} = useParams();
       const[userData,setUserData]=useState({})
const token = localStorage.getItem("token");

       useEffect(()=>{
        obtenerUsuarios(token).then(data=>setUserData(data));
       },[id])

       function handleChange(e){
        if(e.target.name==="archivo"){
          setUserData({
            ...userData,
            [e.target.name]:e.target.files[0]
          })
        }else{
          setUserData({
            ...userData,
            [e.target.name]:e.target.value
          })
        }


       }

       function handleSubmit(e){
        e.preventDefault();
        envioBackEnd();
       }

       function envioBackEnd(){
        updateUsuario(id,userData);
        console.log("usuario cambiado" + userData);
      //  navigate("/");
      
       }

          
          
        

        function goBack() {
          window.history.back();
        


  return (
    <form onSubmit={handleSubmit}>
      <label>nombre</label>
       <input  value={userData.nombre} onChange={handleChange} type="text" name='nombre' placeholder={usuario.nombre} />

       <label> apellido</label>
       <input value={userData.apellido} onChange={handleChange}  type="text" name='apellido' placeholder={usuario.apellido} />

       <label> dni</label>
       <p> {userData.dni} </p>

       <label>celular</label>
       <input  value={userData.celular} onChange={handleChange} type="text" name='celular' placeholder={usuario.celular} />

       <label>domicilio</label>
       <input  value={userData.domicilio} onChange={handleChange} type="text" name='domicilio' placeholder={usuario.domicilio} />

       <label>email</label>
       <input  value={userData.email} onChange={handleChange} type="email" name='email' placeholder={usuario.email} />

       <label>password</label>
       <input  value={userData.password} onChange={handleChange} type="password" name='password' placeholder="password" />
       <br />

      <button className='boton'>modificar</button>
      <br />
      <button className='boton' onClick={goBack}>Volver</button>
    </form>
  )
}
}
