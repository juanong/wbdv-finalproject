import React from 'react'
import {Link} from "react-router-dom";
import './landing-style.css'
import LandingHeader from "./landing-header";
import LandingFooter from "./landing-footer"
import LandingNavbar from "./landing-navbar"
import LandingMain from "./landing-main"
import RecipeTypes from "./recipe-types"

const LandingPage = () => {
    return (
        <div>
            <div>
            <LandingHeader/>
            </div>
            <div>
                <LandingNavbar/>
            </div>
            <br/><br/> <br/>
            <div>
                <LandingMain/>
            </div>
            <div>
            </div>

        </div>

    )
}

export default LandingPage