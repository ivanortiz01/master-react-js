import React, { Component } from 'react'

class Boton extends Component {

    state = {
        dispararError: false
    }

    dispatchError = () => {
        this.setState({ dispararError: true })
    }

    render() {
        if (this.state.dispararError) {
            throw new Error("FALLO CON EXITO!!!!")
        }

        return (
            <button onClick={this.dispatchError}>
                Boton con Bug
            </button>
        )
    }
}

export default Boton