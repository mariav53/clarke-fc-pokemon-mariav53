import React, { Component } from 'react';
import Header from './Header';
import PokeCard from './PokeCard';
import PokeList from './PokeList';
import Search from './Search';
// import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySpecies: [], //arrary de pokemons
      arrayEvolution : [], //arrary de evoluciones
      filteredPokemonByName: ''//lista para el filtrado
    }
  }

  getPokemon() {
    for (let pokeID = 1; pokeID <=4; pokeID++) {
       fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
       .then(response => response.json())
       .then(results => {
         let pokemonJson = this.state.arraySpecies;
         pokemonJson.push(results) //los resultados de cada iteracion se guardan en array pokemonJson
            this.setState({
           arraySpecies: pokemonJson
         });
       })
     }
   }

 componentDidMount() {
    this.getPokemon();
    console.log(this.state.arrayEvolution);
  }

  handleFilterPokemons (e) {
    this.setState({
      filteredPokemonByName: e.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Search
            pokemonSearch={(e) => this.handleFilterPokemons(e)}
          />
          <div className="pokedex">
            <div className="pokedex__container">
              <PokeList
                species={this.state.arraySpecies}
                filteredPokemonByName ={this.state.filteredPokemonByName}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
