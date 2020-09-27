import React, { Component } from 'react'

import './Iterator.css'

const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi'
]

const images = [
    {
        author: {
            name: 'Vlad Bagacian',
            avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 153,
        id: 1
    },
    {
        author: {
            name: 'Moreno Matković',
            avatar: 'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 214,
        id: 2
    },
    {
        author: {
            name: 'Jarod Lovekamp',
            avatar: 'https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 985,
        id: 3
    },
    {
        author: {
            name: 'Xandro Vandewalle',
            avatar: 'https://images.pexels.com/users/avatars/1431801/xandro-vandewalle-530.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/2763239/pexels-photo-2763239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 124,
        id: 4
    },
    {
        author: {
            name: 'Two Dreamers',
            avatar: 'https://images.pexels.com/users/avatars/1190917/two-dreamers-438.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/2717087/pexels-photo-2717087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 987,
        id: 5
    },
    {
        author: {
            name: 'Luis Quintero',
            avatar: 'https://images.pexels.com/users/avatars/447123/luis-quintero-294.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 147,
        id: 6
    },
    {
        author: {
            name: 'Tobias Bjørkli',
            avatar: 'https://images.pexels.com/users/avatars/706370/tobias-bjorkli-371.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 387,
        id: 7
    },
    {
        author: {
            name: 'Renato Abati',
            avatar: 'https://images.pexels.com/users/avatars/963082/renato-abati-706.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/2768877/pexels-photo-2768877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 143,
        id: 8
    },
    {
        author: {
            name: 'Vlad Bagacian',
            avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 721,
        id: 9
    },
    {
        author: {
            name: 'Brayden Law',
            avatar: 'https://images.pexels.com/users/avatars/851295/brayden-law-840.jpeg?w=256&h=256&fit=crop&crop=faces'
        },
        source: 'https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        views: 637,
        id: 10
    }
]

const Image = ({ image }) => (
    <div className="card">
        <img src={image.source} alt="imagen" className="image" />

        <div className="footer">
            <img
                src={image.author.avatar}
                alt="Avatar"
                className="avatar" />

            <div>{image.author.name}</div>

            <div>{image.views}</div>
        </div>
    </div>
)

class Iterator extends Component {
    state = {
        user: {
            name: "ASDASD",
            country: "MX",
            twitter: "@ivanasda",
            youtube: "tecxxasd"
        },
        products: [
            {
                id: 1,
                name: 'camisa unicornio',
                colors: ['#467367', '#05fd88', '#a706ee'],
                price: 20
            },
            {
                id: 2,
                name: 'jeans',
                colors: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF'],
                price: 32
            },
            {
                id: 3,
                name: 'taza',
                colors: ['#804342', '#FFD2D1', '#FF8785', '#806969'],
                price: 20
            },
            {
                id: 4,
                name: 'camisa icream',
                colors: ['#2544B3', '#FF8A69', '#5076FF', '#7FCC2B', '#73B32E'],
                price: 20
            },
            {
                id: 5,
                name: 'camisa dragon',
                colors: ['#B32542', '#FF6987', '#FF4F73', '#14B32E', '#5EFF78'],
                price: 20
            }
        ],
        fruits: [
            { name: 'Fresa', price: 5.4 },
            { name: 'Manzana', price: 2.3 },
            { name: 'Sandia', price: 1.2 },
            { name: 'Guayaba', price: 5 },
            { name: 'Pera', price: 4.12 },
            { name: 'Kiwi', price: 3.87 },
            { name: 'Limon', price: 7.21 },
            { name: 'Melon', price: 6.21 },
            { name: 'Cereza', price: 4.98 }
        ],

        frutaSeleccionada: {}
    }

    select = (frutaSeleccionada, event) => {
        this.setState({
            frutaSeleccionada
        })
    }

    render() {
        const { user, fruits,  frutaSeleccionada} = this.state
        const keys = Object.keys(user)

        return (
            <div>
                <ul>
                    {fruits.map((fruit, key) => (
                        <li
                            key={key}
                            onClick={this.select.bind(this, fruit)}
                            style={{
                                color: frutaSeleccionada.name === fruit.name ? 'red': 'black'
                            }}>
                            {fruit.name} - $ {fruit.price}
                        </li>
                    ))}
                </ul>


                <ul>
                    {frutas.map((fruta, key) => {
                        return (
                            <li key={key}>{fruta}</li>
                        )
                    })}
                </ul>

                <h3>Iterando listas de objeto</h3>

                <div>
                    {this.state.products.map((product, keyP) => {
                        return (
                            <div key={keyP}>
                                $ {product.price} - {product.name}

                                <div>
                                    {product.colors.map((color, key) => {
                                        return (
                                            <span
                                                key={key}
                                                style={{
                                                    width: '13px',
                                                    height: '13px',
                                                    borderRadius: '0.1em',
                                                    border: '1px solid gray',
                                                    display: 'inline-block',
                                                    margin: '0.1em',
                                                    background: color
                                                }}>
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <ul>
                    {keys.map(key => (
                        <li key={key}>{key} -- {user[key]}</li>
                    ))}
                </ul>

                <div className="images">
                    {images.map((image, key) => (
                        <Image key={key} image={image} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Iterator