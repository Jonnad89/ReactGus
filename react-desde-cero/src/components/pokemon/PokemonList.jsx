import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {

    const [pokemones, setPokemones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerPokemones = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await res.json();
                console.log("Lista básica:", data)

                // Obtener detalles de pokemon
                const detalles = await Promise.all(
                    data.results.map(async (poke) => {
                        const resDetalle = await fetch(poke.url);
                        const pokeData = await resDetalle.json()
                        return pokeData
                    })
                );
                    
                console.log("Detalles completos:", detalles)    
                setPokemones(detalles)
                setCargando(false)
            } catch (error) {
                console.error("Error al cargar pokémon:", error);
            }
        };
        obtenerPokemones();
    }, []);

    if (cargando) return <p>Cargando Pokemón...</p>
       
console.log(pokemones)
  return (
    <div>
            <h2>Pokemón disponibles</h2>
            {/* <pre>{JSON.stringify(pokemones, null, 2)}</pre> */}
            <div style={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
                {pokemones.map((poke) => (
                    <div 
                        key={poke.id}
                        style={{
                            width : "150px",
                            padding : "1rem",
                            border : "1px solid #ccc",
                            borderRadius : "8px",
                            background : "f0f0f0",
                            textAlign : "center"
                        }}
                    >

                        <img 
                        src={poke.sprites?.front_default} 
                        alt={poke.name} 
                        width={96}
                        height={96}/>
                        
                        <h4>{poke.name}</h4>
                        <Link to={`/pokemon/${poke.name}`}>Ver detalles</Link>

                    </div>
                ))}
            </div>
    </div>
  );
}

export default PokemonList;
