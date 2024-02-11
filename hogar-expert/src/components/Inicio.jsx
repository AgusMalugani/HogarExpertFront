import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div>
        <button className='boton'> <Link to={`/usuario/lista`}>LISTA USUARIOS</Link></button>
        <br />
        <button className='boton'><Link to={`/usuario/crear`} >CREAR USUARIOS</Link></button>
        <br />
        <button className='boton'><Link to={`/proveedor/lista`} >LISTA PROVEEDORES</Link></button>
        <br />
        <button className='boton'><Link to={`/proveedor/crear`} >CREAR PROVEEDOR</Link></button>
        <br />
        <button className='boton'> <Link to={`/trabajo/crear`}> CREAR TRABAJO </Link>  </button>
        <br />
        <button className='boton'> <Link to={`/trabajo/lista`}> LISTA TRABAJO </Link>  </button>
        <br />
        <button className='boton' > <Link to={`/comentario/lista`}> LISTA COMENTARIO </Link> </button>
        <br />
        
        <button className='boton' > <Link to={`/comentario/crear`}> CREAR COMENTARIO </Link> </button>
  
    </div>

  )
}
