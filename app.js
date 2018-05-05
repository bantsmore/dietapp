// app component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Body from './body.js'

const styles = {
  app: {
    padding: 0,
    textAlign: 'center',
    color: 'blue',
    border: '5px solid blue',
  },
  header: {
    padding: 0,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'green',
    height: '50px',
  },
  main: {
    padding: 0,
    color: 'lime',
    backgroundColor: 'red',
    height: '400px',
  },
  ingredientsList: {
    backgroundColor: 'white',
  },
  ingredient: {
    backgroundColor: 'white',
    color: 'black',
  },
}

export default class App extends Component {
  render() {
    return (
      <div style={styles.app}>
      <Header/>
      <Body/>
      </div>
    )
  }
}