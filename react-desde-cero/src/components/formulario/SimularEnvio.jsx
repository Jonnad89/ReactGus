import { useState } from "react";

const SimularEnvio = () => {
    const [mensaje, setMensaje] = useState("")

    const manejarEnvio = async (e) => {
        e.preventDefault();
        await new Promise((res) => setTimeout(res,1500));
        setMensaje("Formulario enviado con éxito")
    }
  return (
    <form onSubmit={manejarEnvio}>
      <input 
      type="text" 
      placeholder="Tu nombre"
      />
      <button type="submit">Enviar</button>
      <p>{mensaje}</p>
    </form>
  );
}

export default SimularEnvio;
