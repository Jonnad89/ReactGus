import { useState } from "react";

const BotonDinamico = () => {
    const [activo, setActivo] = useState(true)

    const estilo = {
        backgroundColor: activo ? "green" : "gray",
        color: "white",
        padding:"10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
  return (
    <div style={estilo} onClick={() => setActivo(!activo)}>
      <button>{activo ? "Activo" : "Inactivo"}</button>
    </div>
  );
}

export default BotonDinamico;
