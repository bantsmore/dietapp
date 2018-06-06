// header component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MealSearch from './MealSearch'
import Meal from './Meal'
import LandingPage from './LandingPage'

import { actionCreators } from '../../dietAppRedux'

const style = {
  padding: 0,
  color: 'lime',
}

export default class Body extends Component {
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
    console.log(store.getState().view)
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
          initialItems = {data.meals.map(a => { return a.mealName })} />)
    }
  }

  render() {
    const {store} = this.props
    const data = store.getState();
    return (<div style={style}>
      {this.selectViewState(store, data)}</div>
      /*<div style={style}>
      <MealSearch initialItems = {data.meals.map(a => { return a.mealName })} />
      </div>*/
      //<Meal mealName={'Penne Carbonara'} mealData={penneCarbonara} />
    )
  }
}