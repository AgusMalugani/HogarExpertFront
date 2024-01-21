import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Principal from'./components/Principal';
import Inicio from './components/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Inicio/>} />
    <Route path='/principal' element ={<Principal/>} />
     </Routes>

     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
