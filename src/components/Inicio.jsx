import React from 'react'
import { Link } from 'react-router-dom'
import ServiciosBrindados from './ServiciosBrindados'
import SeguridadConfianza from './SeguridadConfianza'

import GarantiaSatisfaccion from './GarantiaSatisfaccion'
import Comentarios from './comentario/Comentarios'


export default function Inicio({isAuthenticated}) {
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
           <SeguridadConfianza isAuthenticated={isAuthenticated} />
          </article>

          <article>
           <Comentarios/>
          </article>

          <article>
           <GarantiaSatisfaccion/>
          </article>

      
        </section>

      </main>

    </>

  )
}


