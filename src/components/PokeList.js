import React, { Component } from 'react';

import PokeCard from './PokeCard';

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySpecies: [], //arrary de pokemons
      arrayEvolution : [], //arrary de evoluciones
      filteredPokemonByName: ''
    }
  }

  getPokemons() {
    for (let pokeID = 1; pokeID <=25; pokeID++) {
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

  // getEvolutions() {
  //   for (let pokeID = 1; pokeID <=4; pokeID++) {
  //      fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokeID}`)
  //      .then(response => response.json())
  //      .then(results => {
  //        let evolutionJson = this.state.arrayEvolution;
  //        evolutionJson.push(results) //los resultados de cada iteracion se guardan en array evolutionJson
  //           this.setState({
  //          arrayEvolution: evolutionJson
  //        });
  //        // console.log(evolutionJson);
  //      })
  //    }
  //  }

  async componentDidMount() {
    this.getPokemons();
    // this.getEvolutions();
    // console.log(this.state.arrayEvolution);
  }

  handleFilterPokemons (e) {
    this.setState({
      filteredPokemonByName: e.target.value.toLowerCase()
    })
  }

   render () {
    let species = this.state.arraySpecies.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.filteredPokemonByName))
    return (
      <div className="main">
        <div className="search">
          <div className ="search_container">
    				<input type="text" name="search" placeholder="Encuentra a tu Pokemon favorito" id="search" onChange={(e) => this.handleFilterPokemons(e)} />
          </div>
        </div>
        <div className="pokedex">
          <div className="pokedex__container">
            <ul className="pokemons__list">
              {species.sort((a,b) => a.id - b.id).map((pokemon, index) => //se ordenan los resultados por id
              <li className="pokemons__item" key={index} >
                <PokeCard
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  types= {pokemon.types.map((t) => t.type.name)}
                  abilities= {pokemon.abilities.map((ability) => ability.ability.name)}
                />
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 export default PokeList;
