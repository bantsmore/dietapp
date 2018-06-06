// header component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BackButton from './BackButton'
import { actionCreators } from '../../dietAppRedux';

const style = {
  paddingTop: '5px',
  color: 'black',
  fontFamily: 'arial',
  backgroundColor: '#84c5cc',
  height: '40px',
  width: '100%',
  fontSize: '30px',
  position: 'relative',
  textAlign: 'center',
  }
  const titleStyle = {
    color: 'black',
    textAlign: 'center',
    width: '100%',
  }
const colors = {
    a: '#84c5cc',
    b: '#61a9b0',
    c: '#4e989f',
    d: '#3b8b92',
    e: '#2b8087',
  }

export default class Header extends Component {
  constructor() {
    super();

    this.clickBackButton = this.clickBackButton.bind(this);
  }

  clickBackButton() {
    const {store} = this.props
    store.dispatch(actionCreators.add('textextext'))
    console.log('time to go back')
    console.log(store.getState())
  }

  render() {
    return (
      <div style={style}>
        <BackButton onClick = {this.clickBackButton} />
        <span style={titleStyle} >
          {this.props.headerString}
        </span>
      </div>
    )
  }
}