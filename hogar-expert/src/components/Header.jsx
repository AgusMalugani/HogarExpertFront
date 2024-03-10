import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Header() {
  return (
    <header >
      
      <div >
        
      <Navbar/>
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
