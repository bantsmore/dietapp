
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

const style = {
    padding: 0,
    position: 'relative',
}

export default class MealSearch extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchBoxText: '',
            items: [],
        }
    }

    componentWillMount() {
        this.setState({
            items: this.props.initialItems
        })
    }

    handleChange(e) {
        this.setState({
            searchBoxText: e.target.value
        });
        var updatedList = this.props.initialItems;
        updatedList = updatedList.filter((item) => {
        return item.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
    }

    render() {
      return (
        <div style = {style}>
        <SearchBox onChange = {this.handleChange}
            searchBoxText = {this.state.searchBoxText} />
        <SearchResults items = {this.state.items} />
      </div>
      )
    }
  }