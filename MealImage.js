// Meal component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  image: {
      objectFit: 'cover',
      maxHeight: '300px',
      maxWidth: '100%',
      height: '400px',
      width: '100%'
  },
  container: {
      height: '200px',
      width: '100%',
      overflow: 'hidden'
  }
}

export default class MealImage extends Component {
    render() {
      return (
        <div style={styles.container}>
            <a href={this.props.href}>
                <img style={styles.image} src={this.props.src} />
            </a>
        </div>
      )
    }
  }