import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'
import Nombre from './components/Nombre'
import Presentacion from './components/Presentacion'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Saludo />
    <Nombre />
    <Presentacion />
    </>
  )
}

export default App