import React, { Component } from 'react';


class PokeInfo extends Component {
  render () {
    return(
      <div className="pokemonCard">
        <div className ="pokemonCard__container">
          <div className="pokemonCard__img">
            <img className="pokemon__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pid}.png`} alt= {this.props.pname} />
          </div>
          <div className="pokemonCard__info">
            <p className="pokemon__name"> {this.props.pname.toUpperCase()}</p>
            <p className="pokemon__id"> #{this.props.pid.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
            <div className="pokemonCard__types">
              {/* <ul className="pokemon__types__list">
                {this.props.ptypes.map((type, index) =>
                  <li key={index} className={`pokemon__type type--${type.toLowerCase()}`}>
                {type}
                  </li>)}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
     );
  }
 }

 export default PokeInfo;
