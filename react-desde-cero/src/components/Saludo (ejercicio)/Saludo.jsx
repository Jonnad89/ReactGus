import React from 'react';

const Saludo = ({nombre}) => {
    const estilo = {
        backgroundColor : "skyblue",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center"
    }
  return (
    <div style={estilo}>
      Hola, {nombre}
    </div>
  );
}

export default Saludo;
