import React, { Component } from 'react';

class Search extends Component{
render(){
	return(
		<div className="search">
      <div className ="search_container">
				<input type="text" name="search" placeholder="Encuentra a tu Pokemon favorito" id="search" onChange={this.props.pokemonSearch} />
      </div>
		</div>
		);
	}
}
export default Search;
