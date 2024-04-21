import React from 'react'
import Candado from "../img/candado.png"

export default function SinAutorizacion() {
  return (
    <div className='contenedor-sin-autorizacion' >

    <div className='sin-autorizacion'>
    
        <img src={Candado} alt="candado" />
        <h2>NO TIENES AUTORIZACION PARA ESTA PAGINA</h2>
  
     </div>


    </div>
  )
}
