import React, { useState, useEffect, useLayoutEffect } from 'react'

const Header = (props) => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
        <header style={styles}>
            <h1>
                {props.title}
                <span
                    role='img'
                    aria-label='hook emoji'
                >
                    ⚓
                </span>
            </h1>
        </header>
    )
}

const UseState = () => {
    // [value, fun()]
    const [clicks, setClicks] = useState(0)

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    return (
        <div>
            <Header title="UseState" />
            <button onClick={addClicks}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

const UseStateWithBoolean = () => {
    // [value, fun()]
    const [isActive, setActive] = useState(false)

    const toogle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <Header title="UseStateWithBoolean" />
            <button onClick={toogle}>
                {isActive ? 'Desactivar' : 'Activar'}
            </button>
        </div>
    )
}

const UseStateWithObject = () => {
    // se recomienda tener un hook por cada propiedad
    const [state, setState] = useState({
        clicks: 0,
        title: ""
    })

    const merge = (nextState) => {
        setState({
            ...state,
            ...nextState
        })
    }

    const addClicks = () => {
        merge({
            clicks: state.clicks + 1
        })
    }

    const handleInput = (e) => {
        const title = e.target.value
        merge({
            title
        })
    }

    return (
        <div>
            <Header title="UseStateWithObject" />

            <input type="text" value={state.title} onChange={handleInput} />

            <h3>{state.title}</h3>

            <button onClick={addClicks}>
                Clicks {state.clicks}
            </button>
        </div>
    )
}

const UseStateWithMultipleStates = () => {
    const [clicks, setClicks] = useState(0)
    const [title, setTitle] = useState("")

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <Header title="UseStateWithMultipleStates" />

            <input type="text" value={title} onChange={handleInput} />

            <h3>{title}</h3>

            <button onClick={addClicks}>
                Clicks {clicks}
            </button>
        </div>
    )
}

const UseEffect = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    useEffect(() => {
        // componentDidMount
        // componentDidUpdate
        // console.log("get in useEffect: ", mouseX)

        window.addEventListener('mousemove', handleMove)

        // componentWillUnmount
        return () => {
            // console.log("return useEffect: ", mouseX)
            window.removeEventListener('mousemove', handleMove)
        }
    })

    return (
        <div>
            <Header title="UseEffect" />
            <h2>X: {mouseX} - Y: {mouseY}</h2>
        </div>
    )
}

const HandleUseEffect = () => {
    // [value, fun()]
    const [clicks, setClicks] = useState(0)
    const [emoji, setEmoji] = useState('🦁')

    useEffect(() => {
        //alert("UseEffect")
    }, [clicks])

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    const toogleEmoji = () => {
        const nextEmoji = emoji === '🦁' ? '🙊' : '🦁'
        setEmoji(nextEmoji)
    }

    return (
        <div>
            <Header title="HandleUseEffect" />
            <button onClick={addClicks}>
                Clicks ({clicks})
            </button>
            <button onClick={toogleEmoji}>
                Alternar Emoji
            </button>
            <h2>{emoji}</h2>
        </div>
    )
}

const HttpHookEffect = () => {
    // [value, fun()]
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users)
                setIsFetching(false)
            })
    }, [])

    return (
        <div>
            <Header title="HttpHookEffect" />
            { isFetching && <h2>Cargando...</h2>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// similar a useEffect
const UseLayoutEffect = () => {
    const [clicks, setClicks] = useState(0)

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    useEffect(() => {
        console.log("useEffect 1")
    }, [clicks])

    useLayoutEffect(() => {
        console.log("useLayoutEffect 1")
    }, [clicks])

    return (
        <div>
            <Header title="UseLayoutEffect" />
            <button onClick={addClicks}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

const HooksLearn = () => {
    return (
        <div>
            <UseState />
            <UseStateWithBoolean />
            <UseStateWithObject />
            <UseStateWithMultipleStates />
            <UseEffect />
            <HandleUseEffect />
            <HttpHookEffect />
            <UseLayoutEffect />
        </div>
    )
}

export default HooksLearn