// Ingredient component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  ingredientAmount: {
    justifyContent: 'right',
    color: 'grey',
    fontFamily: 'arial',
    fontSize: '10pt',
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
    marginRight: '10px',
  },
}

export default class IngredientName extends Component {
    render() {
      return (
        <div style={styles.ingredientAmount}>
            {this.props.ingredientAmount}
        </div>
      )
    }
  }