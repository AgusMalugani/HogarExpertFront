import React, { useState } from 'react'
import { saveProveedor } from '../../servicios/ProveedorServicios';
import { useNavigate } from 'react-router-dom';

export default function GuardarProveedor() {

    
  const navigate = useNavigate();

  const [userData,setUserData] = useState({
    nombreEmpresa: "",
    matricula: "",
    servicio: "",
    celular: "",
    email: "",
    password: "",
    costoXHora: 0,
    username :"",
    roles:null,
    archivo: null,
    localidad :"",
    descripcion:""
  });

  const handleChange = (e) => {
    if (e.target.name === "archivo") {
      setUserData({
        ...userData,
        [e.target.name]: e.target.files[0]
      });
    
    }else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
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
      await saveProveedor(formData);
      navigate("/")
    alert("Proveedor creado")
  
    };

    function goBack() {
      window.history.back();
    }


  return (
    <>
    <div id='cabecera-formulario' >
    <h2>Encuentra tu nuevo cliente aqui</h2>
    <h4>Carga tu perfil GRATIS y empieza a generar trabajo</h4>
  </div>

    <div className='formulario'>
   
<div className='escritura-formulario' >
  	
<h4>Elige los trabajos ideales para ti</h4>
<p>✅Regístrate como proveedor y consigue nuevos trabajos</p>
	
<h4>Tu perfil 100% GRATIS</h4>
<p>✅Puede crear tu perfil GRATIS y ver los trabajos que puedes elegir.</p>
</div>

<div>

<div className='formulario-registro'>

<form className="form" onSubmit={handleSubmit} encType="multipart/form-data"
        method="post">
    
    <p className="message">Registrese ahora y obtenga acceso a nuestra app como proveedor de servicio. </p>
        <div className="flex">
        <label>
            <input name='nombreEmpresa' value={userData.nombreEmpresa} onChange={(handleChange)}  type="text" className="input"   required title="Por favor, introduce el nombre"
  maxlength="20"
  minlength="5"/>
            <span>Nombre Empresa</span>
        </label>

        <label>
            <input name='matricula' value={userData.matricula} onChange={(handleChange)}  type="text" className="input"   required title="Por favor, introduce tu matricula"
  maxlength="15"
  minlength="5"/>
            <span>Matricula</span>
        </label>
    </div>  
            
    <label>
        <input name='email'  value={userData.email} onChange={(handleChange)}  type="email" className="input"  required title="Por favor, introduce tu Email"
/>
        <span>Email</span>
    </label> 
    <label>
        <input name='username'  value={userData.username} onChange={(handleChange)}  type="text" className="input"   required title="Por favor, introduce tu Username"
  maxlength="15"
  minlength="5"/>
        <span>Username</span>
    </label> 
        
    
    <label>
        <input name='password' value={userData.password} onChange={(handleChange)}  type="password" className="input"   required title="Por favor, introduce tu password"
  minlength="8"/>
        <span>Password</span>
    </label>
  
    
    <label>
        <input name='celular' value={userData.celular} onChange={(handleChange)} type="number" className="input"   required title="Por favor, introduce tu celular"
  maxlength="15"
  minlength="10"/>
        <span>Ingrese su celular</span>
    </label>

    <label>
        <input name='localidad' value={userData.localidad} onChange={(handleChange)} type="text" className="input"   required title="Por favor, introduce tu Localidad"/>
        <span>Localidad</span>
    </label>

    <label>Ingrese el servicio que brindara:  
       <select className='input' name="servicio" value={userData.servicio} onChange={handleChange}   required title="Por favor, introduce tu servicio">
        <option value="3">INGRESE EL SERVICIO</option>
        <option value="PLOMERO">PLOMERO</option>
        <option value="GASISTA">GASISTA</option>
        <option value="ELECTRICISTA">ELECTRICISTA</option>
        <option value="PINTOR">PINTOR</option>
        <option value="CERRAJERO">CERRAJERO</option>
        <option value="CONSTRUCCION">CONSTRUCCION</option>
        <option value="ALARMA">ALARMA</option>
        <option value="ELECTRODOMESTICO">ELECTRODOMESTICO</option>
        <option value="CARPINTERO">CARPINTERO</option>
        <option value="JARDINERO">JARDINERO</option>
       </select>
       </label>

       <label> Ingrese una descripcion de su trabajo 
        <textarea name='descripcion' value={userData.descripcion} onChange={(handleChange)} type="text" className="input"   required title="Por favor, introduce tu descripcion"
  maxlength="255"
/>
        </label>

    <label>
        <input name="archivo" onChange={(handleChange)} type="file" />
        <span>archivo </span>
    </label>

    <button className="submit">Submit</button> 
    <br />
      <button className='boton' onClick={goBack}>Volver</button>
   

</form>

          </div>
      </div>
</div>


</>

  )
}
