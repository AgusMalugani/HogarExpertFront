import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateTrabajo, verTrabajo } from "../../servicios/TrabajoServicio";
import { useUser } from "../sesion/UserContext";

export default function DetalleTrabajo() {
  const { id } = useParams();

  const { user } = useUser();

  const [trabajoOrg, setTrabajoOrg] = useState({});
  const [trabajo, setTrabajo] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    verTrabajo(id,token).then((data) => {setTrabajoOrg(data); setTrabajo(data)});  
  }, [id]);

  

  const handleChange = (e) => {
    if (e.target.name === "total") {
      setTrabajo({
        ...trabajo,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "horasTrabajo") {
      setTrabajo({
        ...trabajo,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "estado") {
      setTrabajo({
        ...trabajo,
        [e.target.name]: e.target.value,
      });
    }
  };

  function finalizarTrabajo() {
    setTrabajo({
      ...trabajo,
      ["estado"]: "FINALIZADO",
    });
  }

  function modTrabajo(e) {
    e.preventDefault();
    
if(trabajoOrg["estado"] !== trabajo["estado"] || trabajoOrg["total"] !== trabajo["total"] ){
  modificarBackEnd();
}
    
  }
  function modificarBackEnd() {
    updateTrabajo(trabajo.id, trabajo,token); // envia a la bd el cambio
    if (user && user.roles.includes("PROVEEDOR")) {
      presupuestar(); /// me cambia otra vez a false
      alert("trabajo cotizado");
    } else if (
      (user && user.roles.includes("ADMIN")) ||
      (user && user.roles.includes("USER"))
    ) {
      estadoTrabajo();
      alert("trabajo modificado");
    }
  }

  function goBack() {
    window.history.back();
  }
  const [input, setInput] = useState(false);
  const [estado, setEstado] = useState(false);

  function presupuestar() {
    setInput(!input);
  }
  function estadoTrabajo() {
    setEstado(!estado);
  }

  return (
    <div className="detalle-trabajo-form">
      <div className="form-container">
        <div className="form-detalle-trabajo">
          <span className="heading">DETALLE TRABAJO</span>

          <form onSubmit={modTrabajo}>
            <div className="input-detalle-trabajo">
              <span>ID TRABAJO</span>
              <p>{trabajo.id}</p>
            </div>

            <div className="input-detalle-trabajo">
              <span>NOMBRE USUARIO</span>
              <p>{trabajo.usuario && trabajo.usuario.username}</p>
            </div>

            <div className="input-detalle-trabajo">
              <span>NOMBRE PROVEEDOR</span>
              <p>{trabajo.proveedor && trabajo.proveedor.nombreEmpresa}</p>
            </div>
            <div className="input-detalle-trabajo">
              <span>NOTA DE TRABAJO</span>
              <p className="textarea">{trabajo.notaTrabajo}</p>
            </div>
            <div className="input-detalle-trabajo">
              <span>FECHA INICIO</span>
              <p className="textarea">{trabajo.fechaInicio}</p>
            </div>

            {trabajo.estado === "FINALIZADO" && <div className="input-detalle-trabajo">
              <span>FECHA FINALIZACION</span>
              <p className="textarea">{trabajo.fechaFin}</p>
            </div>}

            <div className="input-detalle-trabajo">
              <span>ESTADO</span>
              {estado === false && <p>{trabajo.estado}</p>}


              {user &&
                (user.roles.includes("ADMIN") || user.roles.includes("USER")) &&
                estado === true && (
                  <select
                    name="estado"
                    value={trabajo.estado}
                    onChange={handleChange}
                  >
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="ESPERANDO">ESPERANDO</option>
                    <option value="RECHAZADO">RECHAZADO</option>
                  </select>
                )}
            </div>


            <div className="input-detalle-trabajo">
              <span>HORAS DE TRABAJO</span>
              {input === false && <p>{trabajo.horasTrabajo}</p>}
              {user && user.roles.includes("PROVEEDOR") && input === true && (
                <input
                  type="number"
                  name="horasTrabajo"
                  value={trabajo.horasTrabajo}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="input-detalle-trabajo">
              <span>TOTAL</span>
              {input === false && <p>{trabajo.total}</p>}
              {user && user.roles.includes("PROVEEDOR") && input === true && (
                <input
                  type="number"
                  name="total"
                  value={trabajo.total}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="button-container">
              <div className="send-button">
                {  trabajo.estado === "ESPERANDO" &&
                  user &&
                  user.roles.includes("PROVEEDOR") &&
                  input === false && (
                    <button onClick={presupuestar}>
                      Cotizar Trabajo
                    </button>
                  )}

                {trabajo.estado !== "FINALIZADO" && trabajo.estado !== "RECHAZADO" &&
                  ((user && user.roles.includes("ADMIN")) ||
                    user.roles.includes("USER")) &&
                  estado === false &&
                  trabajo.total > 0 &&
                  trabajo.estado !== "ACTIVO" && (
                    <button onClick={estadoTrabajo}>
                      Modificar estado trabajo
                    </button>
                  )}
                {trabajo.estado === "ACTIVO" && user.roles.includes("USER")  &&(
                  <button onClick={finalizarTrabajo}>FINALIZAR TRABAJO</button>
                )}
                {trabajo.estado === "ESPERANDO" && input === true && (  // input es para prov
                  <button type="submit"> modificar</button>
                )}
                {estado === true && <button type="submit"> modificar</button>} {/*estado es para usuario*/}
                <button onClick={goBack}>Volver</button> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
