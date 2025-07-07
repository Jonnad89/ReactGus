import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo (ejercicio)/Saludo'
import Eventos from './components/Eventos'
import InputNombre from './components/InputNombre'
import Formulario from './components/formulario/Formulario'
import Mensaje from './components/Mensaje'
import Saludar from './components/Saludar'
import Advertencia from './components/Advertencia'
import Ejemplo from './components/Ejemplo'
import ToggleMensaje from './components/ToggleMensaje'
import ListaFrutas from './components/ListaFrutas'
import Usuarios from './components/Usuarios'
import Tarjeta from './components/Tarjeta/Tarjeta'
import ListaTarjetas from './components/ListaTarjetas'
import EfectosEstados from './components/EfectosEstados'
import EjemploUsuarios from './components/EjemploUsuarios'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav'
import SimularEnvio from './components/formulario/SimularEnvio'
import Caja from './components/Caja/Caja'
import Boton from './components/Boton/Boton'
import BotonDinamico from './components/BotonDinamico/BotonDinamico'
import Input from './components/inputNombre/Input'
import MostrarNombre from './components/inputNombre/MostrarNombre'
import CambiarColor from './components/Botón comunicación/CambiarColor'
// import Nombre from './components/Nombre'
// import Presentacion from './components/Presentacion'
// import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)  


  // Ejemplo en carpeta inputNombre
  const [nombre, setNombre] = useState("");


  // Ejemplo en carpeta boton comunicación

  const [color, setColor] = useState("white");

  const manejarCambioColor = (nuevoColor) => {
    setColor(nuevoColor)
  }
  return (
    <>


    <h1>Ejemplo lifting state up</h1>
      
     <Input 
     nombre ={nombre}
     setNombre={setNombre}
     />

     <MostrarNombre 
     nombre={nombre}
     />

     {/* Ejemplo carpeta boton comunicación */}

      <div style={{backgroundColor: color, padding : "2rem", minHeight :"100vh"}}> 
        <h1>Color actual: {color}</h1>
        <CambiarColor 
        onColorChange={manejarCambioColor}
        />
      </div>



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
      {/* <Nav /> */}
     {/* <Routes>
        <Route path='/' element={<Home />} /> */}
        {/* <Route path='/about' element={<Nav />} /> No se suele poner la nav acá */ } 
        {/* <Route path='/about' element={<About />} />
     </Routes> */}
     {/* <Formulario /> */}
     {/* <SimularEnvio /> */}
     {/* <Caja /> */}
     {/* <Boton /> */}
     {/* <Saludo nombre="Jonatan"/> */}
     {/* <BotonDinamico /> */}
     {/* <Tarjeta /> */}
    </>
  )
}

export default App