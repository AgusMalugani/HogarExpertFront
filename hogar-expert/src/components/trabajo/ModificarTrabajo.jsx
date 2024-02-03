import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateTrabajo } from "../../servicios/TrabajoServicio";
import {
  obtenerUsuarios,
  perfilUsuario,
} from "../../servicios/UsuarioServicios";
import {
  detalleProveedor,
  listaProveedores,
} from "../../servicios/ProveedorServicios";

export default function ModificarTrabajo() {
  const { num_trabajo } = useParams();
  const idTrabajo = Number(num_trabajo);

  const [usuario, setUsuario] = useState("");
  const [proveedor, setProveedor] = useState("");

  const [horasTrabajo, setHorasTrabajo] = useState();
  const navigate = useNavigate();

  const [proveedores, setProveedores] = useState([]);
  useEffect(() => {
    listaProveedores().then((data) => {
      setProveedores(data);
    });
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    obtenerUsuarios().then((data) => {
      setUsuarios(data);
    });
  }, []);

  const idUsuario = usuario;
  const [usuario1, setUsuario1] = useState({ idUsuario });

  useEffect(() => {
    if (usuario) {
      perfilUsuario(usuario).then((data) => {
        setUsuario1(data);
      });
    }
  }, [usuario]);

  const idProv = proveedor;
  const [proveedor1, setProveedor1] = useState({ idProv });

  useEffect(() => {
    if (proveedor) {
      detalleProveedor(proveedor).then((data) => setProveedor1(data));
    }
  }, [proveedor]);


  const[estado,setEstado]= useState(false);



  async function modificarTrabajo(evento) {
    evento.preventDefault();

    const newTrabajo = {
      usuario: usuario1,
      proveedor: proveedor1,
      horasTrabajo,
      estado
    };
    await updateTrabajo(idTrabajo, newTrabajo);
    navigate("/")
  }

  function goBack() {
    window.history.back();
  }

  

  return (
    <div>
      <form onSubmit={modificarTrabajo}>
        <label htmlFor="usuario">Seleccione el usuario</label>
        <select
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        >
          <option value="">Seleccione un usuario</option>
          {usuarios.map((user) => (
            <option key={user.id} value={user.id}>
              {user.nombre}
            </option>
          ))}
        </select>
<br />
        <label htmlFor="proveedor">Seleccione el proveedor</label>
        <select
          name="proveedor"
          value={proveedor}
          onChange={(e) => setProveedor(e.target.value)}
        >
          <option value="">Seleccione un proveedor</option>

          {proveedores.map((proveedor) => (
            <option key={proveedor.id} value={proveedor.id}>
              {proveedor.nombreEmpresa}
            </option>
          ))}
        </select>
<br />
        <label htmlFor="horasTrabajo">Ingrese las horas de trabajo</label>
        <input
          type="number"
          name="horasTrabajo"
          value={horasTrabajo}
          onChange={(e) => setHorasTrabajo(e.target.value)}
        />
<br />
        <label htmlFor="estado">Estado del trabajo</label>
        <select name="estado" value={estado} onChange={ e=> setEstado(e.target.value) }>
          <option value={true}>activo</option>
          <option value={false}>baja</option>
        </select>
<br />
        <button className="boton"> modificar </button>
      </form>
      <button onClick={goBack}>volver</button>
    </div>
  );
}
