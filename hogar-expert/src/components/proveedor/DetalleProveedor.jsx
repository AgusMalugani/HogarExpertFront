import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detalleProveedor } from '../../servicios/ProveedorServicios';
import { traerImagenProveedor } from '../../servicios/ImagenServicio';

export default function DetalleProveedor() {
  const { id } = useParams();
  const idLong = Number(id);

  const [proveedor, setProveedor] = useState({});

  useEffect(() => {
    detalleProveedor(idLong).then(data => setProveedor(data))
  }
    , [idLong])

    const[imagen,setImagen]=useState();
useEffect( ()=>{
  traerImagenProveedor(proveedor.id).then(data=> {const imagenUrl = URL.createObjectURL(data)

    setImagen(imagenUrl);
  })
},[proveedor.id] );



    function goBack(){
      window.history.back();
    }

  return (
    <div className='perfil-usuario-proveedor' >
      <div className='detalle-img'>
      <img src={imagen} alt= {proveedor.nombreEmpresa} />
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>nombre de la empresa: </span>
      <p className='perfil-valor'>{proveedor.nombreEmpresa}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>matricula: </span>
      <p className='perfil-valor'>{proveedor.matricula}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>servicio que brinda:  </span>
      <p className='perfil-valor'>{proveedor.servicio}</p>
      </div>
      
      <div className='detalle-perfil'>
      <span className='perfil-titulo'>celular: </span>
      <p className='perfil-valor'>{proveedor.email}</p>
      </div>

     <div className='detalle-perfil'>
      <span className='perfil-titulo'> email: </span>
      <p className='perfil-valor'>{proveedor.email}</p>
      </div> 

      <div className='detalle-perfil'>
      <span className='perfil-titulo'>costo por hora de su servicio: $</span>
      <p  className='perfil-valor'>{proveedor.costoXHora}</p>
      </div>      
     

      <button className='boton' onClick={goBack}> Volver </button>
    </div>
  )
}
