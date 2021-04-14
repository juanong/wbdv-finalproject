import './registration-page.style.css'
import {connect} from 'react-redux'
import '../login-page/login-page.style.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import registrationService from '../../services/registration-page-service'

const RegistrationPage = () => {

    const createUser = () => {}

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userType, setUserType] = useState("")

    const validateSignUp = () => {

    }

    return (
        <div className="register login-element">
            <br/>
            <br/>
            <h4 className="text-center">Create Account</h4>
            <div className="register-element">
                <input onChange={(e) => setUsername(e.target.value)}
                       value={username}
                       placeholder="Username"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setFirstName(e.target.value)}
                       value={firstName}
                       placeholder="First Name"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setLastName(e.target.value)}
                       value={lastName}
                       placeholder="Last Name"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"
                       value={password}
                       type="password"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setConfirmPassword(e.target.value)}
                       placeholder="Confirm Password"
                       value={confirmPassword}
                       type="password"
                       className="form-control"/>
            </div>
            <div>
                {password !== confirmPassword ? <div>Passwords don't match!!</div> : null}
            </div>
            <div className="register-element">
                <select onChange={(e) => {
                    setUserType(e.target.value)
                    console.log(userType)
                }}
                        name="Type" id="user-type"
                        value={userType}
                        className="form-control">
                    <option value="CHEF">Chef (Post your recipes!)</option>
                    <option value="HOME_COOK">Home Cook (Read and review recipes!)</option>
                </select>
            </div>
            <br/>
            <div className="register-element">
                <button onClick={() => {
                    if (password === confirmPassword) {
                        console.log("BUTTON CLICKED")
                    }}}
                        className={`btn btn-block ${password !== confirmPassword ? "disabled" : ""}`}>SIGN UP</button>
            </div>
            <br/>
            <p className="text-center">Already have an account? <Link to='/login'>Log in here</Link></p>
        </div>
    )
}

export default RegistrationPage