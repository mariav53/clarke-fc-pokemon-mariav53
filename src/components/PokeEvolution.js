import React, { Component } from 'react';

class PokeEvolution extends Component {
  render () {
    const {evolution} = this.props
    return(
      <div>
        <ul className="pokemons__list">
          {evolution.map((evol, index) => //se ordenan los resultados por id
            <li key={index} >
              {evol.chain.evolves_to.evolves_to.species.name}
            </li>)}
        </ul>
      </div>
    );
  }
}

 export default PokeEvolution;
