import React from 'react'
import {useParams, Link} from 'react-router-dom'

const DummyHomePage = () => {

    const {username} = useParams()

    return (
        <div>
            <h1>
                Welcome, {username}!
            </h1>
            <ul>
                <Link to={`/${username}/recipes/510869`}>
                    <li>
                        Recipe 1
                    </li>
                </Link>
                <Link to={`/${username}/recipes/472020`}>
                    <li>
                        Recipe 2
                    </li>
                </Link>
                <Link to={`/${username}/recipes/224382`}>
                    <li>
                        Recipe 3
                    </li>
                </Link>
                <Link to={`/${username}/profile`}>
                    <li>
                        Profile
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default DummyHomePage