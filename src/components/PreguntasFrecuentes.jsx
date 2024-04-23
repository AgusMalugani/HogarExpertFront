import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PreguntasFrecuentes() {
    const[resp1,setResp1]=useState(false);
    function verResp1(){
        console.log(resp1);
        setResp1(!resp1);
    }

    const[resp2,setResp2]=useState(false);
    function verResp2(){
        console.log(resp2);
        setResp2(!resp2);
    }

    const[resp3,setResp3]=useState(false);
    function verResp3(){
        console.log(resp3);
        setResp3(!resp3);
    }

    const[resp4,setResp4]=useState(false);
    function verResp4(){
        console.log(resp4);
        setResp4(!resp4);
    }

    const[resp5,setResp5]=useState(false);
    function verResp5(){
        console.log(resp5);
        setResp5(!resp5);
    }
    const[resp6,setResp6]=useState(false);
    function verResp6(){
        console.log(resp6);
        setResp6(!resp6);
    }

    const[resp7,setResp7]=useState(false);
    function verResp7(){
        console.log(resp7);
        setResp7(!resp7);
    }

  return (
    <div className='Preguntas-frecuentes'>

      <div className='Preguntas-frecuentes-titulo'>
      <h2>Preguntas Frecuentes</h2>
      <p>Aqui vas a encontrar informacion para resolver todas las dudas que tengas para poder contratar un servicio</p>
      </div>


<div className='contenedor-items'>

      <div className="Preguntas-frecuentes-items" >
        <button onClick={verResp1}>¿Como me puedo registrarme para contratar el servicio?</button>
        { resp1 && <p>haciendo click <button> <Link to="/usuario/crear"> AQUI </Link>  </button></p>}
      </div>

<div className="Preguntas-frecuentes-items" >
<button onClick={verResp6}>¿Como me puedo registrarme para poder brindar mi servicio como proveedor?</button>
        { resp6 && <p>haciendo click <button>  <Link to="/proveedor/crear"> AQUI </Link>  </button> </p>}
</div>

<div className="Preguntas-frecuentes-items" >
        <button onClick={verResp2}>¿Debo abonar mensualmente como usuario?</button>
        { resp2 && <p>NO, podras registrarte y hacer uso del servicio de manera gratuita</p>}
</div>
<div className="Preguntas-frecuentes-items" >
        <button onClick={verResp3}>¿Debo abonar mensualmente como proveedor?</button>
        { resp3 && <p>NO, podras registrarte y brindar tu servicio de manera gratuita</p>}
</div>

<div className="Preguntas-frecuentes-items" >
        <button onClick={verResp4}>¿Que pasa si no quiero aceptar el trabajo?</button>
        { resp4 && <p>Si no quieres aceptar el servicio, cuando recibas el presupuesto puedes rechazarlo de manera GRATUITA</p>}
</div>

<div className="Preguntas-frecuentes-items" >
        <button onClick={verResp5}>¿Que pasa si acepto el trabajo y despues quiero cancelarlo ?</button>
        { resp5 && <p>En caso de aceptar el trabajo y querer cancelarlo, deberas hablarlo con tu proveedor y finalizar el trabajo.
         </p>}
</div>

<div className="Preguntas-frecuentes-items" >
        <button onClick={verResp7}>Ya me registre, ¿ahora como sigo?</button>
        { resp7 && <p>Bienvenido a HogarExpert, ahora deberas buscar un proveedor de tu localidad,
          realizar una nota de trabajo y esperar que te envie una cotizacion. Una vez que encuentres
          a tu proveedor, podras aceptar el trabajo y ponerte en contacto con el para coordinar su encuentro.
          Una vez concluido el trabajo deberas cambiar el estado del trabajo a Finalizado asi podras calificar al proveedor y dejar un comentario.
        </p>}
</div>

</div>
      
    </div>
  )
}
