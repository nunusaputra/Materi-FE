import React from 'react'
import pokemon from '../assets/data.json'
import Cards from './Cards'

const PokemonList = () => {
    return (
        <div className='wrapper'>
            {pokemon.map(item => (
                <Cards key={item.id} item={item} />
            ))}
        </div>
    )
}

export default PokemonList
