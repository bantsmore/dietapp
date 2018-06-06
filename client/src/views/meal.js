// Meal component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MealImage from './MealImage'
import IngredientList from './IngredientList.js'
import MethodList from './MethodList.js'
import IngredientListCompressed from './IngredientListCompressed'

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
  constructor() {
    super();
    this.state = {
      view: 'mealView'
    }

    this.handleClick = this.handleClick.bind(this);

  }

    handleClick = function(e){
    this.setState({
      view: 'ingredientsView',
    })
    }

    render() {
      switch(this.state.view){
        case 'mealView':
          return (
            <div style={styles.main}>
            <MealImage src={this.props.mealData.image.src} />
            <IngredientListCompressed ingredients = {this.props.mealData.ingredients} onClick = {this.handleClick}/>
            <MethodList method = {this.props.mealData.method} />
            </div>);
        case 'ingredientsView':
            return (
              <div style={styles.main}>
              <MealImage src={this.props.mealData.image.src} />
              <IngredientList ingredients = {this.props.mealData.ingredients}/>
              </div>
            )
      }
    }
  }