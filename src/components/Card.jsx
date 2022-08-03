import React, { useEffect, useState } from 'react';

export default function Card(props) {

    const colors = {
        bug: "#a8b820",
        dark: "#705848",
        dragon: "#7038f8",
        electric: "#f8d030",
        fairy: "#f8a0e0",
        fighting: "#903028",
        fire: "#f05030",
        flying: "#a890f0",
        ghost: "#705898",
        grass: "#78c850",
        ground: "#e0c068",
        ice: "#98d8d8",
        normal: "#a8a878",
        poison: "#a040a0",
        psychic: "#f85888",
        rock: "#b8a038",
        shadow: "#403246",
        steel: "#403246",
        unknown: "#68a090",
        water: "#6890f0",
    }

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
            {pokemon === null ? <div className='loader'></div> :
                <div className='card'>
                    <p className="pokemon-name">{pokemon.name}</p>
                    <div className="pokemon-image">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className="types-cont">
                        {pokemon.types.map((elemType) => {
                            return <p key={elemType.type.name} style={{ backgroundColor: colors[elemType.type.name] }} className="pokemon-type">{elemType.type.name}</p>
                        })}
                    </div>
                </div>
            }
        </>
    )
}
