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
      filteredPokemon: '' //lista para el filtrado
    }
  }

  componentDidMount () {
    for (let i = 1; i <=10; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())
      .then(results => {
        let pokemonJson = this.state.species;
	      pokemonJson.push(results)
	      this.setState({
          species: pokemonJson
        });
      })
    }
  }

  handleFilterPokemons (e) {
    this.setState({
      filteredPokemon: e.target.value.toLowerCase()
    })
  }

  showPokemons () {
    let species = this.state.species
    species = species.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.filteredPokemon));

    return(
      <ul className="pokemons__list">
        {species.sort((a,b) => a.id - b.id).map((pokemon, index) =>
          <li className="pokemons__item" >
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
        <Search pokemonSearch={this.handleFilterPokemons} />
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
