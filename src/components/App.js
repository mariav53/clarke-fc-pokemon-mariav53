import React, { Component } from 'react';
import Header from './Header';
import PokeCard from './PokeCard';
import Search from './Search';


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
      for (let i = 1; i <=25; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => response.json())
        .then(results => {
          let pokemon = this.state.species;
  			     pokemon.sort(this.state.species.index)
  			     pokemon.push(results)
  			      this.setState({
  				          species: pokemon
  			             });
          // this.setState({
          //  species: this.state.species.concat([results]) //para concatenar todos los pokemons en array species
          // })
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

          {species.sort((id) => species.id).map((pokemon, index) =>
            // {species.map((pokemon, index) =>
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
      console.log(this.state.species)
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
