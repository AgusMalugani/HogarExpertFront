import React from 'react'
import { Link } from 'react-router-dom'

export default function SeguridadConfianza() {
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
      

              </div>
            </div>
    </div>
  )
}
