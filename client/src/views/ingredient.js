// Ingredient component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IngredientName from './IngredientName'
import IngredientAmount from './IngredientAmount'

const styles = {
  ingredient: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#2b8087',
    borderWidth: '3px',
    borderRadius: '10px',
    margin: '8px',
    backgroundColor: '#84c5cc',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
  },
}

export default class Ingredient extends Component {
    render() {
      
      return (
        
        <div style={styles.ingredient}>
          <IngredientName ingredientName={this.props.ingredientName} />
          <IngredientAmount ingredientAmount={this.props.amount} />
        </div>
      )
    }
  }