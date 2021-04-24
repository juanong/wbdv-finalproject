import React, {useState, useEffect} from 'react'
import './landing-style.css'
import LandingNavbar from "./landing-navbar"
import LandingMain from "./landing-main"
import searchService from "../../services/search-recipe-services";
import usersService from '../../services/users-service'
import {connect} from "react-redux";

const LandingPage = ({recipes, imageBaseUrl, searchRecipes}) => {

    const [currUser, setCurrUser] = useState(null)

    useEffect(() => {
        searchRecipes("")
        usersService.profile()
            .then(user => setCurrUser(user))
    }, [])

    return (
        <div>
            <div>
                <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
                <LandingMain recipes={recipes} imageBaseUrl={imageBaseUrl}/>
            </div>
        </div>

    )
}

const stpm = (state) => {
    return {
        recipes: state.searchRecipeReducer.recipes,
        imageBaseUrl: state.searchRecipeReducer.imageBaseUrl
    }
}
const dtpm = (dispatch) => {
    return {
        searchRecipes: (query) => {
            searchService.searchRecipes(query)
                .then(theRecipes => dispatch({
                    type: "SEARCH_RECIPES",
                    recipes: theRecipes,
                    internalrecipes: []
                }))
        }
    }
}

export default connect(stpm, dtpm)(LandingPage)