import React, { useState } from 'react'
import { saveProveedor } from '../../servicios/ProveedorServicios';
import { useNavigate } from 'react-router-dom';

export default function GuardarProveedor() {

    const [nombreEmpresa,setNombreEmpresa]=useState("");
    const [matricula,setMatricula]=useState("");
    const [servicio,setServicio]=useState("");
    const [celular,setCelular]=useState("")
    const [email,setEmail]=useState("")
    const [costoXHora,setCostoXHora]=useState(0)
    
    const navigate = useNavigate();
    const [error,setError]=useState(false);

    async function crearProveedor(evento){
      evento.preventDefault();
      if(nombreEmpresa === ""|| matricula==="" || (servicio!=="0" & servicio!=="1" & servicio!=="2") || celular===""||email===""|| costoXHora <0 ){
        setError(true);
        return
      }
      setError(false);
      
        const newProveedor={
            nombreEmpresa,
            matricula,
            servicio,
            celular,
            email,
            costoXHora
        }

        await saveProveedor(newProveedor);
        navigate("/");

    }

    function goBack() {
      window.history.back();
    }


  return (
    <form onSubmit={crearProveedor}>
       <label>Ingrese el nombre de la empresa: </label> 
       <input value={nombreEmpresa} onChange={ (evento)=>setNombreEmpresa(evento.target.value) } type="text" name='nombreEmpresa' placeholder='nombreEmpresa' />
       <br />
       
       <label>Ingrese su matricula: </label> 
       <input value={matricula} onChange={ (evento)=>setMatricula(evento.target.value) } type="text" name='matricula' placeholder='matricula' />
       <br />
       
       <label>Ingrese el servicio que brindara: </label> 
       <select name="servicio" value={servicio} onChange={ (evento)=>setServicio(evento.target.value) }>
        <option value="3">INGRESE EL SERVICIO</option>
        <option value="0">PLOMERO</option>
        <option value="1">GASISTA</option>
        <option value="2">ELECTRICISTA</option>
       </select>
       <br />
       
       <label>Ingrese su celular: </label> 
       <input value={celular} onChange={ (evento)=>setCelular(evento.target.value) } type="text" name='celular' placeholder='celular' />
       <br />
       <label>Ingrese su email: </label> 
       <input  value={email} onChange={ (evento)=>setEmail(evento.target.value) } type="email" name='email' placeholder='email' />
       <br />
       <label>Ingrese el costo por hora de su servicio: $</label> 
       <input value={costoXHora} onChange={ (evento)=>setCostoXHora(evento.target.value) }  type="number" name='costoXHora' placeholder='costo por hora' />
       
       <br />

    <button>Crear</button>

    
    {error === true && <p> hubo un error al cargar los datos. </p>}

    <br />
      <button className='boton' onClick={goBack}>Volver</button>

    </form>
  )
}
