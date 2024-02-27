import React from 'react'
import { Link } from 'react-router-dom'

import logoHogar from '../img/logoHogar.png'

const Navbar = () => {
  return (
//     <div className='navbar'>
//       <div>
//    <Link to={"/"} className='icon'> <img src={logoHogar} alt=""/> </Link>

//       </div>

//     <nav >
//       <div>
//     <Link to='/'> Como funciona </Link>
//       </div>

//       <div>
//     <Link to='/'> Acceder </Link>        
//       </div>
      
//       <div>  
//     <Link to="/crear">Registro  </Link>
//       </div>

//       <div>
//     <Link to='/'> Buscas empleo ? </Link>
//       </div>
// </nav>
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
  <Link to={"/"} > <img src={logoHogar} alt="" style={{width : "50px"}} /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link  className="nav-link" to='/'> Como funciona </Link>
      <Link className="nav-link" to='/login'> Acceder </Link>  
      <Link className="nav-link" to={`/usuario/crear`}>Registro  </Link>  
      <Link className="nav-link" to='/trabajo/crear'> Crear Trabajo </Link>
      <Link className="nav-link" to={`/usuario/lista`}>lista usuarios  </Link>  
      
       </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
