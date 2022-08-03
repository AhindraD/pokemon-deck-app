import React, { useEffect, useState } from 'react';

export default function Card(props) {
    let [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then(data => setPokemon(data))
        //https://pokeapi.co/api/v2/pokemon/1/
        //pokemon.sprites.other["official-artwork"].front_default
        //pokemon.sprites.other.home['front_default']

    }, [])
    return (
        <>
            {pokemon === null ? '' :
                <div className='card'>
                    <p className="pokemon-name">{pokemon.name}</p>
                    <div className="pokemon-image">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <p className="pokemon-type">{pokemon.types[0].type.name}</p>
                </div>
            }
        </>
    )
}
