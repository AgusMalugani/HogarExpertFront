import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Header({isAuthenticated , setIsAuthenticated }) {
  return (
    <header >
      
      <div >
        
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    <div className='escritoHeader' > 
      <p> ENCONTRA LA AYUDA PARA TU HOGAR </p>
      <button className="link-button" >
        <Link to={`/proveedor/lista`} >BUSCAR PROFESIONAL</Link>
      </button>
    </div>
   
        </div> 
    
    </header>
  )
}
