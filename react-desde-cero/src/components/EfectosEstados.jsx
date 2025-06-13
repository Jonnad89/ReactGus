import { useState, useEffect } from "react";


const EfectosEstados = () => {
    const [contador, setContador] = useState(0)

    // Se ejecuta una sola vez(montaje)
    useEffect(()=> {
        console.log("Componente montado")
    })

    // Se ejecuta cada vez que cambia 'contador'
    useEffect(()=> {
      console.log(`Contador actualizado: ${contador}`)
    }, [contador])
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador +1)}>Sumar</button>
    </div>
  );
}

export default EfectosEstados;
