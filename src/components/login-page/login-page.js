import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './login-page.style.css'
import loginPageService from '../../services/login-page-service'

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [serverUser, setServerUser] = useState({})
    const [validated, setValidated] = useState(false)

    const validateUser = () => {
        // Grab the user from the server with the same username and store locally
        loginPageService.findUserByUsername(username).then(user => setServerUser(user))
        // Validate the user
        const actualPassword = serverUser.password
        if (actualPassword === password) {
            setValidated(true)
        } else {
            setValidated(false)
        }
        alert(`Validated: ${validated}`)
    }

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
                <input onChange={(e) => setPassword(e.target.value)}
                       className="form-control login-element"
                       type="password"
                       value={password}
                       placeholder="Password"/>
                <button onClick={validateUser}
                        className="btn btn-block">
                    Sign In
                </button>
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