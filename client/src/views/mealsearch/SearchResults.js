
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const style = {
    padding: '0px',
    margin: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
    color: 'black',
    fontFamily: 'arial',
    fontSize: '16pt',
}
const ulStyle = {
  listStyleType: 'none',
  padding: '0',
}
const liStyle = {
  backgroundColor: 'whitesmoke',
  margin: '10px',
  padding: '10px',
  textAlign: 'center',
}

export default class SearchResults extends Component {

    render() {
      return (
        <div style = {style}>
          <ul style = {ulStyle}>
            {
              this.props.items.map(item => {
                return <Link to = {{pathname: '/meals/', search: item}} key = {item}>
                <li
                  key = {item}
                  style = {liStyle}>{item}</li></Link>
              })
            }
          </ul>
        </div>
      )
    }
  }
/*
  var List = React.createClass({
    render: function(){
      return (
        <ul className="list-group">
        {
          this.props.items.map(function(item) {
            return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          })
         }
        </ul>
      )  
    }
  });*/