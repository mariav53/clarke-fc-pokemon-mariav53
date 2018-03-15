import React, { Component } from 'react';
import Header from './Header';
import PokeInfo from './PokeInfo';
import PokeCard from './PokeCard';
import PokeList from './PokeList';
import Search from './Search';

import { Link, Route, Switch } from 'react-router-dom';


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
         console.log(pokemonJson);
       })
     }
   }

  getEvolution() {
    for (let pokeID = 1; pokeID <=4; pokeID++) {
       fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokeID}`)
       .then(response => response.json())
       .then(results => {
         let evolutionJson = this.state.arrayEvolution;
         evolutionJson.push(results) //los resultados de cada iteracion se guardan en array evolutionJson
            this.setState({
           arrayEvolution: evolutionJson
         });
         // console.log(evolutionJson);
       })
     }
   }
  // //
  //   showEvolution(){
  //    let evolution = this.state.arrayEvolution;
  //   return(
  //  <ul className="pokemons__list">
  //    {evolution.map((evol, index) => //se ordenan los resultados por id
  //      <li key={index}>
  //        {evol.chain.species.name}
  //      </li>)}
  //  </ul>
  //   );
  // }


  async componentDidMount() {
    this.getPokemon();
    this.getEvolution();
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
              {/* {this.showEvolution()} */}
              <PokeList
                species={this.state.arraySpecies}
                // evolution={this.state.arrayEvolution}
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
