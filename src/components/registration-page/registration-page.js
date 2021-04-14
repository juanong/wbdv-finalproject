import './registration-page.style.css'
import {connect} from 'react-redux'
import '../login-page/login-page.style.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import registrationService from '../../services/registration-page-service'

const RegistrationPage = (
    {
        myUser = null,
        findUser = () => {},
        createUser = () => {}
    }
    ) => {

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userType, setUserType] = useState("")

    const validateUser = (username) => {
        findUser(username)
    }

    // all fields filled and password is the same as confirm password
    const allFieldsValid = () => {
        return username !== "" && firstName !== "" && lastName !== ""
            && password !== "" && password === confirmPassword
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
            {myUser !== null && myUser.length > 0 && myUser[0].username === username &&
                <p>Oops! That username is not available</p>
            }
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
                    if (allFieldsValid()) {
                        validateUser(username)
                        if (myUser !== null && myUser.length === 0) {
                            createUser(username, firstName, lastName, password, userType)
                        }
                    }
                }}
                        className={`btn btn-block ${username === "" || 
                            firstName === "" || 
                            lastName === "" ||
                        password === "" || 
                        password !== confirmPassword ? "disabled" : ""}`}>
                    SIGN UP
                </button>
            </div>
            <br/>
            <p className="text-center">Already have an account? <Link to='/login'>Log in here</Link></p>
        </div>
    )
}

const stpm = (state) => {
    return {
        myUser: state.registrationPageReducer.user
    }
}

const dtpm = (dispatch) => {
    return {
        findUser: (username) => {
            registrationService.findUserByUsername(username)
                .then(user => dispatch({
                    type: "FIND_USER",
                    user: user
                }))
        },

        createUser: (username, firstName, lastName, password, userType) => {
            registrationService.createUser(
                {username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    userType: userType,
                    preferences: []
                })
                .then(newUser => dispatch({
                    type: "CREATE_USER",
                    newUser
                }))
        }
    }
}

export default connect(stpm, dtpm)(RegistrationPage)