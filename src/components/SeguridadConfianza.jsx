import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from './sesion/UserContext'

export default function SeguridadConfianza({isAuthenticated} ) {
  const{user}=useUser();
  return (
    <div>
       <div id='contenedor-seguridad-confianza'>
              <img src="" alt="" />
              <div id='seguridad-confianza' >
                <h3>Seguridad y Confianza</h3>
                <p> ✅ Calificados y Evaluados en su Performance </p>
                <p> ✅ Con Referencias Comprobables </p>

                <p>✅ Evaluados en Aspectos Técnicos  </p>
                <p> ✅ De Confianza </p>

               
                <button>
                  <Link to={`/proveedor/lista`} > Conoce los prestadores de servicios</Link>
                </button>
               { user && isAuthenticated &&<button>
                <Link to={`/proveedor/listaProv/${user.localidad}`} > Conoce los prestadores de servicios de tu localidad</Link>
                </button>}
      

              </div>
            </div>
    </div>
  )
}
