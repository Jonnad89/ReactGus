import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'
import Eventos from './components/Eventos'
import InputNombre from './components/InputNombre'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'
import Saludar from './components/Saludar'
import Advertencia from './components/Advertencia'
import Ejemplo from './components/Ejemplo'
import ToggleMensaje from './components/ToggleMensaje'
import ListaFrutas from './components/ListaFrutas'
import Usuarios from './components/Usuarios'
import Tarjeta from './components/Tarjeta'
import ListaTarjetas from './components/ListaTarjetas'
import EfectosEstados from './components/EfectosEstados'
import EjemploUsuarios from './components/EjemploUsuarios'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav'
// import Nombre from './components/Nombre'
// import Presentacion from './components/Presentacion'
// import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)  

  return (
    <>
          {/* <p>Contador: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Incrementar</button>
      <button onClick={()=> setCount(count - 1)}>Decrementar</button> */}
      {/* <Saludo nombre="Eugenia"/> */}
      {/* <Eventos /> */}
      {/* <InputNombre />
      <Formulario /> */}
      {/* <Mensaje esAdmin={false}/>
      <Saludar logueado={false}/>
      <Advertencia hayError={true}/> */}
      {/* <Ejemplo edad={"17"}/> */}
      {/* <ToggleMensaje />
      <ListaFrutas />
      <Usuarios />

      <ListaTarjetas /> */}
    {/* 
    <Nombre />
    <Presentacion 
    edad="30" 
    nombre="Sofía"
    ciudad="Roma"
    /> */}
    {/* <Contador /> */}
    {/* <EfectosEstados /> */}
      {/* <EjemploUsuarios /> */}
      {/* <Header /> */}
      <Nav />
     <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<Nav />} /> No se suele poner la nav acá */ } 
        <Route path='/about' element={<About />} />
     </Routes>
    </>
  )
}

export default App