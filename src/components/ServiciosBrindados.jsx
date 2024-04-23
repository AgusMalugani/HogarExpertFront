import React from "react";
import { Link } from "react-router-dom";
import plomero from "../img/Servicios/plomero.jpg"
import gasista from "../img/Servicios/gasista.jpg"
import electricista from "../img/Servicios/electricista.png"
import pintor from "../img/Servicios/pintor.jpg"
import jardinero from "../img/Servicios/jardinero.jpg"
import electrodomestico from "../img/Servicios/electrodomestico.jpg"
import constructor from "../img/Servicios/constructor.jpg"

import cerrajero from "../img/Servicios/cerrajero.webp"

import carpintero from "../img/Servicios/carpintero.webp"

import alarma from "../img/Servicios/alarma.avif"

export default function ServiciosBrindados() {
  return (
    <div>
      <h4 id="titulo-servicios">Servicios brindados</h4>
      <div id="contenedor-servicios">
    <div  className="contenedor-link-button-servicio" >
         <Link className="link-button-servicio " to={`/proveedor/lista/PLOMERO`}>
          <img
            src={plomero}
            alt="imagen-plomero"
            />
          <p>Plomero</p>
        
            </Link>
     </div>

     <div className="contenedor-link-button-servicio" >
            <Link  className="link-button-servicio"  to={`/proveedor/lista/GASISTA`}>
                    <img
              src={gasista}
              alt="imagen-gasista"
              />
            <p>Gasista</p>
        </Link>
     </div>

    <div className="contenedor-link-button-servicio" >
        <Link  className="link-button-servicio" to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={electricista}
              alt="imagen-electricista"
              />
            <p>Electricista</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link  className="link-button-servicio" to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={pintor}
              alt="imagen-pintor"
              />
            <p>Pintores</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={cerrajero}
              alt="imagen-cerrajero"
              />
            <p>Cerrajero</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={constructor}
              alt="imagen-contruccion"
              />
            <p>Construccion</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={alarma}
              alt="imagen-alarma"
              />
            <p>Alarmas</p>
          
        </Link>
    </div>

    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={electrodomestico}
              alt="imagen-electrodomestico"
              />
            <p>Electrodomesticos</p>
          
        </Link>
    </div>

    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={carpintero}
              alt="imagen-carpintero"
              />
            <p>Carpintero</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src={jardinero}
              alt="imagen-jardinero"
              />
            <p>Jardineros</p>
          
        </Link>
    </div>

      </div>
    </div>
  );
}
