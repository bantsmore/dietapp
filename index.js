// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
      <Header/>
      <Body/>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
      Witty Title
      </div>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <div style={styles.main}>
      <IngredientList/>
      </div>
    )
  }
}

class IngredientList extends Component {
  render() {
    return (
      <div style={styles.ingredientsList}>
        <Ingredient/>
        <Ingredient/>
      </div>
    )
  }
}

class Ingredient extends Component {
  render() {
    return (
      <div style={styles.ingredient}>
      mushroom
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)