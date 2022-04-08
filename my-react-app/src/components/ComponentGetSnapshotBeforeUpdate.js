import React, { Component } from 'react'

class ComponentGetSnapshotBeforeUpdate extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         favoritecolor: 'red'
      }
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({favoritecolor: 'yellow'})
            },
            1000
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').InnerHTML = "Before the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate() {
        document.getElementById('div2').InnerHTML = "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        const {favoritecolor} = this.state;

        return (
        <div>
            <h1>My Favorite Color is {favoritecolor} </h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
        );
    }
}

export default ComponentGetSnapshotBeforeUpdate