import React, { Component } from 'react'

class LimiteErrores extends Component {
    state = {
        tieneError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            tieneError: true
        })
    }

    render() {
        if (this.state.tieneError) {
            return (
                <div>
                    Wops! Algo Fallo con Exito.
                </div>
            )
        }

        return (
            this.props.children
        )
    }
}

export default LimiteErrores