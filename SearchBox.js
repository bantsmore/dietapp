
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const style = {
    marginTop: '0px',
    marginBottom: '13px',
    backgroundColor: 'blue',
    width: '100%',
    height: '40px',
    position: 'relative',
}
const inputStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '100%',
    height: '40pt',
    fontSize: '20pt',
    textAlign: 'center',
}

export default class SearchBox extends Component {

    render() {
      return (
        <div style = {style}>
            <input
                type = "text"
                name = "searchBox"
                style = {inputStyle}
                value = {this.props.searchBoxText}
                onChange = {this.props.onChange} />
        </div>
      )
    }
  }