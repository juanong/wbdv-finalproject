import './registration-page.style.css'
import '../login-page/login-page.style.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const RegistrationPage = () => {
    return (
        <div className="register login-element">
            <br/>
            <br/>
            <h4 className="text-center">Create Account</h4>
            <div className="register-element">
                <input placeholder="Username" className="form-control"/>
            </div>
            <div className="register-element">
                <input placeholder="First Name" className="form-control"/>
            </div>
            <div className="register-element">
                <input placeholder="Last Name" className="form-control"/>
            </div>
            <div className="register-element">
                <input placeholder="Password" type="password" className="form-control"/>
            </div>
            <div className="register-element">
                <input placeholder="Confirm Password" type="password" className="form-control"/>
            </div>
            <div className="register-element">
                <select name="Type" id="user-type" className="form-control" value="What type of cook are you?">
                    <option value="CHEF">Chef (Post your recipes!)</option>
                    <option value="HOME_COOK">Home Cook (Read and review recipes!)</option>
                </select>
            </div>
            <br/>
            <div className="register-element">
                <button className="btn btn-block">SIGN UP</button>
            </div>
            <br/>
            <p className="text-center">Already have an account? <Link to='/login'>Log in here</Link></p>
        </div>
    )
}

export default RegistrationPage