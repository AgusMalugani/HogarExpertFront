import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';
import Usuarios from './components/usuario/Usuarios';
import GuardarUsuario from './components/usuario/GuardarUsuario';
import Perfil from './components/usuario/Perfil';
import ModificarUsuario from './components/usuario/ModificarUsuario';
import Proveedores from './components/proveedor/Proveedores';
import GuardarProveedor from './components/proveedor/GuardarProveedor';
import DetalleProveedor from './components/proveedor/DetalleProveedor';
import ModificarProveedor from './components/proveedor/ModificarProveedor';
import CrearTrabajo from './components/trabajo/CrearTrabajo';
import Trabajos from './components/trabajo/Trabajos';
import DetalleTrabajo from './components/trabajo/DetalleTrabajo';
import Comentarios from './components/comentario/Comentarios';
import GuardarComentario from './components/comentario/GuardarComentario';

import ListaProveedoresPorServicios from './components/proveedor/ListaProveedoresPorServicios';

import Login from './components/sesion/Login';
import { UserProvider } from './components/sesion/UserContext';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import ListaProveedoresPorLocalidad from './components/proveedor/ListaProveedoresPorLocalidad';

import DatosContactoProveedor from './components/proveedor/DatosContactoProveedor';
import SinAutorizacion from './components/SinAutorizacion';

import ErrorPagina from './components/ErrorPagina';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Verificar si hay un token almacenado en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
  

    <BrowserRouter>
    <UserProvider>
    <Header isAuthenticated={isAuthenticated} setIsAuthenticated ={setIsAuthenticated}   />

    <Routes>
    <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />

    
    

    <Route path='/' element={<Inicio isAuthenticated={isAuthenticated} />} />
    <Route path='/usuario/lista' element={<Usuarios/>} />
    <Route path='/usuario/perfil/:id' element ={<Perfil/>} />
    <Route path='/usuario/perfil' element={<Perfil />} />
    <Route path='/usuario/crear' element ={<GuardarUsuario/>} />
    <Route path='/usuario/modificar/:id' element = {<ModificarUsuario/>} />


    <Route path='/proveedor/lista' element={<Proveedores />} />
    <Route path='/proveedor/lista/:servicio' element={<ListaProveedoresPorServicios/>} />
    <Route path='/proveedor/listaProv/:localidad' element={<ListaProveedoresPorLocalidad />}/>
    <Route path='/proveedor/crear' element = {<GuardarProveedor/>}/>
    <Route path='/proveedor/detalle/:id' element = {<DetalleProveedor />}/>
    <Route path='/proveedor/detalle' element = {<DetalleProveedor />}/>
    <Route path='/proveedor/modificar/:id' element = { <ModificarProveedor/>} />



    <Route path='/trabajo/crear/:id' element ={<CrearTrabajo />}/>
    <Route path='/trabajo/lista' element={<Trabajos/>}/>
    <Route path='/trabajo/detalle/:id' element = { <DetalleTrabajo/>} />
    <Route path='/proveedor/detalleContactoProv/:id' element={<DatosContactoProveedor/>} />
   

    


    <Route path='/comentario/lista' element={<Comentarios/>} />
    <Route path='/comentario/crear' element= {<GuardarComentario/>} />


    <Route path='/faqs' element={<PreguntasFrecuentes/>}/>

    <Route path='/SinAutorizacion' element={<SinAutorizacion/>}/>
    <Route path="/404" element={<ErrorPagina />} />
        <Route path="*" element={<Navigate to="/404" />} />
     </Routes>

     <Footer/>
     </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
