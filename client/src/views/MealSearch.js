// Meal Search component
// import react
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Redux imports
import { actionCreators } from '../../dietAppRedux'
// import components
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
        this.onResultClick = this.onResultClick.bind(this);
        this.state = {
            searchBoxText: '',
            items: []
        }
    }
    
    componentWillMount() {
        const {store} = this.props
        const data = store.getState();
        const initialItems = data.meals.map(a => { return a.mealName })
        this.setState({
            items: initialItems
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

    onResultClick(item) {
        const {store} = this.props
        store.dispatch(actionCreators.changemeal(item))
        console.log(store.getState().activeMeal)
    }

    render() {
      return (
        <div style = {style}>
        <SearchBox onChange = {this.handleChange}
            searchBoxText = {this.state.searchBoxText} />
        <SearchResults
            items = {this.state.items}
            onClick = {this.onResultClick} />
      </div>
      )
    }
  }