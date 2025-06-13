import React from 'react';

const ListaFrutas = () => {
    const frutas = ["Manzana", "Banana", "Uva"]
  return (
    <ul>
        {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
        ))}
      
    </ul>
  );
}

export default ListaFrutas;
