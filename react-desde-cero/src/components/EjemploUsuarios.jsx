import {useState, useEffect} from 'react'
import './EjemploUsuarios.css'
const EjemploUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        obtenerUsuarios()
        //     .then((res) => res.json())
        //     .then((data) => setUsuarios(data))
        // console.log("Componente montado")
        // .then((res) => {
        //     if (!res.ok) throw new Error("Error en la petición")
        //         return res.json()
        // })
        // .then((data) => setUsuarios(data))
        // .catch((err) => setError(err.message))
        // .finally(()=> setLoading(false))
    }, [])

    const obtenerUsuarios = async () => {
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsuarios(data)
        } catch (err) {
            console.error("Error al obtener usuarios:", err)
        }
    }

    // if(loading) return <p>Cargando usuarios...</p>
    // if (error) return <p>Error: {error}</p>
  return (
    <div>
      <h2 style={{"background": "red"}}>Lista Usuarios</h2>
      <ul>
        {/* {usuarios.map((usuario) =>(
            <li key={usuario.id}>{usuario.name}</li>
        ))} */}
        {usuarios.map((u) => (
            <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EjemploUsuarios;
