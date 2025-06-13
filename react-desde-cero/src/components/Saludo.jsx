import { useState } from 'react';
import './Saludo.css'
// import foto from '.Assets'
const Saludo = ({nombre}) => {
  const [contador, setContador] = useState(0)
  return (
    <div className='saludar'>
      <h1>Hola, {nombre}</h1>
      <p>Hiciste click {contador} veces</p>
      <button onClick={() => setContador(contador +1)}>Click</button>
      {/* <div className='caja'>Texto</div> */}
      <p>Este es un componente usando JSX</p>
      {/* <img src={foto} alt="" /> */}
    </div>
  );
}

export default Saludo;


{/*
    Para crear el componente escribimos "rafce"
    instalar dependencias:
    simple react snippets
    ES7 react/redux...
    ES7 + React/redux/ react-native snippets
    ES7/ React-snippets
    JS JSX snippets
    Reactjs code snippets
    */}