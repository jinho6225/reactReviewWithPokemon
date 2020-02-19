import React from 'react';

const PokemonListItem = (props) => {
  const { pokemon } = props
  return (
      <div className="pokemonItem">
        <div>Name: {pokemon.name}</div>
        <div>Id: {pokemon.id}</div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      </div>
  )
}

export default PokemonListItem;
