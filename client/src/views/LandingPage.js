
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
            <Link to = 'mealsearch'>
                <button 
                    name = {'mealSearch'}
                    value = {'mealSearch'}
                    onClick = {this.props.onClick} 
                    style = {styleButton}>
                    Meal search
                </button>
            </Link>
            <Link to = 'meals'>
                <button
                    name = {'meal'}
                    value = {'meal'}
                    onClick = {this.props.onClick}
                    style = {styleButton}>
                    Meal
                </button>
            </Link>
        </div>
      )
    }
  }