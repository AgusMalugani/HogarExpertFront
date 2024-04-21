import React, { useEffect, useState } from 'react'
import { crearComentario } from '../../servicios/ComentarioServicio'
import { detalleProveedor } from '../../servicios/ProveedorServicios'
import { perfilUsuario } from '../../servicios/UsuarioServicios'
import { verTrabajo } from '../../servicios/TrabajoServicio'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../sesion/UserContext'
import { Modal, Button, Form } from 'react-bootstrap';

export default function GuardarComentario({proveedor,usuario}) {
   
    

    const[showModal,setShowModal]=useState(false);
    const handleShowModal=()=>setShowModal(true);
    const handleCloseModal=()=> setShowModal(false);
  


const[comentario,setComentario]=useState({
    proveedor: proveedor,
    usuario: usuario,
    mensaje:"",
    calificacion:0
});

function handleChange(e){

    if(e.target.name === "mensaje"){
        setComentario({
            ...comentario,
            [e.target.name]:e.target.value
        });

    } else if(e.target.name === "calificacion"){
        setComentario({
            ...comentario,
            [e.target.name]:e.target.value
        });

    }


}


function cargarComentario(e){
e.preventDefault();

enviarBackEnd();

handleCloseModal();
alert("calificacion guardada")
  

}
function enviarBackEnd(){
    crearComentario(comentario);

}




const[mensajeCom,setMensajeCom]= useState(false);


  return (
    <div>
    <button  onClick={handleShowModal} className='btn-comentario' >CALIFICAR</button>
        <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton className='modal-comentario'>
        <Modal.Title>Calificacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={cargarComentario} className='form-comentario'>
<label>Ingrese la calificacion</label>
        <div className="rating estrellas-comentario">
  <input type="radio" id="star5" name="calificacion" value="5" onChange={handleChange} />
  <label for="star5" title="text"></label>

  <input type="radio" id="star4" name="calificacion" value="4" onChange={handleChange} />
  <label for="star4" title="text"></label>

  <input type="radio" id="star3" name="calificacion" value="3" onChange={handleChange} />
  <label for="star3" title="text"></label>

  <input type="radio" id="star2" name="calificacion" value="2" onChange={handleChange} />
  <label for="star2" title="text"></label>

  <input checked="" type="radio" id="star1" name="calificacion" value="1" onChange={handleChange} />
  <label for="star1" title="text"></label>
</div>

     <label htmlFor="mensaje"> Ingrese el comentario</label>
    <div className='texto-comentario'>
  <textarea type="text" name='mensaje' value={comentario.mensaje} onChange={handleChange} />
    </div>

            
            
      <div className='btn-calificacion'>
        <button  >Guardar Calificacion</button>
      </div>
        </form>  
      </Modal.Body>
     
    </Modal>         

       
        </div>
  )
}
