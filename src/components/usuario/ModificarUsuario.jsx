import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { obtenerUsuarios, perfilUsuario, updateUsuario, updateUsuarioImg } from '../../servicios/UsuarioServicios';
import { useUser } from '../sesion/UserContext';


export default function ModificarUsuario() {

    const {id} = useParams();
    const {user}=useUser();
    const {setUser}=useUser();
       const[userData,setUserData]=useState({})
       useEffect(()=>{
      
        setUserData(user)
      
       },[id])
     
       

const[imagen,setImagen]=useState(null);
       function handleChangeImg(e){
if(e.target.name === "archivo"){
setImagen({
  ...imagen,
  [e.target.name]:e.target.files[0]
})
}
       }

   
       function handleChange(e){
    
          setUserData({
            ...userData,
            [e.target.name]:e.target.value
          })
        }




      

       function handleSubmit(e){
        e.preventDefault();
        envioBackEnd();
       }


const token = localStorage.getItem("token");

       async function envioBackEnd(){
        const formData = new FormData();

    for (const key in userData) {
      formData.append(key, userData[key]);
    }
       await  updateUsuario(id,formData, token);
        console.log("usuario cambiado" );
     setUser(userData);
      if(imagen !== null){
        const formDataImg = new FormData();

        for (const key in imagen) {
          formDataImg.append(key, imagen[key]);
        }
       await updateUsuarioImg(id,formDataImg,token);
        console.log(imagen);
      }
      
      navigate("/");
       }

          
          
        

        function goBack() {
          window.history.back();
        }
        


  return (
    
    <div>
     
 <h1 className='modificar-h1'>MODIFICAR USUARIO</h1>
        <div className='contenedor-modificar-usuario-proveedor' >

    
    <form onSubmit={handleSubmit} className='modificar-usuario-proveedor'>
      <label>NOMBRE</label>
       <input  value={userData.nombre} onChange={handleChange} type="text" name='nombre' placeholder={userData.nombre} />

       <label> APELLIDO</label>
       <input value={userData.apellido} onChange={handleChange}  type="text" name='apellido' placeholder={userData.apellido} />

       <label> DNI</label>
       <p> {userData.dni} </p>

       <label>CELULAR</label>
       <input  value={userData.celular} onChange={handleChange} type="text" name='celular' placeholder={userData.celular} />

       <label>DOMICILIO</label>
       <input  value={userData.domicilio} onChange={handleChange} type="text" name='domicilio' placeholder={userData.domicilio} />
       <label>LOCALIDAD</label>
       <input  value={userData.localidad} onChange={handleChange} type="text" name='localidad' placeholder={userData.localidad} />

       <label>EMAIL</label>
       <input  value={userData.email} onChange={handleChange} type="email" name='email' placeholder={userData.email} />

       

         <label>FOTO PERFIL </label>
        <input type="file"  onChange={handleChangeImg} name='archivo'  /> 
        
      <button className='boton'>Modificar</button>
      
      <button className='boton' onClick={goBack}>Volver</button>
    </form>
    </div>
    </div>
 
  )
      }

