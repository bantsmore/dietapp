// React imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// router imports
//import { Route, Router } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const routerHistory = createBrowserHistory()

// redux setup
import { createStore } from 'redux'
import { reducer } from '../dietAppRedux'
import { Provider } from 'react-redux'
const store = createStore(reducer)

// Top level components
import Header from './views/Header'
import Body from './views/Body'

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div>
            <Route path = '/' 
              render = {() =>
              <Header store = {store} headerString = {'Diet App'} />} />

            <Route path = '/'
              render = {() =>
              <Body store = {store} />} />
          </div>
        </Router>
      </Provider>
    )
  }
}