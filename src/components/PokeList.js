import React, { Component } from 'react';

import PokeCard from './PokeCard';
// import PokeInfo from './PokeInfo';

class PokeList extends Component {


   render () {
     const {evolution}= this.props
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
               // evolution = {evolution}
             />
           </li>
         )}
       </ul>
     </div>
    );
  }
 }

 export default PokeList;
