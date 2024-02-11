import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import ModificarTrabajo from './components/trabajo/ModificarTrabajo';
import DetalleTrabajo from './components/trabajo/DetalleTrabajo';
import Comentarios from './components/comentario/Comentarios';
import GuardarComentario from './components/comentario/GuardarComentario';


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Header/>

    <Routes>
    <Route path='/' element={<Inicio/>} />
    <Route path='/usuario/lista' element={<Usuarios/>} />
    <Route path='/usuario/perfil/:id' element ={<Perfil/>} />
    <Route path='/usuario/crear' element ={<GuardarUsuario/>} />
    <Route path='/usuario/modificar/:id' element = {<ModificarUsuario/>} />


    <Route path='/proveedor/lista' element={<Proveedores/>} />
    <Route path='/proveedor/crear' element = {<GuardarProveedor/>}/>
    <Route path='/proveedor/detalle/:id' element = {<DetalleProveedor />}/>
    <Route path='/proveedor/modificar/:id' element = { <ModificarProveedor/>} />


    <Route path='/trabajo/crear' element ={<CrearTrabajo />}/>
    <Route path='/trabajo/lista' element={<Trabajos/>}/>
    <Route path='/trabajo/detalle/:num_trabajo' element = { <DetalleTrabajo/>} />
    <Route path='/trabajo/modificar/:num_trabajo' element={ <ModificarTrabajo/>}/>


    <Route path='/comentario/lista' element={<Comentarios/>} />
    <Route path='/comentario/crear' element= {<GuardarComentario/>} />
     </Routes>

     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
