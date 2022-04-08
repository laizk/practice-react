import React, { Component } from 'react'

/*
The example below has a button that changes the favorite color to blue, 
but since the getDerivedStateFromProps() method is called, 
which updates the state with the color from the favcol attribute, 
the favorite color is still rendered as yellow:
*/

class ComponentUpdate extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         favoritecolor: 'red'
      }
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol}
    }

    changeColorHandler = () => {
        this.setState({
            favoritecolor: 'blue'
        });
    }

    render() {
        const {favoritecolor} = this.state;
        
        return (
        <div>
            <h1>My Favorite Color is {favoritecolor}</h1>
            <button type='button' onClick={this.changeColorHandler}>Change color</button>
        </div>
        )
    }
}

export default ComponentUpdate