import React, { Component } from 'react';
import Header from './Header';
import PokeCard from './PokeCard';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

class App extends Component {
  constructor(props){
    super(props);
    this.handleFilterPokemon = this.handleFilterPokemon.bind(this);
    this.state = {
       species : [],
       filteredPokemon: ''
    };
   }
   componentWillMount(){
     fetch(url)
     .then(res=>res.json())
     .then(json=>{
       this.setState({
         species : json.results
       });
       console.log(this.state.species)
     });
   }
   handleFilterPokemon(e){
     this.setState({
       filteredPokemon : e.target.value
     })
     console.log(e.target.value);
   }

  render() {
    
    let species = this.state.species;
    species = species.filter( pokemon => pokemon.name.includes(this.state.filteredPokemon))

    return (
      <div className="App">
        <Header />
        <input type="text" onChange={this.handleFilterPokemon} />
        <div className="pokedex">
          <div className="pokedex__container">
            <ul className="pokemons__list">
              {species.map((pokemon,index)=>
                <li className="pokemons__item" key={index} >
                  <PokeCard
                    name={pokemon.name}
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

export default App;
