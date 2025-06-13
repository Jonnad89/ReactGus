import { useState } from "react";

const ToggleMensaje = () => {
    const [visible, setVisible] = useState(true)
  return (
    <div>
        <button onClick={() => setVisible(!visible)}>Mostrar</button>
        {visible && <p>¡Este mensaje se puede ocultar</p>}
      
    </div>
  );
}

export default ToggleMensaje;


{/*
    
    técnica                     uso principal
    if/else                 Lógica más compleja o múltiples ramas
    ? :                     Mostrar una u otra cosa (ternario)
    &&                      Mostrar algo solo si es verdadero
    
    */}