import axios from 'axios';

const getPokemon = (num) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
  .then(res => res.data.sprites.front_default)
  .catch(err => console.log(err))
}

export default getPokemon;
