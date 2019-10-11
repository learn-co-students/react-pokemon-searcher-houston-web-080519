import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderEmAll = () => {
    return this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  }


  render() {
    return (
      <div>
      <Card.Group itemsPerRow={12}>
        {this.renderEmAll()}
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
