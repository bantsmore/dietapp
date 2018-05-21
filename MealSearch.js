
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

const style = {
    padding: 0,
    color: 'lime',
    backgroundColor: 'blue',
    position: 'relative',
}

export default class MealSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchBoxText: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchBoxText: e.target.value
        })
    }

    render() {
      return (
        <div style = {style}>
        <SearchBox onChange = {this.handleChange}
            searchBoxText = {this.state.searchBoxText} />
        <SearchResults />
        </div>
      )
    }
  }