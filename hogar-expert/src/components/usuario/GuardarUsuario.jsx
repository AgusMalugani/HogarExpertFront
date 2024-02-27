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
    archivo: null,
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
    console.log(userData);
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
    navigate("/");

  };

  function goBack() {
    window.history.back();
  }

  return (
    <div className="formulario-registro">

      <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="post"
        >
        <p className="title">Registro </p>
        <p className="message">
          Registrese ahora y obtenga acceso a nuestra app{" "}
        </p>

          <div className="flex"> 

      
          <label>
            <input
              type="text"
              name="nombre"
              value={userData.nombre}
              onChange={handleChange}
              placeholder="nombre"
              className="input"
              />
            <span>nombre</span>
          </label>

          <label>
            <input
              type="text"
              name="apellido"
              value={userData.apellido}
              onChange={handleChange}
              placeholder="apellido"
              className="input"
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
            placeholder="celular"
            className="input"
          />
          <span>celular</span>
        </label>

        <label>
          <input
            type="number"
            name="dni"
            value={userData.dni}
            onChange={handleChange}
            placeholder="DNI"
            className="input"
          />
          <span>DNI</span>
        </label>

        <label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="input"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            className="input"
          />
          <span>Password </span>
        </label>

        <label>
          <input
            type="text"
            name="domicilio"
            value={userData.domicilio}
            onChange={handleChange}
            placeholder="DOMICILIO"
            className="input"
          />
          <span>Domicilio </span>
        </label>

        <label>
          <input
            type="file"
            name="archivo"
            onChange={handleChange}
            
            className="input"
          />
        </label>

        <button className="submit">Submit</button>
        <br />
        <button className="boton" onClick={goBack}>
          Volver
        </button>
        <p className="signin">
          Ya tienes una cuenta? <a href="#">inicia sesion</a>{" "}
        </p>
      </form>
    </div>
  );

  
    /*}
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
        <input type="number" name="dni" value={userData.dni} onChange={handleChange} />
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
        <input type="file" name="archivo" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    
  */
  
}
