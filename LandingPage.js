
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

    handleClickB1(e) {
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
            <button 
                name = {'mealSearch'}
                value = {'mealSearch'}
                onClick = {this.props.onClick} 
                style = {styleButton}>
                Meal search
            </button>
            <button
                name = {'meal'}
                value = {'meal'}
                onClick = {this.props.onClick}
                style = {styleButton}>
                Meal
            </button>
        </div>
      )
    }
  }