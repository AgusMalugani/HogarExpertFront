import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { perfilUsuario, updateUsuario } from '../../servicios/UsuarioServicios';


export default function ModificarUsuario() {
    const {id} = useParams();
        // Convierte el id a tipo Long (número entero)
        const idLong = id ? Number(id) : null; // si id es numero, es verdadero, si no, es falso y es null
        

        const[nombre,setNombre] = useState("")
        const[apellido,setApellido] = useState("")
        const[celular,setCelular] = useState("")
        const[dni,setDni] = useState(0)
        const[email,setEmail] = useState("")
        const[password,setPassword] = useState("")
        const[domicilio,setDomicilio] = useState("")
        


    const [usuario, setUsuario] = useState({ id: idLong });

    useEffect(() => {
        perfilUsuario(idLong).then(data => {setUsuario(data);});
    }, [idLong]);
    const navigate = useNavigate();

        
         async function ModUsuario(evento) {

            evento.preventDefault();

            const newUsuario={
                nombre,
                apellido,
                dni,
                domicilio,
                celular,
                email,
                password
            } 

           await updateUsuario(idLong,newUsuario);
           navigate("/");
        
        }

        function goBack() {
          window.history.back();
        }


  return (
    <form onSubmit={ModUsuario}>
      <label>Ingrese el nombre</label>
       <input  value={nombre} onChange={(evento)=>setNombre(evento.target.value)} type="text" name='nombre' placeholder={usuario.nombre} />

       <label>Ingrese el apellido</label>
       <input value={apellido} onChange={(evento)=>setApellido(evento.target.value)}  type="text" name='apellido' placeholder={usuario.apellido} />

       <label>Ingrese el dni</label>
       <input  value={dni} onChange={(evento)=>setDni(evento.target.value)} type="number" name='dni' placeholder={usuario.dni} />

       <label>Ingrese el celular</label>
       <input  value={celular} onChange={(evento)=>setCelular (evento.target.value)} type="text" name='celular' placeholder={usuario.celular} />

       <label>Ingrese el domicilio</label>
       <input  value={domicilio} onChange={(evento)=>setDomicilio(evento.target.value)} type="text" name='domicilio' placeholder={usuario.domicilio} />

       <label>Ingrese el email</label>
       <input  value={email} onChange={(evento)=>setEmail(evento.target.value)} type="email" name='email' placeholder={usuario.email} />

       <label>Ingrese el password</label>
       <input  value={password} onChange={(evento)=>setPassword(evento.target.value)} type="password" name='password' placeholder="password" />
       <br />

      <button className='boton'>modificar</button>
      <br />
      <button className='boton' onClick={goBack}>Volver</button>
    </form>
  )
}
