import React, { useState } from 'react';

const InputNombre = () => {
    const [nombre, setNombre] = useState("")

    function manejarCambio(e) {
        setNombre(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={manejarCambio} />
      <p>Tu nombre es: {nombre}</p>
    </div>
  );
}

export default InputNombre;

{/* 
    Otros eventos comunes:
    Evento          Cuando se dispara           ejemplo de uso
    onSubmit -> al enviar un formulario        validar antes de enviar
    onMouseOver -> Al pasar el mouse por encima     Mostar toolip
    onKeyDown -> Al presionar una tecla             Validar campos
    onFocus ->  Cuando un input gana el foco        Marcar input activo
    
    */}