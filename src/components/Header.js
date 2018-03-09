import React, { Component } from 'react';
import logo from '../assets/poke_logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          {/* <img src={logo} /> */}
          <h1>POKEDEX</h1>
        </div>
        <div className="header_fringe"></div>
      </div>
    );
  }
}

export default Header;
