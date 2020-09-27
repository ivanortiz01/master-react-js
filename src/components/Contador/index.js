import React from 'react'

class Contador extends React.Component {
    state = {
        clicks: 0,
        video: {
            title: 'Super video',
            likes: 0
        }
    }

    add = () => {
        this.setState((state, props) => ({
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.video.title}</h1>
                <button onClick={this.add}>
                    Likes: ({this.state.video.likes})
                </button>
            </div>
        )
    }
}

export default Contador