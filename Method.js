// Ingredient component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MethodDescription from './MethodDescription'

const styles = {
  method: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#2b8087',
    borderWidth: '3px',
    borderRadius: '10px',
    margin: '8px',
    backgroundColor: '#84c5cc',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    height: '40px'
  },
}

export default class Ingredient extends Component {
    render() {
      
      return (
        
        <div style={styles.method}>
            <MethodDescription description={this.props.description} />
        </div>
      )
    }
  }