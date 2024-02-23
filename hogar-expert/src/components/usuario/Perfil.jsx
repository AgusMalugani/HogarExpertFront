import React, { useEffect, useState } from 'react'
import { perfilUsuario } from '../../servicios/UsuarioServicios'

import { useParams } from 'react-router-dom'
import { traerImagenUsuario } from '../../servicios/ImagenServicio';

export default function Perfil() {
   const {id}=useParams();

    // Convierte el id a tipo Long (número entero)
    const idLong = id ? Number(id) : null; // si id es numero, es verdadero, si no, es falso y es null

    const [usuario, setUsuario] = useState({ id: idLong });

    useEffect(() => {
        perfilUsuario(idLong).then(data => {setUsuario(data);});
    }, [idLong]);


    const[imagen,setImagen]= useState();

    useEffect(()=>{
        traerImagenUsuario(usuario.id).then(data=> { const imagenUrl = URL.createObjectURL(data) 

        setImagen(imagenUrl);
      })
       
    },[usuario.id])
    console.log(imagen)
  


    function goBack() {
      window.history.back();
    }

  return (
    
    <div className='perfil'>
      <h1>imagen</h1>
      <img src={imagen} width="100px" alt="goku" />
      <br />

       
        <h3  className='titulo'>id</h3> <p className='valor'>{usuario.id}</p>
        <br />
        <h3 className='titulo'>nombre</h3> <p className='valor'>{usuario.nombre}</p>
        <br />
        <h3 className='titulo'>apellido</h3> <p className='valor'>{usuario.apellido}</p>
        <br />
        <h3 className='titulo'>dni</h3> <p className='valor'> {usuario.dni}</p>
        <br />
        <h3 className='titulo'>domicilio</h3> <p className='valor'>{usuario.domicilio}</p>
        <br />
        <h3 className='titulo'>celular</h3> <p className='valor'> {usuario.celular}</p>
        <br />
        <h3 className='titulo'>email</h3> <p className='valor'> {usuario.email}</p>
        <br />
        <h3 className='titulo'>password</h3> <p className='valor'> {usuario.password}</p>
        <br />
        <button className='boton' onClick={goBack}>Volver</button>
     
    </div>
  )
}
