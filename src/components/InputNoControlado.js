import React, { Component/*, Fragment*/ } from 'react'

class InputNoControlado extends Component {
    nombre = React.createRef()
    email = React.createRef()

    handleClick = () => {
        const nombre = this.nombre.current.value
        const email = this.email.current.value

        // Manejo de datos
        this.props.onSend({ nombre, email })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.nombre}
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    ref={this.email}
                    placeholder='Email'
                />
                <button onClick={this.handleClick}>
                    Enviar
                </button>
            </div>
        )
    }
}

export default InputNoControlado