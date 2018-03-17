import React, { Component } from 'react';
import Header from './Header';
import Pokemon from './Pokemon';
import PokeCard from './PokeCard';
import PokeList from './PokeList';

import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'>
          <Header />
        </Link>
        <main>
          <Switch>
            <Route exact path='/' component={ PokeList } /> {/*grid de pokemons*/}
            <Route path='/pokemon/:id' component={ Pokemon } />  {/*Detalles del pokemon*/}
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
