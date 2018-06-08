// header component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const style = {
    left: '50px',
    color: 'black',
    fontFamily: 'arial',
    backgroundColor: '#3b8b92',
    height: '40px',
    width: '40px',
    borderRadius: '8px',
    borderColor: '#84c5cc',
    borderWidth: '2px',
    position: 'absolute',
    top: '1px',
}
const imgStyle = {
    height: '30px',
    width: '30px',
    margin: '0px', 
    position: 'relative',
    top: '0px',
    left: '-2px',
}

export default class Header extends Component {
  render() {
    return (
      <Link to = '/'>
        <button style = {style} onClick = {this.props.onClick} >
          <img src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2000px-Back_Arrow.svg.png'}
              style = {imgStyle} />
        </button>
      </Link>
    )
  }
}