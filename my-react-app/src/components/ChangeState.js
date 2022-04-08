import React, { Component } from 'react'

class ChangeState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964,
        isRed: false
      }
    }

    changeColorHander = () => {
        this.setState({color: "blue"});
    }

    toggleColorHandler = () => {
        const {isRed} = this.state
        // console.log(props)

        this.setState({
            color: (isRed ? 'red' : 'blue'),
            isRed: (isRed ? false : true)
        });
    }

    render() {
        const {brand, model, color, year} = this.state

        //console.log({brand, model, color, year, isRed});

        return (
        <div>
            <h1>My {brand}</h1>
            <p>
                It is a {color} {model} from {year}
            </p>
            <button
                type="button"
                onClick={this.changeColorHander}
                >Change color</button>
            <button
                type="button"
                onClick={this.toggleColorHandler}
                >Toggle color</button>
        </div>
        )
    }
}

export default ChangeState