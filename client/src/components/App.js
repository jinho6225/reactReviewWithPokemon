import React, { Component } from 'react';
import Search from './Search'
import PokemonList from './PokemonList'


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { pokemon } = this.props
    return (
        <div>
          <Search />
          <PokemonList pokemon={pokemon} />
        </div>
    )
  }
}

export default App;
