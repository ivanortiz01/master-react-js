import React, { Component } from 'react'

class Hijo extends Component {

    click = () => {
        this.props.onSaluda('123123')
    }

    render() {
        return (
            <div className="box blue">
                <h2>Hijo</h2>

                {this.props.saluda && <label>Hola Tu!!</label>}

                <br />

                <button
                    onClick={this.click}
                >Saluda</button>

                {this.props.children}
            </div>
        )
    }
}

export default Hijo