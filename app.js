// React imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// redux setup
import { createStore } from 'redux'
import { reducer } from './dietAppRedux'
const store = createStore(reducer)

// Top level components
import Header from './header.js'
import Body from './body.js'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header store = {store} headerString = {'Title'}/>
      <Body store = {store} />
      </div>
    )
  }
}