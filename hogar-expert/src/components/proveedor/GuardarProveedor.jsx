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
    
  
    };

    function goBack() {
      window.history.back();
    }


  return (
<div className='formulario-registro'>



<form className="form" onSubmit={handleSubmit} encType="multipart/form-data"
        method="post">
    <p className="title">Registro </p>
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
        <input name='password' value={userData.password} onChange={(handleChange)} placeholder="" type="password" className="input"/>
        <span>Password</span>
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
        <input name="archivo" onChange={(handleChange)} type="file" className="input"/>
        <span>archivo </span>
    </label>

    <button className="submit">Submit</button> 
    <br />
      <button className='boton' onClick={goBack}>Volver</button>
    <p className="signin">Ya tienes una cuenta? <a href="#">inicia sesion</a> </p>


</form>






{/*



    <form onSubmit={crearProveedor}>
       <label>Ingrese el nombre de la empresa: </label> 
       <input value={nombreEmpresa} onChange={ (evento)=>setNombreEmpresa(evento.target.value) } type="text" name='nombreEmpresa' placeholder='nombreEmpresa' />
       <br />
       
       <label>Ingrese su matricula: </label> 
       <input value={matricula} onChange={ (evento)=>setMatricula(evento.target.value) } type="text" name='matricula' placeholder='matricula' />
       <br />
       
       <label>Ingrese el servicio que brindara: </label> 
       <select name="servicio" value={servicio} onChange={ (evento)=>setServicio(evento.target.value) }>
        <option value="3">INGRESE EL SERVICIO</option>
        <option value="0">PLOMERO</option>
        <option value="1">GASISTA</option>
        <option value="2">ELECTRICISTA</option>
       </select>
       <br />
       
       <label>Ingrese su celular: </label> 
       <input value={celular} onChange={ (evento)=>setCelular(evento.target.value) } type="text" name='celular' placeholder='celular' />
       <br />
       <label>Ingrese su email: </label> 
       <input  value={email} onChange={ (evento)=>setEmail(evento.target.value) } type="email" name='email' placeholder='email' />
       <br />
       <label>Ingrese el costo por hora de su servicio: $</label> 
       <input value={costoXHora} onChange={ (evento)=>setCostoXHora(evento.target.value) }  type="number" name='costoXHora' placeholder='costo por hora' />
       
       <br />

    <button>Crear</button>

    
    {error === true && <p> hubo un error al cargar los datos. </p>}

    <br />
      <button className='boton' onClick={goBack}>Volver</button>

    </form>
    */}

</div>

  )
}
