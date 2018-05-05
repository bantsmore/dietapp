// Meal component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IngredientList from './ingredientList.js'

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

export default class Body extends Component {
    render() {
      return (
        <div style={styles.main}>
        <IngredientList/>
        </div>
      )
    }
  }