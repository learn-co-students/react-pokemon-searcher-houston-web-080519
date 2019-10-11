import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  // Good form to let the UI load then call the fetch actions
  componentDidMount() {
    this.fetchPokemons()
  }

  fetchPokemons = () => {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json() )
    .then(pokemons => this.setState({
      pokemons
    }))
  }

  addPokemon = (newPokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, newPokemon]
    })
  }

  handleSearchChange = (e, {value}) => {
    this.setState({
      search: value
    })
  }

  alteredPokemonList = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 50)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.alteredPokemonList()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
