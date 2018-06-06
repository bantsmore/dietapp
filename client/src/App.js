// React imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// redux setup
import { createStore } from 'redux'
import { reducer } from '../dietAppRedux'
const store = createStore(reducer)

// Top level components
import Header from './views/Header'
import Body from './views/Body'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header store = {store} headerString = {'Diet App'} />
      <Body store = {store} />
      </div>
    )
  }
}