import React, { Component } from 'react'
import axios from 'axios'

class MovieSearch extends Component {

    state = {
        movie: {},
        isLoading: false
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        const title = event.target[0].value
        const url = "http://www.omdbapi.com/?apikey=1493c633&"

        axios
            .get(url, {
                params: {
                    t: title
                }
            })
            .then(res => this.setState({
                movie: res.data,
                isLoading: false
            }))

        const res = await fetch(url + "&t=" + title)
        const movie = await res.json()

        this.setState({
            movie,
            isLoading: false
        })
    }

    render() {
        const { movie, isLoading } = this.state

        return (
            <div>
                <h1>Buscador de Peliculas</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Nombre de pelicula" />
                    <button>Buscar</button>
                </form>

                {isLoading && (
                    <h2>Cargando...</h2>
                )}

                {movie.Title && !isLoading && (
                    <div>
                        <h2>{movie.Title}</h2>
                        <p>{movie.Plot}</p>
                        <img src={movie.Poster} alt="Poster" style={{ width: '150px' }} />
                    </div>
                )}
            </div>
        )
    }
}

export default MovieSearch