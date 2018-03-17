import React, { Component } from 'react';
import Pokemon from './Pokemon';

import { Link } from 'react-router-dom';

class PokeCard extends Component {
  render () {
    return (
      <div className="pokemonCard">
        <div className ="pokemonCard__container">
          <div className="pokemonCard__img">
            <Link to={`Pokemon/${this.props.id}`}> {/*me lleva a la tarjeta del pokemon segun su id*/}
              <img className="pokemon__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt= {this.props.name} />
            </Link>
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
          </div>
        </div>
      </div>
     );
   }
 }

 export default PokeCard;
