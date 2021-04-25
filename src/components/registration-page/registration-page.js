import './registration-page.style.css'
import {connect} from 'react-redux'
import '../login-page/login-page.style.css'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import usersService from '../../services/users-service'

const RegistrationPage = (
    /*
    {
        myUser = null,
        findUser = () => {},
        createUser = () => {}
    }
     */
    ) => {

    // Use this single hook instead of having one for every single user attribute
    const [credentials, setCredentials] = useState(
        {username: "", firstName: "", lastName: "", password: "", userType: "HOME_COOK"}
        )

    const [confirmPassword, setConfirmPassword] = useState("")
    const [usernameTaken, setUsernameTaken] = useState(null)

    const history = useHistory()

    const register = () => {
        usersService.register(credentials)
            .then(user => {
                if (user === 0) {
                    //alert("Username taken bro")
                    setUsernameTaken(true)
                } else {
                    setUsernameTaken(false)
                    history.push(`/${credentials.username}/profile`)
                }
            })
    }


    // all fields filled and password is the same as confirm password
    const allFieldsValid = () => {
        return credentials.username !== "" && credentials.firstName !== "" && credentials.lastName !== ""
            && credentials.password !== "" && credentials.password === confirmPassword
    }

    return (
        <div className="register login-element">
            <br/>
            <br/>
            <h4 className="text-center">Create Account</h4>
            <div className="register-element">
                <input onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                       value={credentials.username}
                       placeholder="Username"
                       className="form-control"/>
            </div>
            {usernameTaken &&
                <p>Oops! That username is not available</p>}
            <div className="register-element">
                <input onChange={(e) => setCredentials({...credentials, firstName: e.target.value})}
                       value={credentials.firstName}
                       placeholder="First Name"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setCredentials({...credentials, lastName: e.target.value})}
                       value={credentials.lastName}
                       placeholder="Last Name"
                       className="form-control"/>
            </div>
            <div className="register-element">
                <input onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                       placeholder="Password"
                       value={credentials.password}
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
                {credentials.password !== confirmPassword ? <div>Passwords don't match</div> : null}
            </div>
            <div className="register-element">
                <select onChange={(e) => {
                    setCredentials({...credentials, userType: e.target.value})
                }}
                        name="Type" id="user-type"
                        value={credentials.userType}
                        className="form-control">
                    <option value="CHEF">Chef (Post your recipes!)</option>
                    <option value="HOME_COOK">Home Cook (Read and review recipes!)</option>
                </select>
            </div>
            <br/>
            <div className="register-element">
                <button onClick={() => {
                    if (allFieldsValid()) {
                        register()
                    }
                }}
                        className={`btn btn-block ${credentials.username === "" ||
                        credentials.firstName === "" ||
                        credentials.lastName === "" ||
                        credentials.password === "" ||
                        credentials.password !== confirmPassword ? "disabled" : ""}`}>
                    SIGN UP
                </button>
            </div>
            <br/>
            <p className="text-center">Already have an account? <Link to='/login'>Log in here</Link></p>
        </div>
    )
}

/*
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
 */

export default RegistrationPage