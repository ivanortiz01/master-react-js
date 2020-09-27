import React, { Component, Fragment } from 'react'

const user1 = {
    name: 'Pedro Perez',
    age: 28,
    country: 'Mexico'
}

function getUser(user) {
    return `
        Hola react: ${user.name}. 
        Tengo ${user.age} años y el doble de mi edad es ${user.age * 2}.
        Soy originario de ${user.country}`
}



const Computacion = () => (
    <Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </Fragment>
)

const Ropa = () => (
    <Fragment>
        <li>Playera</li>
        <li>Jeans</li>
    </Fragment>
)

// Solo  para componentes funcionales
const FancyInput = React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} />
    </div>
))

class Others extends Component {
    state = {
        name: 'testes as',
    }

    render() {
        const { name } = this.state

        return (
            <div>
                <hr />

                <h1>{getUser(user1)}</h1>

                <hr />

                <h1>Nombre: {name}</h1>
                <ul>
                    <Computacion></Computacion>
                    <Ropa></Ropa>
                </ul>

                <hr />

                <FancyInput ref={this.entrada}></FancyInput>
            </div>
        )
    }
}

export default Others