import React, { useState } from "react";
import { saveUsuario } from "../../servicios/UsuarioServicios";
import { useNavigate } from "react-router-dom";

export default function GuardarUsuario() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    dni: 0,
    email: "",
    password: "",
    domicilio: "",
    username:"",
    roles:null,
    archivo: null,
    localidad:""
  });

  const handleChange = (e) => {
    if (e.target.name === "archivo") {
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
 
    sendDataToBackend();
  };

  const sendDataToBackend = async () => {
    const formData = new FormData();

    // Anexar cada propiedad del objeto de usuario al FormData
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    await saveUsuario(formData);
    navigate("/");
    alert("Usuario Creado")

  };

  function goBack() {
    window.history.back();
  }

  return (
    <>
    <div id='cabecera-formulario' >
    <h2>Encuentra la solucion a tu problema de la mano de profesionales</h2>
    <h4>Carga tu perfil GRATIS </h4>
  </div>

    <div className='formulario'>
   
<div className='escritura-formulario' >
  	
<h4>Elige los trabajos ideales para ti</h4>
<p>✅Regístrate y contrata nuestros profesionales </p>
	
<h4>Tu perfil 100% GRATIS</h4>
<p>✅Puede crear tu perfil GRATIS y ver los servicios que puedes tomar.</p>
</div>

<div>

<div className='formulario-registro'>

<form className="form" onSubmit={handleSubmit} encType="multipart/form-data"
        method="post">
    
    <p className="message">Registrese ahora y obtenga acceso a nuestra app. </p>
    <div className="flex"> 
   
   
   <label>
   <input
   type="text"
   name="nombre"
   value={userData.nombre}
   onChange={handleChange}
   
   className="input"
   required title="Por favor, introduce tu nombre"
   />
   <span>nombre</span>
   </label>
   
   <label>
   <input
   type="text"
   name="apellido"
   value={userData.apellido}
   onChange={handleChange}
  
   className="input"
   required title="Por favor, introduce tu apellido"
   />
   <span>apellido</span>
   </label>
   
   </div>
   
   <label>
   <input
   type="text"
   name="celular"
   value={userData.celular}
   onChange={handleChange}
   className="input"
  required title="Por favor, introduce tu celular"
  maxlength="15"
  minlength="10"
            />

            <span>celular</span>
            </label>
            
            <label>
            <input
            type="number"
            name="dni"
            value={userData.dni}
            onChange={handleChange}       
            className="input"
            required title="Por favor, introduce tu DNI"
            maxlength="10"
            minlength="6"
            />
            <span>DNI</span>
            </label>
            
            <label>
            <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}      
            className="input"
            required title="Por favor, introduce tu Email"
            />
            <span>Email</span>
            </label>
            
            <label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          
            className="input"
            required title="Por favor, introduce tu Username"
            maxlength="15"
            minlength="6"
            />
            <span>username</span>
            </label>
            
            <label>
            <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
     
            className="input"
            required title="Por favor, introduce tu Password"
            minlength="8"
            />
            <span>Password</span>
            </label>
            
            <label>
            <input
            type="text"
            name="domicilio"
            value={userData.domicilio}
            onChange={handleChange}
            
            className="input"
            required title="Por favor, introduce tu domicilio"
            maxlength="20"
            mixlength="10"
            />
            <span>Domicilio </span>
            </label>

            <label>
            <input
            type="text"
            name="localidad"
            value={userData.localidad}
            onChange={handleChange}
          
            className="input"
            required title="Por favor, introduce tu Localidad"
            />
            <span>Localidad </span>
            </label>
            
            <label>
            <input
            type="file"
            name="archivo"
            onChange={handleChange}           
            className="input"
            required title="Por favor, introduce tu foto de perfil"
            />
            </label>
            
            <button className="submit">Submit</button>
            <br />
            <button className="boton" onClick={goBack}>
            Volver
        </button>
  
        </form>
        </div>

      </div>
</div>

</>
   
        );
        
        
      }
