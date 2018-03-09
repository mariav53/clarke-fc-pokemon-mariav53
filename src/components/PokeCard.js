import React, { Component } from 'react';

class PokeCard extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PokeCard;
