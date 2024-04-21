import React, {  useState } from 'react'
import { LoginBack, UsuarioLog } from '../../servicios/LoginServicio';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { Modal } from 'react-bootstrap';

export default function Login({setIsAuthenticated}) {
  const navigate = useNavigate();
  const{setUser}=useUser();
  

  const[error,setError]=useState(false);

  const[showModal,setShowModal]=useState(false);
  const handleShowModal=()=>setShowModal(true);
  const handleCloseModal=()=> setShowModal(false);


  
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

handleCloseModal();
  
}



const sendDataToBackEnd = async() =>{
  try{

    await LoginBack(loginData);
    const token = localStorage.getItem("token")
    
    const userData = await UsuarioLog(token); // Obtener datos del usuario
    setUser(userData); 
    setIsAuthenticated(true); // Establecer isAuthenticated en true 
    alert("Bienvenido " + userData.username)

    navigate("/")
   
  }catch (error) {
    setError(true);
  
  }
}


    


return (
  <div>
    <button onClick={handleShowModal} className='nav-login' >Iniciar Sesión</button>

    <Modal  show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton className="modal-login">
        <Modal.Title>Iniciar Sesión</Modal.Title>
        {error && <p  className="error-message">Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.</p>}

      </Modal.Header>
      <Modal.Body className="modal-login-body" >
        <form onSubmit={handleSubmit} className='login'>
      <div className='login-input'>
          <label htmlFor="username" >Username</label>
          <input type="text" name='username' onChange={handleChange} value={loginData.username} />   
       </div>
   <div className='login-input'>
          <label htmlFor="clave">Contraseña</label>
          <input type="password" name='clave' onChange={handleChange} value={loginData.clave} />
  </div>
    <div className='login-button'>
          <button  type="submit">Acceder</button>
    </div>
        </form>
      </Modal.Body>
      
    </Modal>
    
  </div>
);
}

