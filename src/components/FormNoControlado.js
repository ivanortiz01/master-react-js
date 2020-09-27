import React, { Component/*, Fragment*/ } from 'react'

class FormNoControlado extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const nombre = event.target[0].value
        const email = event.target[1].value

        // Manejo de datos
        this.props.onSend({ nombre, email })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="nombre">nombre</label>
                    <input
                        type="text"
                        placeholder='Nombre'
                        id="nombre"
                    />
                </p>
                <input
                    type="text"
                    placeholder='Email'
                />
                <button>
                    Enviar
                </button>
            </form>
        )
    }
}

export default FormNoControlado