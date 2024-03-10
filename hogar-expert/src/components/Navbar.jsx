import React from 'react'
import { Link } from 'react-router-dom'

import logoHogar from '../img/logoHogar.png'

const Navbar = () => {
  return (

<>

<nav className='navbar' >

  <div className='logo'>
  <Link to={"/"} > <img src={logoHogar} alt=""  /> </Link>
  </div>

  <div>
    <ul className='nav-list' >
      <li><Link  className="nav-link" to='/'> Como funciona </Link></li>
      <li>  <Link className="nav-link" to='/login'> Acceder </Link></li>
      <li> <Link className="nav-link" to={`/usuario/crear`}>Registro  </Link>  </li>
      <li><Link className="nav-link" to='/trabajo/crear'> Crear Trabajo </Link></li>
      <li> <Link className="nav-link" to={`/usuario/lista`}>lista usuarios  </Link>  </li>
    </ul>
  </div>
</nav>

</>
  )
}

export default Navbar
