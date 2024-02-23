import React from 'react'
import { Link } from 'react-router-dom'
import ServiciosBrindados from './ServiciosBrindados'
import SeguridadConfianza from './SeguridadConfianza'
import CarruselComentarios from './CarruselComentarios'
import GarantiaSatisfaccion from './GarantiaSatisfaccion'

export default function Inicio() {
  return (
    <>
      {/*    
      <button className='boton'> <Link to={`/usuario/lista`}>LISTA USUARIOS</Link></button>
      <br />
      <button className='boton'><Link to={`/usuario/crear`} >CREAR USUARIOS</Link></button>
      <br />
      --<button className='boton'><Link to={`/proveedor/lista`} >LISTA PROVEEDORES</Link></button>
      <br />
      -- <button className='boton'><Link to={`/proveedor/crear`} >CREAR PROVEEDOR</Link></button>
      <br />
      <button className='boton'> <Link to={`/trabajo/crear`}> CREAR TRABAJO </Link>  </button>
      <br />
      <button className='boton'> <Link to={`/trabajo/lista`}> LISTA TRABAJO </Link>  </button>
      <br />
      <button className='boton' > <Link to={`/comentario/lista`}> LISTA COMENTARIO </Link> </button>
      <br />

      <button className='boton' > <Link to={`/comentario/crear`}> CREAR COMENTARIO </Link> </button>

      <hr /> */}
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


