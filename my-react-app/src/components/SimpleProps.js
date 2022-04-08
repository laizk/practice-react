import React from 'react'

function SimpleProps(props) {
  console.log(props);    
  return (
    <div>I am color {props.color}!</div>
  )
}

export default SimpleProps