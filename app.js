// app component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Body from './body.js'

export default class App extends Component {
  render() {
    return (
      <div>
      <Header headerString = {'Title'}/>
      <Body/>
      </div>
    )
  }
}