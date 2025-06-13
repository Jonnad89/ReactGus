import { useState } from "react"

const Formulario = () => {
    const [input, setInput] = useState("")

    const manejarSubmit = (e) => {
        // e.prevedentDefault();
        alert(`Formulario enviado con: ${input}`)
    }
  return (
    <form onSubmit={manejarSubmit}>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
