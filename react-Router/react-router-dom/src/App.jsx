import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import QuienesSomos from './pages/QuienesSomos'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Navbar from './components/Navbar'

function App() {

  return (
    // <nav>
    //   <Link to="/" >Inicio</Link>
    //   <Link to="/contacto" >Contacto</Link>
    // </nav>
   <div>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        {/* <Route path='/contacto' element={ <Contacto /> }/>
        <Route path='/quienes-somos' element={ <QuienesSomos /> }/> */}
        <Route path='/productos' element={<Productos />}/>
        <Route path='/productos/:id' element={<DetalleProducto />}/>
        <Route path='/*' element={<h2>Página no encontrada</h2>}/>
      </Routes>
    </div>
  )
}

export default App
