import React, { Component } from 'react';

class Search extends Component{
render(){
	return(
		<div className="search">
      <div className ="search_container">
				<h2>Encuentra a tu Pokemon favorito</h2>
				<input type="text" name="search" placeholder="Buscar" id="search" onChange={this.props.pokemonSearch} />
      </div>
		</div>
		);
	}
}
export default Search;
