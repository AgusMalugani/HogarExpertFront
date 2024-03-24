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
      console.log(userData.archivo);
  
      sendDataToBackend();
    };
  
    const sendDataToBackend = async () => {
      const formData = new FormData();
  
      // Anexar cada propiedad del objeto de usuario al FormData
      for (const key in userData) {
        formData.append(key, userData[key]);
        console.log(key, userData[key])
      }
      await saveProveedor(formData);
      navigate("/")
    
  
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
<p>✅Regístrate como zolver y consigue nuevos trabajos</p>
	
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
            <input name='nombreEmpresa' value={userData.nombreEmpresa} onChange={(handleChange)} placeholder="NOMBRE" type="text" className="input"/>
            <span>Nombre Empresa</span>
        </label>

        <label>
            <input name='matricula' value={userData.matricula} onChange={(handleChange)} placeholder="MATRICULA" type="text" className="input"/>
            <span>Matricula</span>
        </label>
    </div>  
            
    <label>
        <input name='email'  value={userData.email} onChange={(handleChange)} placeholder="EMAIL" type="email" className="input"/>
        <span>Email</span>
    </label> 
    <label>
        <input name='username'  value={userData.username} onChange={(handleChange)} placeholder="username" type="text" className="input"/>
        <span>Username</span>
    </label> 
        
    
    <label>
        <input name='password' value={userData.password} onChange={(handleChange)} placeholder="PASSWORD" type="password" className="input"/>
        <span>Password</span>
    </label>
    <label>
        <input name='RepetirPassword'  placeholder="REPITA PASSWORD" type="password" className="input"/>
        <span> Repita Password</span>
    </label>
    
    <label>
        <input name='celular' value={userData.celular} onChange={(handleChange)}placeholder="CELULAR" type="number" className="input"/>
        <span>Ingrese su celular</span>
    </label>

    <label>Ingrese el servicio que brindara: </label> 
       <select className='input' name="servicio" value={userData.servicio} onChange={handleChange}>
        <option value="3">INGRESE EL SERVICIO</option>
        <option value="PLOMERO">PLOMERO</option>
        <option value="GASISTA">GASISTA</option>
        <option value="ELECTRICISTA">ELECTRICISTA</option>
       </select>

       <label>
        <input name='costoXHora' value={userData.costoXHora} onChange={(handleChange)}placeholder="COSTO POR HORA" type="number" className="input"/>
        <span>Costo por hora </span>
    </label>

    <label>
        <input name="archivo" onChange={(handleChange)} type="file" />
        <span>archivo </span>
    </label>

    <button className="submit">Submit</button> 
    <br />
      <button className='boton' onClick={goBack}>Volver</button>
    <p className="signin">Ya tienes una cuenta? <a href="#">inicia sesion</a> </p>


</form>

          </div>
      </div>
</div>
<div>
  <span id='como-funciona-registro'>¿Como funciona?</span>
</div>
<div className='como-funciona-registro-elementos'>
  
  <div className='como-funciona-registro-elementos'>
    <img src="https://zolvers.com/img/comunidad/icono-ingresa.png" width={"50px"} alt="" />
    <p>Accede gratis a la comunidad</p>
  </div>
  
  <div className='como-funciona-registro-elementos'>
    <img src="https://zolvers.com/img/comunidad/icono-beneficio.png" width={"50px"} alt="" />
    <p> Elige los beneficios a los que quieres acceder </p>
    </div>
  
  <div className='como-funciona-registro-elementos'>
    <img src="https://zolvers.com/img/comunidad/icono-completa-perfil.png" width={"50px"} alt="" />
    <p> Completa tu perfil y nosotros nos encargamos del resto </p></div>
</div>
</>

  )
}
