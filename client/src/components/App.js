import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search'
import PokemonList from './PokemonList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    var arr = [];
    for (let i = 1; i <= 12; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => {
        var obj = {};
        obj['name'] = response.data.name;
        obj['id'] = response.data.id
        obj['frontImg'] = response.data.sprites.front_default
        obj['backImg'] = response.data.sprites.back_default
        arr = arr.concat([obj])
        this.setState({ pokemon: [...arr] })
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  render() {
    const { pokemon } = this.state
    return (
        <div>
          <Search />
          <PokemonList pokemon={pokemon} />
        </div>
    )
  }
}

export default App;
