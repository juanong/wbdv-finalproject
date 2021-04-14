import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './login-page.style.css'
import loginPageService from '../../services/login-page-service'

const LoginPage = ({history}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [serverUser, setServerUser] = useState(null)

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
                       placeholder="Password"
                />
                {serverUser !== null && serverUser.length === 0 &&
                    <p>This user does not exist</p>
                }
                {serverUser !== null && serverUser.length > 0 && serverUser[0].password !== password &&
                    <p>Invalid password</p>
                }
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