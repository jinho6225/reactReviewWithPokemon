import React from 'react';
import PokemonListItem from './PokemonListItem'

const PokemonList = (props) => {
  const { pokemon } = props
  return (
    <div id="pokemonList">
      {pokemon.map((poke, i) => {
        return <PokemonListItem pokemon={poke} key={i} />
      })}
    </div>
  )
}

export default PokemonList;
