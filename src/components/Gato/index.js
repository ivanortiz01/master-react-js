import React from 'react'

class Gato extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Gato</h1>
                <pre>
                    { JSON.stringify(this.props, null, 4)}
                </pre>
            </div>
        )
    }
}

export default Gato