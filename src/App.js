import React, { Component } from 'react'
import TarjetaFrutaV2 from './components/TarjetaFrutaV2'
import TarjetaFruta from './components/TarjetaFruta'
import Contador from './components/Contador'
import Gato from './components/Gato'
import Iterator from './components/Iterator'
import Entrada from './components/Entrada'
import Graficas from './components/Graficas'
import InputNoControlado from './components/InputNoControlado'
import FormNoControlado from './components/FormNoControlado'
import InputControlado from './components/InputControlado'
import ApiCall from './components/ApiCall'
import MovieSearch from './components/MovieSearch'
import Hijo from './components/Hijo'
import Profile from './components/Profile'
import Boton from './components/Boton'
import LimiteErrores from './components/LimiteErrores'
import Others from './components/Others'
import Unicorn from './components/Unicorn'
import Modal from './components/Modal'
import HooksLearn from './components/hooks/HooksLearn'
import './global.css'

var frutaExotica = "Kiwi"

class App extends Component {
    state = {
        name: '',
        otraprop: "prop",
        text: "",
        email: '',
        visible: false,
        tech: 'Vue',
        techs: [],
        active: false,
        users: [],
        cont: 0,
        cargando: true
    }

    otrosDatos = {
        raza: "tropical",
        peleasNocturas: 300
    };

    handler = (e) => {
        this.setState({
            text: e.target.value,
            event: e.type
        })
    }

    manejador = (name) => {
        this.setState({ name: name })
    }

    entrada = React.createRef()

    send = (data) => {
        console.log(data)
    }

    actualizar = (name, text) => {
        this.setState({
            [name]: text
        })
    }

    handleChange = (event) => {
        this.setState({
            tech: event.target.value
        })
    }

    handleMultiChange = (event) => {
        const techs = Array.from(event.target.selectedOptions, (option) => option.value)

        this.setState({
            techs: techs
        })
    }

    handleCheckboxChange = (event) => {
        this.setState({
            active: event.target.checked
        })
    }

    render() {
        return (
            <div className="box red">
                <hr />

                <HooksLearn />

                <hr />

                <Others />

                <hr />
                
                <Modal />

                <hr />
                <MovieSearch />

                <hr />
                <ApiCall />

                <hr />
                <TarjetaFruta name="Sandia" price={2.00} />
                <TarjetaFruta name="Naranja"></TarjetaFruta>
                <TarjetaFruta name={`${frutaExotica}`} />

                <hr />
                <TarjetaFrutaV2 name="Sandia" price={2.00} />
                <TarjetaFrutaV2 name="Naranja"></TarjetaFrutaV2>
                <TarjetaFrutaV2 name={`${frutaExotica}`} />

                <hr />
                <Contador></Contador>

                <hr />
                <Gato name="Gardfield" age="2 años" {...this.otrosDatos} {...this.state}></Gato>

                <hr />
                <input type="text" onChange={this.handler} onCopy={this.handler} onPaste={this.handler} />

                <h1>{this.state.text}</h1>

                <h2>
                    {this.state.event}
                </h2>

                <Hijo
                    onSaluda={this.manejador}
                    saluda
                >
                    <h3>Esto es un html hijo</h3>
                </Hijo>

                <hr />
                <Profile
                    // name='Ivan Ortiz'
                    bio='Blablablabl blabla'
                    email='ivanortiz@email.com'
                    age={12}></Profile>

                <h1>
                    Inputs No controlados Refs <Unicorn />
                </h1>
                <InputNoControlado onSend={this.send} />

                <hr />

                <h1>
                    Form No controlados Refs <Unicorn />
                </h1>
                <FormNoControlado onSend={this.send} />

                <hr />

                <h1>
                    Inputs controlados <Unicorn />
                </h1>

                <InputControlado onChange={this.actualizar} name="name" placeholder="nombre completo" />
                <InputControlado onChange={this.actualizar} name="email" placeholder="email" />

                <h2>Nombre: {this.state.name}</h2>
                <h2>Email: {this.state.email}</h2>

                <hr />

                <Graficas></Graficas>

                <hr />

                <form>
                    <label>Etiqueta Select: {this.state.tech}</label> <br />
                    <select value={this.state.tech} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />

                    <label>Etiqueta MultipleSelect:</label> <br />
                    <select value={this.state.techs} onChange={this.handleMultiChange} multiple>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <ul>
                        {this.state.techs.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>

                    <br />

                    <input
                        type="checkbox"
                        checked={this.state.active}
                        onChange={this.handleCheckboxChange} />
                    <label>{this.state.active ? "Seleccionado" : "No Seleccionado"}</label>
                </form>

                <hr />

                <Entrada></Entrada>

                <hr />

                <Iterator></Iterator>

                <hr />

                <LimiteErrores>
                    <Boton></Boton>
                </LimiteErrores>
            </div>
        )
    }

}

export default App;