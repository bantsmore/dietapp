// Body component
// React imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// Router imports
import { Route, Link } from 'react-router-dom'
// Redux imports
import { actionCreators } from '../../dietAppRedux'
// Component imports
import MealSearch from './MealSearch'
import Meal from './Meal'
import LandingPage from './LandingPage'

const style = {
  padding: 0,
  color: 'lime',
}

class Body extends Component {
  constructor(){
    super();
    this.selectViewState = this.selectViewState.bind(this)
    this.onClickButton = this.onClickButton.bind(this)
  }
  state = {}

  componentWillMount() {
    const {store} = this.props

    const {mountState} = store.getState()
    this.setState({mountState})

    this.unsubscribe = store.subscribe(() => {
      const {mountState} = store.getState()
      this.setState({mountState})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onClickButton(e) {
    console.log(e.target.value)
    const {store} = this.props
    store.dispatch(actionCreators.newview(e.target.value))
  }

  selectViewState(store, data) {
    switch(store.getState().view){
      case 'landing':
        return(<LandingPage
          onClick = {this.onClickButton}
          onClick = {this.onClickButton} />)
      case 'meal':
        return(<Meal
          mealData={data.meals[Math.floor((Math.random() * 5))]} />)
      case 'mealSearch':
        return(<MealSearch 
          initialItems = {data.meals.map(a => { return a.mealName })}
          store = {store} />)
    }
  }

  render() {
    const {store} = this.props
    const data = store.getState();
    return (
      <div style={style}>
        <Route exact path = '/' render = {() =>
              <LandingPage onClick = {this.onClickButton} />} />
        <Route path = '/meals' render = {() =>
              <Meal mealData={data.meals[Math.floor((Math.random() * 5))]} />} />
        <Route path = '/mealsearch' render = {() =>
              <MealSearch 
                initialItems = {data.meals.map(a => { return a.mealName })}
                store = {store} />} />
      </div>
    )
  }
}

Body.propTypes = {
  store: PropTypes.object.isRequired
}

export default Body