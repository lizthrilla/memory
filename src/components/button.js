import React, { Component } from 'react'
import styles from './button.scss'

class Button extends Component {

  static propTypes = {
    handleClick: React.PropTypes.func
  }

  render () {
    return <button type='reset' name='reset'
      className={styles}
      onClick={() => this.props.handleClick()}> Rerun the Fun? </button>
  }
}

export default Button
