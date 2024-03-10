import React from 'react'
import { Link } from 'react-router-dom'
import ServiciosBrindados from './ServiciosBrindados'
import SeguridadConfianza from './SeguridadConfianza'
import CarruselComentarios from './CarruselComentarios'
import GarantiaSatisfaccion from './GarantiaSatisfaccion'

export default function Inicio() {
  return (
    <>
     
      <main>

        <section>
          <article id='primer-article'>
        <ServiciosBrindados/>
          </article>

          <article>
            <div id='boton-prestacion-servicio'>
                <button >
                  <Link to={`/proveedor/crear`} > ¿QUERES PRESTAR TUS SERVICIOS? INSCRIBITE AQUI! </Link>
                </button>
            </div>
          </article>

          <article>
           <SeguridadConfianza/>
          </article>

          <article>
           <CarruselComentarios/>
          </article>

          <article>
           <GarantiaSatisfaccion/>
          </article>

        </section>

      </main>

    </>

  )
}


