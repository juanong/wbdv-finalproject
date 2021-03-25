import React from 'react'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1>
                This is the landing page
            </h1>
            <Link to={'/login'}>
                <p>Login</p>
            </Link>
            <p>Sign Up</p>
        </div>
    )
}

export default LandingPage