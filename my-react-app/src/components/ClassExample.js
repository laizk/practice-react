import React, { Component } from 'react'

class ClassExample extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color: 'blue',
       type: props.type
    };
  }

  render() {
    return (
      <div>
        <p>I am color {this.state.color}!</p>
        <p>I am type {this.state.type}!</p>      
      </div>
    )
  }
}

export default ClassExample