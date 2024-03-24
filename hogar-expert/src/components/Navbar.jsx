import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logoHogar from '../img/logoHogar.png'
import { useUser } from './sesion/UserContext';



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
      
        //  navigate('/usuario/perfil');
    } else if (selectedOption === 'logout') {
      // Ejecuta la función de logout
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      console.log("Token eliminado de localStorage");
      navigate("/login");
    } else if (selectedOption === 'trabajos'){
      navigate(`/trabajo/lista/${user.id}`)

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
      <li><Link  className="nav-link" to='/'> Como funciona </Link></li>
     {!isAuthenticated && <li>  <Link className="nav-link" to='/login'> Acceder </Link></li>}
     {!isAuthenticated && <li> <Link className="nav-link" to={`/usuario/crear`}>Registro  </Link>  </li>}
     {isAuthenticated && <li><Link className="nav-link" to='/trabajo/crear'> Crear Trabajo </Link></li>}
     {isAuthenticated && <li> <Link className="nav-link" to={`/usuario/lista`}>lista usuarios  </Link>  </li>}
    
     {isAuthenticated && (
     <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mi Perfil
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li > <button onClick={handleSelectOption} value="perfil" > Mi Perfil </button> </li>
              <li>  <button onClick={handleSelectOption} value="logout">Cerrar Sesion </button> </li>
              <li><button onClick={handleSelectOption} value="trabajos">Lista de Trabajos</button></li>
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
