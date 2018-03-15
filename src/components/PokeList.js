import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import PokeCard from './PokeCard';

class PokeList extends Component {
   render () {
    let species = this.props.species.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.filteredPokemonByName))
    return(
     <div>
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
    );
  }
 }

 export default PokeList;
