// Ingredient list component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Ingredient from './Ingredient.js'

const styles = {
  ingredientsList: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '3px',
  },
}

const getIngredientsList = function(props){
  return(
    <div>
      {props.ingredients.map((a, i) => <Ingredient key={i} {...a}/>)}
      </div>
  );
  };

export default class IngredientList extends Component {
    render() {
      var liveList = getIngredientsList(this.props)
      return (
        <div style={styles.ingredientsList}>
          {liveList}
        </div>
      )
    }
  }