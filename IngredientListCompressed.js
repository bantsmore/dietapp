// Ingredient list component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const style = {
    backgroundColor: '#2b8087',
    color: 'white',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    padding: '1px',
    fontFamily: 'arial',
    fontSize: '12pt',
    fontStyle: 'italic',
    borderWidth: '3px',
    borderColor: '#2b8087',
    borderStyle: 'solid'
}

const stringList = function(input){
  var output = input.map(a => {return[a.ingredientName, ', ']})
  return(
    [output, '...']
  );
};



export default class IngredientListCompressed extends Component {
    render(result = stringList(this.props.ingredients)) {
      return (
        <div style={style} onClick={this.props.onClick}>
        {result}
        </div>
      )
    }
  }