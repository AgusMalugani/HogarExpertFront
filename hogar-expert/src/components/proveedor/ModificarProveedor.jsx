import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { detalleProveedor, updateProveedor, updateProveedorImg } from '../../servicios/ProveedorServicios';
import { useUser } from '../sesion/UserContext';

export default function ModificarProveedor() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [proveedor,setProveedor] = useState({});
    const{user}=useUser();
    const {setUser}=useUser();
    const[imagen,setImagen]=useState(null);

    useEffect( ()=> {
      setProveedor(user);
    },[id] );



function handleChange(e){
  setProveedor({
    ...proveedor,
    [e.target.name]:e.target.value
  });

}

function handleChangeImg(e){
  setImagen({
    ...imagen,
    [e.target.name]:e.target.files[0]
  });

}


    async function handleSubmit(e){
        e.preventDefault();
 
      enviarBackEnd();

    }

    async function enviarBackEnd(){
      const token = localStorage.getItem("token");
      const formData = new FormData();

      for(const key in proveedor){
        formData.append(key,proveedor[key]);
      }

      await updateProveedor(id,formData,token);
      //navigate("/");
      setUser(proveedor);

      if(imagen !== null){

        const formDataImg = new FormData();
        for(const key in imagen){
          formDataImg.append(key,imagen[key]);
        }
       await updateProveedorImg(id,formDataImg,token);
       console.log(imagen);

      }
    }

    function goBack(){
        window.history.back();
    }

  return (
    <div>
        <h1>MODIFICAR PROVEEDOR</h1>
        <br />
       <form onSubmit={handleSubmit}>
       <label>nombre de la empresa: </label> 
       <input value={proveedor.nombreEmpresa} onChange={ handleChange} type="text" name= 'nombreEmpresa' placeholder={proveedor.nombreEmpresa} />
       <br />
       
       <label>matricula: </label> 
       <input value={proveedor.matricula} onChange={handleChange} type="text" name='matricula' placeholder={proveedor.matricula} />
       <br />
       
       <label>servicio que brindara: </label> 
       <select name="servicio" value={proveedor.servicio} onChange={handleChange}>
       <option value="3">INGRESE EL SERVICIO</option>
        <option value="PLOMERO">PLOMERO</option>
        <option value="GASISTA">GASISTA</option>
        <option value="ELECTRICISTA">ELECTRICISTA</option>
        <option value="PINTOR">PINTOR</option>
        <option value="CERRAJERO">CERRAJERO</option>
        <option value="CONSTRUCCION">CONSTRUCCION</option>
        <option value="ALARMA">ALARMA</option>
        <option value="ELECTRODOMESTICO">ELECTRODOMESTICO</option>
        <option value="CARPINTERO">CARPINTERO</option>
        <option value="JARDINERO">JARDINERO</option>
       </select>
       <br />
       
       <label>celular: </label> 
       <input value={proveedor.celular} onChange={handleChange} type="text" name='celular' placeholder={proveedor.celular} />
       <br />
       <label>email: </label> 
       <input  value={proveedor.email} onChange={handleChange} type="email" name='email' placeholder={proveedor.email} />
       <br />
       <label>costo por hora de su servicio:</label> 
       <input value={proveedor.costoXHora} onChange={ handleChange}  type="number" name='costoXHora' placeholder='costo por hora' />
       <br />
       <label>foto de perfil</label>
       <input type="file" name='archivo' onChange={handleChangeImg} />
       <br />

    <button>MODIFICAR</button>



    <br />
      <button className='boton' onClick={goBack}>Volver</button>

    </form>
    </div>
  )
}
