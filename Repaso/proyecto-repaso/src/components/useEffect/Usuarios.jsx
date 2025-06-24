import React, { useState, useEffect } from 'react';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsuarios(data)
      setCargando(false)
    })
    const intervalo = setInterval(()=> {
      console.log("Ejecutando cada segundo")
    }, 1000);
    return() => {
      clearInterval(intervalo);
      console.log("Limpieza al desmontar")
    }
  },[])
  if (cargando) return <p>Cargando usuarios...</p>

  return (
    <ul>
      {usuarios.map((user) =>  (
        <li key={user.id}> {user.name} </li>
      ))}
    </ul>
  );
}

export default Usuarios;


// useEffect(()=> {
//     console.log("Se ejecuta una vez al montar el componente")
// }, [])