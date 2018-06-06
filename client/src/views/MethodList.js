// Ingredient list component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Method from './Method.js'

const styles = {
  methodList: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '3px',
    paddingRight: '20px',
  },
}

const getMethodList = function(props){
  return(
    <div>
      {props.method.map((a, i) => <Method key={i} {...a}/>)}
      </div>
  );
  };

export default class IngredientList extends Component {
    render() {
      var liveList = getMethodList(this.props)
      return (
        <div style={styles.methodList}>
          {liveList}
        </div>
      )
    }
  }