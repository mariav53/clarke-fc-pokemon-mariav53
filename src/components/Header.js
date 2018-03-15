import React, { Component } from 'react';
import logo from '../assets/poke_logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <img src={logo} alt="Pokedex" title="Pokedex logo" />
        </div>
        <div className="header_fringe"></div>
      </header>
    );
  }
}
export default Header;
