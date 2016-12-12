import React, { Component } from 'react'
import styles from './button.scss'
import images from '../images.json'
import shuffle from 'array-shuffle'

class Button extends Component {

  handleClick () {
    this.state = {
      matched: [],
      picks: [],
      won: false,
      images: shuffle(images)
    }
  }

  render () {
    return <button type='reset' name='reset'
      className={styles}
      onClick={this.handleClick()}> Rerun the Fun? </button>
  }
}

export default Button
