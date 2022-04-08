import React from 'react'

function Conditions() {
  const x = 11;    
  return (
    <h1>{
        (x) < 10 ? "Hello" : "Goodbye"
        }
    </h1>
  )
}

export default Conditions
