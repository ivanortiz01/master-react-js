import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Profile extends Component {
    static propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    static defaultProps = {
        name: 'Ninja Pro'
    }

    render() {
        const { name, bio, email } = this.props

        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        )
    }
}

export default Profile