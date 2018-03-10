import React, { Component } from 'react';

class PokeCard extends Component {

  render() {

    const {name,id} = this.props;
    return (
      <div className="pokemonCard">
	      <div className ="pokemonCard__container">
					<div className="pokemonCard__img">
						{/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={name} title={name} /> */}
            <img src={this.props.image} alt={name} title={name} />
					</div>
					<div className="pokemonCard__info">
						<p className="pokemon__name"> {this.props.name}</p>
						<p className="pokemon__id"> #{this.props.id}</p>
						<div className="pokemonCard__types">
              <p>{this.props.types.join(' | ')}</p>

						</div>
					</div>
	      </div>
			</div>
    );
  }
}

export default PokeCard;
