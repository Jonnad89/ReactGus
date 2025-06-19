import { useState } from "react";

const Formulario = () => {
    // const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");


    const manejarEnvio = (e) => {
        e.preventDefault();
        // console.log("Email enviado: ", email)
        if (nombre.trim() === "") {
            setError("El nombre no puede estar vacío")
            return;
        }
        setError("");
        alert(`Hola, ${nombre}`)
    }

  return (
    <form onSubmit={manejarEnvio}>
      <input 
      type="text" 
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      />

      <button type="submit">Enviar</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  );
}

export default Formulario;
