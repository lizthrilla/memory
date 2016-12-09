import React, { Component } from 'react'
import styles from './CardItem.scss'

class CardItem extends Component {

  render ( {
    return <td
      className={[styles.root, styles.down].join(' ')}>
      <img src={this.props.image} />
    </td>
  }
  )

}
export default CardItem

// 'https://s-media-cache-ak0.pinimg.com/236x/42/a9/bf/42a9bf4972b7189c596647813c44eeef.jpg'
