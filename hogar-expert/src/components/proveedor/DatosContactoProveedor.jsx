import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { detalleProveedor } from '../../servicios/ProveedorServicios';

import { useUser } from '../sesion/UserContext';


export default function DetalleProveedor() {
  const { id } = useParams();
 
  
  const { user: currentUser } = useUser();
  const [proveedor, setProveedor] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(id){
 detalleProveedor(id,token).then(data => setProveedor(data))
    } else if(currentUser){
      setProveedor(currentUser);
    }
  }
    , [id,currentUser])


 

  return (
    <div>


    <div className='perfil-usuario-proveedor' >

            <div className='detalle-perfil-titulo'>
        <h4>DATOS PROVEEDOR</h4>
      </div>
      <div className='detalle-perfil'>
     

  <div>

        <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Nombre de la empresa: </span>
      <p className='perfil-valor'>{proveedor.nombreEmpresa}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Matricula: </span>
      <p className='perfil-valor'>{proveedor.matricula}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Servicio que brinda:  </span>
      <p className='perfil-valor'>{proveedor.servicio}</p>
        </div>

  </div>

 <div className='descripcion'>       
        <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Descripcion:  </span>
      <p className='perfil-valor'>{proveedor.descripcion}</p>
        </div>
 </div>
        
        </div> 



        <div className='detalle-perfil-article2'>

       
<div className='detalle-perfil-titulo'>
         <h4>DATOS CONTACTO</h4>
</div>
         <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'>Celular: </span>
      <p className='perfil-valor'>{proveedor.celular}</p>
      </div>
      <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'> Email: </span>
      <p className='perfil-valor'>{proveedor.email}</p>
     </div>
     <div className='detalle-perfil-datos'>
      <span className='perfil-titulo'> Localidad: </span>
      <p className='perfil-valor'>{proveedor.localidad}</p>
     </div>


      </div>
   
   
         
     
 </div>

<div className='trabajo-aceptado-datos-prov'>

    <div>
<h1>IMPORTANTE</h1>
    </div>
    <div>
        <p>
            
    ¡Felicidades por encontrar un proveedor!
    </p>
    <p>
    Es genial saber que has logrado encontrar un proveedor que se adapta a tus necesidades. 
    </p>
    <p>
    Este es un paso importante hacia adelante en tu proyecto o empresa. 
    </p>
    <p>
    Te felicito por tu dedicación y perseverancia para encontrar la mejor opción.
    </p>
    <p>
    Ahora que has identificado un proveedor, te animo a que te pongas en contacto con ellos lo antes posible.
    </p>
    <p>
    Esta es una oportunidad perfecta para iniciar una conversación y establecer una relación sólida. 
    </p>
    <p>
    No dudes en expresar tus necesidades y expectativas, así como en hacer cualquier pregunta que puedas tener. 
    </p>
    <p>
    La comunicación abierta desde el principio es clave para una colaboración exitosa.
        </p>
    </div>
</div>
    
    </div>
  )
}
