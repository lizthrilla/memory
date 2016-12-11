import React, { Component } from 'react'
import CardItem from './CardItem'
import styles from './App.scss'

import images from '../images.json'
import shuffle from 'array-shuffle'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false,
      images: shuffle(images)
    }
  }

  // choose(card) function:
  //   If the number of picks is 2:
  //     Do nothing (stop the player from choosing 3 cards).
  //   Store card index in picks.
  //   If the number of picks is now 2:
  //     check()

  choose (card) {
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return } // do nothing, bail out
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      // Call back function that happens after
      // React is done updating the state.
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  // check() function:
  //   If picks[0] is equal to picks[1]:
  //     Add the cards to matches.
  //     If all matches found:
  //       Game over.
  //   Reset picks to [] after a short delay.

  check () {
    const picks = this.state.picks
    if (this.state.images[picks[0]] === this.state.images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        // call back function that happens after
        // react is done updating the state.
        if (this.state.matched.length === this.state.images.length) {
          // show modal
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  // For each card in faces:
 // If picks inclues card:
 //   Show card face.
 // Else:
 //   Show card back.
  render () {
    const picks = this.state.picks
    const matched = this.state.matched
    return <div>
      <h1>{this.state.won ? 'YOU WIN' : 'MEMORY'}</h1>
      <h2> Find and Match the Kittens </h2>
      <table>
        <tbody>
          <tr>
            <CardItem image={this.state.images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <CardItem image={this.state.images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <CardItem image={this.state.images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <CardItem image={this.state.images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <CardItem image={this.state.images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <CardItem image={this.state.images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <CardItem image={this.state.images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <CardItem image={this.state.images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
          <tr>
            <CardItem image={this.state.images[8]} isUp={picks.includes(8) || matched.includes(8)} handleClick={() => this.choose(8)} />
            <CardItem image={this.state.images[9]} isUp={picks.includes(9) || matched.includes(9)} handleClick={() => this.choose(9)} />
            <CardItem image={this.state.images[10]} isUp={picks.includes(10) || matched.includes(10)} handleClick={() => this.choose(10)} />
            <CardItem image={this.state.images[11]} isUp={picks.includes(11) || matched.includes(11)} handleClick={() => this.choose(11)} />
          </tr>
          <tr>
            <CardItem image={this.state.images[12]} isUp={picks.includes(12) || matched.includes(12)} handleClick={() => this.choose(12)} />
            <CardItem image={this.state.images[13]} isUp={picks.includes(13) || matched.includes(13)} handleClick={() => this.choose(13)} />
            <CardItem image={this.state.images[14]} isUp={picks.includes(14) || matched.includes(14)} handleClick={() => this.choose(14)} />
            <CardItem image={this.state.images[15]} isUp={picks.includes(15) || matched.includes(15)} handleClick={() => this.choose(15)} />
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
// https://gist.github.com/ambethia/e9bd1760f78fe36dcd7e03a1c2a4edc1
