// Ingredient component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  description: {
    justifyContent: 'left',
    color: 'black',
    fontFamily: 'arial',
    fontSize: '10pt',
    display: 'flex',
    height: '40px',
    marginLeft: '10px',
    marginTop: '3px',
    marginBottom: '3px'
  },
}

export default class MethodDescription extends Component {
    render() {
      return (
        <div style={styles.description}>
            {this.props.description}
        </div>
      )
    }
  }