import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function Lists() {
    let [allPokemonList, setAllPokemonList] = useState(null);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
            .then(response => response.json())
            .then(data => setAllPokemonList(data.results))
        //https://pokeapi.co/api/v2/pokemon?limit=51
    }, [])

    return (
        <div className="list-cont">
            {allPokemonList === null ? '' :
                allPokemonList.map((elem) => { return <Card url={elem.url} key={elem.name} /> })
            }
        </div>
    );
}
