import React from 'react';
import './Caja.css'
const Caja = () => {
    const estilo = {
        backgroundColor: "skyblue",
        padding: "20px",
        color: "white",
        borderRadius: "8px"
    }
  return (
    <div className='caja'>
      Soy una caja con estilo en línea
    </div>
  );
}

export default Caja;
