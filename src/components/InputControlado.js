import React, { Component/*, Fragment*/ } from 'react'

class InputControlado extends Component {
    state = {
        text: '',
        tieneError: false,
        color: '#e8e8e8'
    }

    actualizar = (event) => {
        const text = event.target.value
        
        let color = 'green'
        if (text.trim() === '') {
            color = '#e8e8e8'
        }
        if (text.trim() !== '' && text.length < 5) {
            color = 'red'
        }
        this.setState({ text, color })

        this.props.onChange(this.props.name, text)
    }

    render() {
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '5px',
            outline: 'none'
        }

        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.actualizar}
                    style={styles}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default InputControlado