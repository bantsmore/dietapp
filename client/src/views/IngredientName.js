// Ingredient component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  ingredientName: {
    justifyContent: 'left',
    color: 'black',
    fontFamily: 'arial',
    fontSize: '15pt',
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '10px',
  },
}

export default class IngredientName extends Component {
    render() {
      return (
        <div style={styles.ingredientName}>
            {this.props.ingredientName}
        </div>
      )
    }
  }