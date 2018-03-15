import React, { Component } from 'react';
import PokeInfo from './PokeInfo';

import PokeEvolution from './PokeEvolution';


class PokeCard extends Component {

  render () {
     const { evolution }  = this.props
    return (
      <div className="pokemonCard">
        <div className ="pokemonCard__container">
          <div className="pokemonCard__img">
            <img className="pokemon__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt= {this.props.name} />
          </div>
          <div className="pokemonCard__info">
            <p className="pokemon__name"> {this.props.name.toUpperCase()}</p>
            <p className="pokemon__id"> #{this.props.id.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
            <div className="pokemonCard__types">
              <ul className="pokemon__types__list">
                {this.props.types.map((type, index) =>
                  <li key={index} className={`pokemon__type type--${type.toLowerCase()}`}>
                    {type}
                  </li>)}
              </ul>
            </div>
            <div className="pokemonCard__abilities">
              <ul className="pokemon__abilities__list">
                {this.props.abilities.map((ability, index) =>
                  <li key={index} className={`pokemon__ability ability--${ability.toLowerCase()}`}>
                    {ability}
                  </li>)}
              </ul>
            </div>
            <div className="pokemonCard__evolution">
              {/* {evolution} */}
            </div>

          </div>
        </div>
      </div>
     );
   }
 }

 export default PokeCard;
