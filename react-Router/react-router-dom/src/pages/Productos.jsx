import React from 'react';
import { Link } from 'react-router-dom';
 const productos = [
        {id: 1, nombre: "Mouse"},
        {id: 2, nombre: "Teclado"},
        {id: 3, nombre: "Monitor"}
    ]
const Productos = () => {
   
  return (
    <div>
        <h2>Lista de productos</h2>
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Productos;
