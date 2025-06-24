import React, { useState } from 'react';

const Formulario = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault();
        if(!email.includes("@")){
            setError("El correo no es válido");
            alert(`Error al enviar correo: ${email}`)
            return
        }
        setError("");
        alert(`Email enviado: ${email}`)
    }
  return (
    <form onSubmit={manejarEnvio}>
      <input 
      type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Formulario;
