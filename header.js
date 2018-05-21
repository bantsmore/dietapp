// header component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  header: {
    paddingTop: '5px',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'arial',
    backgroundColor: '#84c5cc',
    height: '40px',
    fontSize: '30px',
  },
  colors: {
    a: '#84c5cc',
    b: '#61a9b0',
    c: '#4e989f',
    d: '#3b8b92',
    e: '#2b8087',
  }
}

export default class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        {this.props.headerString}
      </div>
    )
  }
}