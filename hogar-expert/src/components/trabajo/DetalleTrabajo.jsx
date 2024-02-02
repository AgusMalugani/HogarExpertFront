import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verTrabajo } from '../../servicios/TrabajoServicio';

export default function DetalleTrabajo() {
    const { num_trabajo } = useParams();

    const idTrabajo = Number(num_trabajo);

    const [trabajo, setTrabajo] = useState({})
    useEffect(async () => {
        await verTrabajo(idTrabajo).then(data => setTrabajo(data))
    }, [idTrabajo])

    function goBack() {
        window.history.back();
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>NUM TRABAJO</th>
                    <th>HORAS TRABAJO</th>
                    <th>TOTAL</th>
                    <th>ID USUARIO</th>
                    <th>ID PROVEEDOR</th>
                    <th>ESTADO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{trabajo.num_trabajo}</td>
                    <td>{trabajo.horasTrabajo}</td>
                    <td>{trabajo.total}</td>
                    <td>{trabajo.usuario.id}</td>
                    <td>{trabajo.proveedor.id}</td>
                    <td> {trabajo.estado === false && <p>baja</p> || trabajo.estado === true && <p>alta</p>}</td>
                </tr>
            </tbody>
            <button onClick={goBack}>Volver</button>
        </table>
    )
}
