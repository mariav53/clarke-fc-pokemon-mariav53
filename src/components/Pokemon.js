import React, { Component } from 'react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData:{
        id: '',
        name: '',
        species: '',
        type: '',
        height: '',
        weight: '',
        types: [],
        abilities: [],
      }
    }
  }

  pokemonById (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(results => {
      this.setState({
        pokemonData: results
      });
       console.log(results);
    })
  }

  async componentDidMount() {
    const {match : {params}} = this.props //paso id por parametro del router
    this.pokemonById(params.id)
  }

  render () {
    const {match : {params}} = this.props
    const {pokemonData} =this.state
    return(
      <div className="pokemonInfo">
        <div className ="pokemonInfo__container">
          <div className="pokemonInfo__img">
            <img className="pokemonInfo__image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`} alt= {params.name} />

          </div>
          <div className="pokemonInfo__details">
            <p className="pokemonInfo__name">{this.state.pokemonData.name.toUpperCase()}</p>
            <table>
            <tbody>
              <tr>
                <td><span className="pre-text">ID:</span></td>
                <td className="pokemonInfo__id"> #{this.state.pokemonData.id.toLocaleString('en-US', {minimumIntegerDigits: 2})}</td>
              </tr>
              <tr>
                <td><span className="pre-text">Altura: </span></td>
                <td className="pokemonInfo__height">{this.state.pokemonData.height/10} m</td>
              </tr>
              <tr>
                <td><span className="pre-text">Peso: </span></td>
                <td className="pokemonInfo__weight">{this.state.pokemonData.weight/10} kg</td>
              </tr>
              <tr>
                <td><span className="pre-text">Tipo: </span></td>
                <td>
                  <ul className="pokemonInfo__types__list">
                  {pokemonData.types.map((t, index) =>
                      <li  key={index} className={`pokemon__type type--${t.type.name.toLowerCase()}`}>
                        {t.type.name}
                      </li>
                    )}
                  </ul>
                  </td>
              </tr>
              <tr>
                <td><span className="pre-text">Habilidades: </span></td>
                <td>
                  <ul className="pokemonInfo__abilities__list">
                  {pokemonData.abilities.map((a, index) =>
                      <li key={index} className="pokemon__ability">
                        {a.ability.name}
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 export default Pokemon;
