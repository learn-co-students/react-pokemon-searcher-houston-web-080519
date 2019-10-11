import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      pic: 'front'
    }
  }

  currentPicture = () => {
    if (this.state.pic === 'front'){
      return this.props.pokemon.sprites.front
    }
    else {
      return this.props.pokemon.sprites.back
    }
  }

  findHp = () => {
    let myStat = this.props.pokemon.stats.find(stat => stat.name === "hp")
    return myStat.value
  }

  // So if its set to front, switch it to back.  If its back, switch it to front.  This is when it is initially called such that if you 
  // refreshed with the pic set to back if would reset to front, notice how the () invokes the function!
  handle = () => {
    if (this.state.pic == 'front') {
      this.setState({pic: 'back'})
    }
    else {
      this.setState({pic: 'front'})
    }
  }



  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handle}>
            <img src={this.currentPicture()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
