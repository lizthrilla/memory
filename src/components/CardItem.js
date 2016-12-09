import React, { Component } from 'react'
import styles from './CardItem.scss'

class CardItem extends Component {

  render () {
    const upClass = this.props.isUp ? styles.up : styles.down
    return <td
      onClick={() => this.props.handleClick()}
      className={[styles.root, upClass].join(' ')}>
      <img src={this.props.image} />
    </td>
  }

}
export default CardItem
