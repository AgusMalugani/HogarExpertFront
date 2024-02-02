import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detalleProveedor } from '../../servicios/ProveedorServicios';

export default function DetalleProveedor() {
  const { id } = useParams();
  const idLong = Number(id);

  const [proveedor, setProveedor] = useState({});

  useEffect(() => {
    detalleProveedor(idLong).then(data => setProveedor(data))
  }
    , [idLong])

    function goBack(){
      window.history.back();
    }

  return (
    <div className='perfil' >
      <h3 className='titulo'>Ingrese el nombre de la empresa: </h3>
      <p className='valor'>{proveedor.nombreEmpresa}</p>
      <br />

      <h3 className='titulo'>matricula: </h3>
      <p className='valor'>{proveedor.matricula}</p>
      <br />

      <h3 className='titulo'>servicio que brinda:  </h3>
      <p className='valor'>{proveedor.servicio}</p>
      <br />

      <h3 className='titulo'>celular: </h3>
      <p className='valor'>{proveedor.email}</p>
      <br />
      <h3 className='titulo'> email: </h3>
      <p className='valor'>{proveedor.email}</p>
      <br />
      <h3 className='titulo'>costo por hora de su servicio: $</h3>
      <p  className='valor'>{proveedor.costoXHora}</p>
      <br />

      <button className='boton' onClick={goBack}> Volver </button>
    </div>
  )
}
