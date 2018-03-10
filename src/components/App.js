import React, { Component } from 'react';
import Header from './Header';
import PokeCard from './PokeCard';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterPokemons = this.handleFilterPokemons.bind(this);
    this.state = {
      species: [], //arrary de pokemons
      filteredPokemonByName: ''//lista para el filtrado
    }
  }
  componentDidMount () {
    for (let pokeID = 1; pokeID <=25; pokeID++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
      .then(response => response.json())
      .then(results => {
        let pokemonJson = this.state.species;
	      pokemonJson.push(results) //los resultados de cada iteracion se guardan en array pokemonJson
	      this.setState({
          species: pokemonJson
        });
      })
    }
  }
  handleFilterPokemons (e) {
    this.setState({
      filteredPokemonByName: e.target.value.toLowerCase()
    })
  }
  showPokemons () {
    let species = this.state.species
    species = species.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.filteredPokemonByName))
    return(
      <ul className="pokemons__list">
        {species.sort((a,b) => a.id - b.id).map((pokemon, index) => //se ordenan los resultados por id
          <li className="pokemons__item" key={index} >
            <PokeCard
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types= {pokemon.types.map((t) => t.type.name)}
            />
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          pokemonSearch={this.handleFilterPokemons}
        />
        <div className="pokedex">
          <div className="pokedex__container">
            {this.showPokemons()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
