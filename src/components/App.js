import React, { Component } from 'react';
import PokeCard from './PokeCard';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       species : []
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

  render() {
    const {species} = this.state
    return (
      <div className="App">
        <div className="header">
          <h1>POKEDEX</h1>
        </div>
        <div className="pokedex">
          <div className="pokedex__container">
            <ul className="pokemons__list">
              {species.map((pokemon,index)=>
                <li className="pokemons__item" key={index} >
                  <PokeCard
                    name={pokemon.name}
                    pokemon={pokemon}/>
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
