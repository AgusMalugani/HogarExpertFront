import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GuardarComentario from '../comentario/GuardarComentario'
import { useUser } from '../sesion/UserContext';

export default function Trabajo({trabajo, eliminarTrabajo}) {
  const{user}=useUser();
   const[comentario,setComentario]= useState(false);
 function estadoComentario(){
    setComentario(!comentario)
 }

 

  return (
    
<div className='carta-proveedores'> 


<div className=" fondo album py-5 bg-body-tertiar ">
<div className="container">

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div className="col">
      <div className="card shadow-sm">
     

        <div className="card-body" >
          <p className="card-text"> Numero de Trabajo : {trabajo.id}</p>
          <p className="card-text" > Nombre de Cliente : {trabajo.usuario.username} </p>
          <p className="card-text" >Nombre de Proveedor : {trabajo.proveedor.nombreEmpresa}</p>
          <p className="card-text" >Estado del trabajo : {trabajo.estado}</p>
          <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">       
                <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/trabajo/detalle/${trabajo.id}`} >DETALLE</Link></button>
               {/*{ trabajo.estado === "FINALIZADO" && <button type="button" className="btn btn-sm btn-outline-secondary"> <Link to={`/comentario/crear`} >AÑADIR COMENTARIO</Link></button> }
                */}
               
                { user.roles.includes("USER") || user.roles.includes("ADMIN")   && trabajo.estado === "FINALIZADO" && <span className="btn btn-sm btn-outline-secondary"> <GuardarComentario usuario ={trabajo.usuario} proveedor={trabajo.proveedor} /> </span> }
              
              </div>
           </div>

       </div>


        </div>

      </div>
    </div>
    </div>
    
</div>     

</div>



    
  )
}
