import React from 'react';
//import './TarjetaFrutaV2.css';
import Style from "./TarjetaFrutaV2.module.css";

// Componente clase
class TarjetaFrutaV2 extends React.Component {
    state = {
        cantidad: 0,
        price: this.props.price ? this.props.price : 10
    }

    add = () => {
        this.setState({cantidad: this.state.cantidad + 1});
    }

    remove = () => {
        this.setState({cantidad: this.state.cantidad - 1});
    }

    clean = () => {
        this.setState({cantidad: 0});
    }

    render() {        
        const hasItems = this.state.cantidad > 0
        const classes = `${Style.card} ${hasItems ? Style["card-Active"]: ''}` 
        return (
            <div className={classes}>
                <h3>{this.props.name}</h3>
                <div>Cantidad: { this.state.cantidad } </div>
                <button onClick={this.add}>+</button>
                <button onClick={this.remove}>-</button>
                <button onClick={this.clean}>Limpiar</button>
                <hr />
                <p>$ {this.state.price}</p>
                <p>
                    Total: $ {this.state.price * this.state.cantidad}
                </p>
            </div>
        )
    }
}

export default TarjetaFrutaV2