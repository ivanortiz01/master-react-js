import React, { Component } from 'react'
import PortalModal from './PortalModal'

class Modal extends Component {
    state = {
        visible: false,
        cont: 0
    }

    mostrar = () => {
        this.setState({ visible: true })
    }

    cerrar = () => {
        this.setState({ visible: false })
    }

    render() {
        return (
            <div>
                <button onClick={this.mostrar}>
                    Mostrar Modal
                </button>

                <PortalModal visible={this.state.visible}>
                    <button onClick={this.cerrar}>
                        Cerrar
                    </button>
                    <br />
                    Hola desde un portal {this.state.cont}
                </PortalModal>
            </div>
        )
    }
}

export default Modal