import React, { Component } from 'react'
import CardItem from './CardItem'
import styles from './app.scss'

class App extends Component {

  render () {
    return <div className={styles}>
      <h1>Memory!</h1>
      <table>
        <tbody>
          <tr>
            <CardItem />
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
// https://gist.github.com/ambethia/e9bd1760f78fe36dcd7e03a1c2a4edc1
