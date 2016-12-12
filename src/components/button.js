import React, { Component } from 'react'
import styles from './button.scss'

class Button extends Component {
  //
  // constructor () {
  //   super()
  //   this.state = {
  //     won: false
  //   }
  // }
  render () {
    return <button type='reset' name='reset'
      className={styles}
      onClick={() => (this.initialState)}>Rerun the Fun?</button>
  }
}
export default Button
