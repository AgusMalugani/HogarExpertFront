import React from "react";
import { Link } from "react-router-dom";

export default function ServiciosBrindados() {
  return (
    <div>
      <h4 id="titulo-servicios">Servicios brindados</h4>
      <div id="contenedor-servicios">
    <div  className="contenedor-link-button-servicio" >
         <Link className="link-button-servicio " to={`/proveedor/lista/PLOMERO`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0509/5050/4615/files/Plomero-Banco-de-fotos-e-imagenes-de-stock-iStock_2_480x480.png?v=1665331532"
            alt="imagen-plomero"
            />
          <p>Plomero</p>
        
            </Link>
     </div>

     <div className="contenedor-link-button-servicio" >
            <Link  className="link-button-servicio"  to={`/proveedor/lista/GASISTA`}>
                    <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLKtzZlwxfYsREkrHmzFi8mz0T7FIGzlz8VLUXF8FpbzRShWQBwmT10EJafVsALwgwJY&usqp=CAU"
              alt="imagen-gasista"
              />
            <p>Gasista</p>
        </Link>
     </div>

    <div className="contenedor-link-button-servicio" >
        <Link  className="link-button-servicio" to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=png/path/sb00e8250327cd0a1/image/iff11108ffbfc0a0d/version/1642677810/funciones-de-un-electricista.png"
              alt="imagen-electricista"
              />
            <p>Electricista</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link  className="link-button-servicio" to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://pinturashipopotamo.es/wp-content/uploads/2020/01/como-elegir-un-buen-pintor.jpg"
              alt="imagen-pintor"
              />
            <p>Pintores</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://www.shutterstock.com/image-photo/professional-locksmith-repairing-home-entrance-600nw-2343657591.jpg"
              alt="imagen-cerrajero"
              />
            <p>Cerrajero</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://static7.depositphotos.com/1000291/714/i/950/depositphotos_7141406-stock-photo-construction-mason-worker-bricklayer.jpg"
              alt="imagen-contruccion"
              />
            <p>Construccion</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://img.freepik.com/foto-gratis/mujer-cerca-tableta_23-2148994122.jpg"
              alt="imagen-alarma"
              />
            <p>Alarmas</p>
          
        </Link>
    </div>

    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://media.istockphoto.com/id/1314435125/es/foto/t%C3%A9cnico-de-electrodom%C3%A9sticos-trabajando-en-una-lavadora-de-carga-frontal-en-una-lavander%C3%ADa.jpg?s=612x612&w=0&k=20&c=NVlm-9J1F2mLgYgwejpxFwzB3r128VApQu9WQXkBiiY="
              alt="imagen-electrodomestico"
              />
            <p>Electrodomesticos</p>
          
        </Link>
    </div>

    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://media.istockphoto.com/id/1458711335/es/foto/carpintero-de-muebles-de-madera-masculino-trabajo-en-taller-de-madera-diy-trabajador-de.webp?b=1&s=170667a&w=0&k=20&c=BIsyKivOI5w_F2wLFlLqlbJdk8H9r9-8P9skg6rGwI8="
              alt="imagen-carpintero"
              />
            <p>Carpintero</p>
          
        </Link>
    </div>
    <div className="contenedor-link-button-servicio" >
        <Link className="link-button-servicio"  to={`/proveedor/lista/ELECTRICISTA`}>
          
            <img
              src="https://cursos.com/wp-content/uploads/2020/12/funciones-de-un-jardinero-710x570.jpg"
              alt="imagen-jardinero"
              />
            <p>Jardineros</p>
          
        </Link>
    </div>

      </div>
    </div>
  );
}
