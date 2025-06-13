import React from 'react';

const Usuarios = () => {
    const usuarios = [
        {id: 1, nombre: "Ana"},
        {id: 2, nombre: "Luis"},
        {id: 3, nombre: "Valeria"}
    ]
  return (
    <div>
      <h3>Lista de usuarios</h3>
      <ul>
        {usuarios.map((usuario) =>(
            <li key={usuario.id}>{usuario.nombre}, {usuario.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
