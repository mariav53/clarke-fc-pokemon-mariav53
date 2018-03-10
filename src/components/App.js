import React, { Component } from 'react';
import PokeCard from './PokeCard';
import Header from './Header';

const url = 'https://pokeapi.co/api/v2/pokemon/'

class App extends Component {
    constructor(props) {
      super(props);
      this.handleFilterPokemons = this.handleFilterPokemons.bind(this);
      this.state = {
        species: [],
        filteredPokemon: ''
      }
    }

    componentDidMount () {
      for (let i = 1; i < 3; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => response.json())
        .then(results => {
          this.setState({
            species: this.state.species.concat([results])
          })
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
        <ul className="pokemon__list">
          {species.map((pokemon, index) =>
              <li className="pokemons__item" key={index}>
                <PokeCard
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
      console.log(this.state.species)
      return (
        <div className="App">
          <Header />
          <div className="pokedex">
            <div className="pokedex__container">
              <input className="input__search" onChange={this.handleFilterPokemons}/>
              {this.showPokemons()}
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
