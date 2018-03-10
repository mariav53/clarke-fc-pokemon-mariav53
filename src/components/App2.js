import React, { Component } from 'react';
import PokeCard from './PokeCard';

const url = 'https://pokeapi.co/api/v2/pokemon/1/'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      species : [],
      pokeId: [],
      image : [],
      id:[],
      name: [],
      types: [],
      filteredPokemon : ''
    };
  }
  componentWillMount(){
    this.fetchData();
    // this.getPokemon();
  }
//
//   getPokemon(){
//   const url2 = '';
//   for(let i=1; i<4;i++){
//     let url2=url+i;
//
//     fetch(url2)
//     .then(res=>res.json())
//     .then(result=>{
//       this.setState({
//         species : result,
//         id: result.id,
//         image: result.sprites.front_default,
//         name: result.name.toUpperCase(),
//         types: result.types.map((t) => t.type.name)
//       });
//        console.log(this.state.name)
//     })
//     }
// }

  fetchData(){
    fetch(url)
      .then(res=>res.json())
      .then(result=>{
        this.setState({
          species : result,
          id: result.id,
          image: result.sprites.front_default,
          name: result.name.toUpperCase(),
          types: result.types.map((t) => t.type.name)
        });
         console.log(this.state.name)
      })
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
              {/* {species.map((pokemon,index)=> */}
              <li className="pokemons__item"  >
                <PokeCard
                  name={this.state.name}
                  id={this.state.id}
                  image={this.state.image}
                  types={this.state.types}
                />

              </li>
              {/* )} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
