import React from 'react'
import { Link } from 'react-router-dom'
import logoHogar from '../img/logoHogar.png'

export default function Header() {
  return (
    <header className='header'>
        <Link to={"/"} className='icon'> <img src={logoHogar} alt=""/> </Link>

    <nav className='navbar'>
        <Link to='/'> Como funciona </Link>
        <Link to='/'> Acceder </Link>
        <Link to="/crear">Registro  </Link>
        <Link to='/'> Buscas empleo ? </Link>
      
    </nav>
    </header>
  )
}
