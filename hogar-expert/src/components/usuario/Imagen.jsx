import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { traerImagenUsuario } from '../../servicios/ImagenServicio';

export default function Imagen() {
const{id} = useParams();

const[imagen,setImagen]= useState();

useEffect(()=>{
    traerImagenUsuario().then(data=> {setImagen(data)} )
},[id])

  return (
    <img src="" alt="" />
  )
}
