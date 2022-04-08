import React, { Component } from 'react'

class ComponentMount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favoritecolor: 'red'
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol};
    // }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({favoritecolor: 'blue'})
            },
            1000
        );
    }

    render() {
        return (
        <div>My Favorite Color is {this.state.favoritecolor}</div>
        )
    }
}

export default ComponentMount