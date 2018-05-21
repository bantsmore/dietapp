// header component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Meal from './Meal.js'
import MealSearch from './MealSearch'

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
    backgroundColor: 'blue',
    //height: '400px',
  },
  ingredientsList: {
    backgroundColor: 'white',
  },
  ingredient: {
    backgroundColor: 'white',
    color: 'black',
  },
}         

const penneCarbonara= {
          "ingredientCollectionId": "Penne Carbonara",
          "NutritionDatabaseId": "470612",
          "ingredients": [
            {"ingredientName": "pancetta", "amount": "30g"},
            {"ingredientName": "double cream", "amount": "40ml"},
            {"ingredientName": "penne", "amount": "200g"},
            {"ingredientName": "parmesan", "amount": "50g"},
            {"ingredientName": "egg", "amount": "1"},
            {"ingredientName": "onion", "amount": "50g"}
          ],
          "method":[
            {"description": "Fry onion and pancetta in hot pan until golden. Begin to boil pasta until al dente."},
            {"description": "Once al dente, drain almost all the water and mix pasta with pancetta & onion."},
            {"description": "Add double cream and egg and mix in before adding parmasan to taste."}
          ],
          "image":{
            "src":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
            "href":"https://images.media-allrecipes.com/userphotos/560x315/2603977.jpg",
            "tag":"Penne Carbonara"}
      }

export default class Body extends Component {

    render() {
      return (
        <div style={styles.main}>
        <MealSearch />
        </div>
        //<Meal mealName={'Penne Carbonara'} mealData={penneCarbonara} />
      )
    }
  }