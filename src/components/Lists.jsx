import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function Lists(props) {
    let [allPokemonList, setAllPokemonList] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=40&offset=${props.offset}`)
            .then(response => response.json())
            .then(data => setAllPokemonList(data.results))
        //https://pokeapi.co/api/v2/pokemon?limit=51
        //console.log(`https://pokeapi.co/api/v2/pokemon?limit=40&offset=${props.offset}`)
    }, [props.offset])

    return (
        <div className="list-cont">
            {allPokemonList === null ? <div className='loader'></div> :
                allPokemonList.map((elem) => { return <Card url={elem.url} key={elem.name} /> })
            }
        </div>
    );
}
