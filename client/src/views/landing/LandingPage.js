
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const style = {
    padding: 0,
    position: 'relative',
}

const styleButton = {
    width: '100px',
    height: '50px',
    margin: '20px',
    borderRadius: '10px',
    borderColor: 'grey'
}

export default class LandingPage extends Component {

    render() {
      return (
        <div style = {style}>
            <Link to = 'meals'>
                <button 
                    name = {'mealSearch'}
                    value = {'mealSearch'}
                    style = {styleButton}>
                    Meal search
                </button>
            </Link>
            <Link to = 'randmeal'>
                <button
                    name = {'Random Meal'}
                    value = {'Random Meal'}
                    style = {styleButton}>
                    Random Meal
                </button>
            </Link>
        </div>
      )
    }
  }