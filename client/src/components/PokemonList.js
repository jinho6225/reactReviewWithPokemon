import React from 'react';
import PokemonListItem from './PokemonListItem'

const PokemonList = (props) => {
  const { pokemon } = props
  return (
    <div id="pokemon">
    {pokemon.map((el, i) => {
      return <PokemonListItem  pokemon={el} key={i} />
    })}
    </div>
  )
}

export default PokemonList;
