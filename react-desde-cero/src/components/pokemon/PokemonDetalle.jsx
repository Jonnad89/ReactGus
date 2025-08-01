import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonDetalle = () => {

    const { nombre } = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerPokemon = async () => {
            try {
                
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await res.json();
        setPokemon(data)
        setCargando(false);
            } catch (error) {
                console.error("Error al obtener detalles:", error)
                navigate("/pokemon"); // Si da error, redirigimos
            }
        };
        obtenerPokemon();
    }, [nombre])
if (cargando) return <p>Cargando detalles...</p>

  return (
    <div
    style={{ padding: "1rem" }}
    >
        <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />

        <h3>Tipos:</h3>
        <ul>
            {pokemon.types.map((tipo) => (
                <li key={tipo.type.name}> {tipo.type.name} </li>
            ))}
        </ul>

        <h3>Movmientos (primeros 5):</h3>
        <ul>
            {pokemon.moves.slice(0, 5).map((mov) => (
                <li key={mov.move.name}> {mov.move.name} </li>
            ))}
        </ul>

        <button onClick={() => navigate(-1)}>Volver</button>
      
    </div>
  );
}

export default PokemonDetalle;
