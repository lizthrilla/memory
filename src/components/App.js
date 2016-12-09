import React, { Component } from 'react'
import CardItem from './CardItem'
import styles from './App.scss'

import images from '../images.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false
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
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        // call back function that happens after
        // react is done updating the state.
        if (this.state.matched.length === images.length) {
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
      <h1>{this.state.won ? 'YOU WIN' : 'Memory!'}</h1>
      <table>
        <tbody>
          <tr>
            <CardItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <CardItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <CardItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <CardItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
// https://gist.github.com/ambethia/e9bd1760f78fe36dcd7e03a1c2a4edc1
