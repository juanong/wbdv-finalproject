import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './login-page.style.css'
import usersService from '../../services/users-service'

const LoginPage = () => {


    const [credentials, setCredentials] = useState({username: "", password: ""})
    const [serverUser, setServerUser] = useState(null)
    const [failedLogin, setFailedLogin] = useState(null)

    const history = useHistory()

    /*
    const validateUser = () => {
        // Grab the user from the server with the same username and store locally
        loginPageService.findUserByUsername(username)
            .then(user => {
                setServerUser(user)
                if (user !== null && user.length > 0 && user[0].password === password) {
                    history.push(`/home/${username}`)
                }
            })
    }
     */

    const login = () => {
        usersService.login(credentials)
            .then(user => {
                if (user === 0) {
                    setFailedLogin(true)
                } else {
                    setFailedLogin(false)
                    history.push("/home")
                }
            })
    }

    return (
        <div className="banner-bg">
            <div className="login login-element">
                <br/>
                <br/>
                <h4>Login to continue</h4>
                <input onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                       className="form-control login-element"
                       value={credentials.username}
                       placeholder="Username"/>
                <input onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                       className="form-control login-element"
                       type="password"
                       value={credentials.password}
                       placeholder="Password"
                />
                {failedLogin &&
                    <p>Invalid username or password</p>
                }
                <button onClick={login}
                        className="btn btn-block">
                    Sign In
                </button>
                {/*<p className="move-up">Forgot your password?</p>*/}
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