import React from 'react';

const PokemonListItem = (props) => {
  const { pokemon } = props
  return (
      <div id="pokemonList">
        <p className="info">Name: {pokemon.name}</p>
        <div><img src={pokemon.frontImg} alt={pokemon.name} className="pokemonItem" />
        <img src={pokemon.backImg} alt={pokemon.name} className="pokemonItem" /></div>
      </div>
  )
}

export default PokemonListItem;
