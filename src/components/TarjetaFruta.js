import React from 'react'

// Componente funcional - hooks
const TarjetaFruta = (props) => {
    console.log(props)

    return (
        <div>
            <h3>{props.name}</h3>
            <hr />
            <p>$ {props.price}</p>
        </div>
    )
}

export default TarjetaFruta