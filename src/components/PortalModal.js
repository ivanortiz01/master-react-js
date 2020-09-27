import React, { Component } from 'react'
import ReactDom from 'react-dom';

class PortalModal extends Component {
    render() {
        console.log(this.props.visible)

        if (!this.props.visible) {
            return null
        }

        const style = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            background: '#667eea',
            opacity: '0.95',
            color: '#fff'
        }

        return ReactDom.createPortal((
            <div style={style}>
                {this.props.children}
            </div>
        ),
            document.getElementById("modal-root"))
    }
}

export default PortalModal