import React, { useEffect, useState } from 'react'
import { saveTrabajo } from '../../servicios/TrabajoServicio'
import { obtenerUsuarios, perfilUsuario} from '../../servicios/UsuarioServicios';
import { detalleProveedor, listaProveedores } from '../../servicios/ProveedorServicios';
import { useNavigate } from 'react-router-dom';


export default function CrearTrabajo() {
    const [usuario, setUsuario] = useState("");
const [proveedor, setProveedor] = useState("");

    const [horasTrabajo, setHorasTrabajo] = useState();
    const navigate = useNavigate()

    const [proveedores, setProveedores] = useState([]);
    useEffect(() => {
        listaProveedores().then(data => { setProveedores(data) })
    }, [])


    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        obtenerUsuarios().then(data => { setUsuarios(data) })
    }, [])


    const [error, setError] = useState(false)

    


    const idUsuario = usuario;
    const [usuario1, setUsuario1] = useState({idUsuario});

    useEffect(() => {
        if(usuario){
        perfilUsuario(usuario).then(data => {setUsuario1(data);});
        }
    }, [usuario]);

  
    const idProv = proveedor;
    const [proveedor1, setProveedor1] = useState({idProv});

    useEffect(() => {
        if(proveedor){
      detalleProveedor(proveedor).then(data => setProveedor1(data))
        }
    }
      , [proveedor])
  


    async function CargarTrabajo(evento) {
        evento.preventDefault();





        if (!usuario || !proveedor || horasTrabajo < 0) {
            setError(true)
        }
        setError(false)

    
        
        const newTrabajo = {
            usuario : usuario1,
            proveedor: proveedor1,
            horasTrabajo
        };
        await saveTrabajo(newTrabajo);
        navigate("/")


    }
    function goBack(){
        window.history.back()
    }
    return (

        <form onSubmit={CargarTrabajo} >

            <label htmlFor="usuario">Seleccione el usuario</label>
            <select name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}>
                <option value="">Seleccione un usuario</option>
                {usuarios.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.nombre}
                    </option>
                ))}
            </select>

            <label htmlFor="proveedor">Seleccione el proveedor</label>
            <select name="proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)}>
                <option value="">Seleccione un proveedor</option>

                {proveedores.map((proveedor) => (
                    <option key={proveedor.id} value={proveedor.id}>
                        {proveedor.nombreEmpresa}
                    </option>
                ))}
            </select>

            <label htmlFor="horasTrabajo">Ingrese las horas de trabajo</label>
            <input type="number" name='horasTrabajo' value={horasTrabajo} onChange={(e) => setHorasTrabajo(e.target.value)} />

            <button className='boton' > crear </button>
            {error === true && <p>  hubo un error al crear el trabajo. </p>}

        <button onClick={goBack} >volver</button>
        </form>
    )
}

