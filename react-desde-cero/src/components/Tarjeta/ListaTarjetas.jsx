import React from 'react';
import Tarjeta from '../Tarjeta';

export default function ListaTarjetas() {
        const datos = [
        {titulo: "HTML", descripcion: "Estructura básica de una web"},
        {titulo: "CSS", descripcion: "Estilo y presentación"},
        {titulo: "JS", descripcion: "Lógica y comportamiento"}

    ]

  return (
     <div className="tarjeta">
      {datos.map((item, i) =>(
        <Tarjeta key={i} {...item} />
      ))}
    </div>
  );
}

