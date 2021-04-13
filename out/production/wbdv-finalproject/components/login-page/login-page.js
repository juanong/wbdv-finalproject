import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './login-page.style.css'

const LoginPage = () => {

    const [username, setUsername] = useState("")

    return (
        <div className="banner-bg">
            <div className="login login-element">
                <br/>
                <br/>
                <h4>Login to continue</h4>
                <input onChange={(e) => setUsername(e.target.value)}
                       className="form-control login-element"
                       value={username}
                       placeholder="Username"/>
                <input className="form-control login-element" type="password" placeholder="Password"/>
                <Link to={`/home/${username}`}>
                    <button className="btn btn-block">Sign In</button>
                </Link>
                <p className="move-up">Forgot your password?</p>
                <br/>
                <h5 className="text-center">New here? Sign up for free!</h5>
                <Link to='/signup'>
                    <p className="text-center">Create Account</p>
                </Link>
                <br/>
            </div>
        </div>
    )
}

export default LoginPage