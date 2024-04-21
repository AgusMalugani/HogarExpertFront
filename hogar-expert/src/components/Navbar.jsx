import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logoHogar from '../img/logoHogar.png'
import { useUser } from './sesion/UserContext';
import Login from './sesion/Login';
import TrabajosEsperandoProv from './trabajo/TrabajosEsperandoProv';



const Navbar = ({isAuthenticated , setIsAuthenticated }) => {

const navigate = useNavigate();

const { user } = useUser();


  const handleSelectOption = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'perfil') {

      if (user && user.roles.includes('PROVEEDOR')) {
        navigate('/proveedor/detalle');
      } else {
        navigate('/usuario/perfil');
      }
      
  
    } else if (selectedOption === 'logout') {
   
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      console.log("Token eliminado de localStorage");
      navigate("/");
      alert("session cerrada")
    } else if (selectedOption === 'trabajos'){
      navigate(`/trabajo/lista`)

    } else if(selectedOption ==="proveedoresPorLocalidad"){
      navigate(`/proveedor/listaProv/${user.localidad}`);
    }
  };



  return (

<>

<nav className='navbar' >

  <div className='logo'>
  <Link to={"/"} > <img src={logoHogar} alt=""  /> </Link>
  </div>

  <div>
    <ul className='nav-list' >
 {isAuthenticated && user && ( <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
🔔
</a>
<ul className="dropdown-menu dropdown-menu-dark">
<li className='nav-MiPerfil'><TrabajosEsperandoProv/></li>
<li>
  <hr className="dropdown-divider"/>
</li>
</ul>
</li>
)}
<li ><Link className='nav-link' to={"/faqs"}>Preguntas Frecuentes</Link></li>



     {!isAuthenticated && <li> <Login  setIsAuthenticated={setIsAuthenticated} /> </li>}
     {!isAuthenticated && <li> <Link className="nav-link" to={`/usuario/crear`}>Registro  </Link>  </li>}
     {isAuthenticated && user&& user.roles.includes("ADMIN") &&<li> <Link className="nav-link" to={`/usuario/lista`}>lista usuarios  </Link>  </li>}
    {isAuthenticated&& user && user.roles.includes("USER")  && <li ><button  onClick={handleSelectOption} value="proveedoresPorLocalidad" className='nav-MiPerfil '>Proveedores por zona</button></li>}
    {isAuthenticated && user&& user.roles.includes("ADMIN") &&<li> <Link className="nav-link" to={`/proveedor/lista`}>lista proveedores  </Link>  </li>}
   
    
     {isAuthenticated && (
     <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mi Perfil
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
             {user && user.roles.includes("ADMIN") && <li><p>ADMIN</p></li> }
             {user && user.roles.includes("USER") && <li><p>{user.username}</p></li> }
             {user && user.roles.includes("PROVEEDOR") && <li><p>{user.nombreEmpresa}</p></li> }
              <li > <button onClick={handleSelectOption} value="perfil"  className='nav-MiPerfil'> Mi Perfil </button> </li>
              

              <li><button onClick={handleSelectOption} value="trabajos" className='nav-MiPerfil'>Lista de Trabajos</button></li>

              <li>  <button onClick={handleSelectOption} value="logout" className='nav-MiPerfil'>Cerrar Sesion </button> </li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
            </ul>
            </li>
            )}
    </ul>
     
  </div>
  
</nav>

</>
  )
}


export default Navbar
