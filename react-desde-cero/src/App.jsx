import { useState } from 'react'

import './App.css'
import { Route, Routes,Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/pages/Home';
import ListaPosts from './pages/pages/ListaPosts';
import DetallePost from './pages/pages/DetallePost';
import NuevoPost from './pages/pages/NuevoPost';
import PokemonList from './components/pokemon/PokemonList';
import PokemonDetalle from './components/pokemon/PokemonDetalle';


function App() {

  const [posts, setPosts] = useState([
    { id:1, titulo: "Primer post", contenido : "Este es el contenido del primer post."},
    { id:2, titulo: "Segundo post", contenido : "Contenido interesante del segundo post."}
  ]);
  
  // const [count, setCount] = useState(0)  


  // // Ejemplo en carpeta inputNombre
  // const [nombre, setNombre] = useState("");


  // // Ejemplo en carpeta boton comunicación

  // const [color, setColor] = useState("white");

  // const manejarCambioColor = (nuevoColor) => {
  //   setColor(nuevoColor)
  // }
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
<Route path='/pokemon' element={<PokemonList />} />
<Route path='pokemon/:nombre' element={<PokemonDetalle />} />
    {/* <Route path='/' element={<Home />} />
    <Route path='/posts' element={<ListaPosts posts={posts} />}/>
    <Route path='/posts/:id' element={<DetallePost posts={posts}/>}/>
    <Route path='/nuevo' element={<NuevoPost setPosts={setPosts} posts={posts}/>}/>
    <Route path='*' element={<h2>Página no encontrada</h2>}/> */}
</Routes>
{/* Hooks useLocation - useSearchParams */}

    {/* <Routes>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/productos/id' element={<DetalleProducto />}/>
      <Route />
    </Routes> */}

    {/* <h1>Ejemplo lifting state up</h1>
      
     <Input 
     nombre ={nombre}
     setNombre={setNombre}
     />

     <MostrarNombre 
     nombre={nombre}
     /> */}
     {/* Ejemplo carpeta boton comunicación */}

      {/* <div style={{backgroundColor: color, padding : "2rem", minHeight :"100vh"}}> 
        <h1>Color actual: {color}</h1>
        <CambiarColor 
        onColorChange={manejarCambioColor}
        />
      </div> */}



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