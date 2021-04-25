import React, {useState, useEffect} from 'react'
import './landing-style.css'
import LandingNavbar from "./landing-navbar"
import LandingMain from "./landing-main"
import searchService from "../../services/search-recipe-services";
import usersService from '../../services/users-service'
import recipeService from '../../services/recipe-page-service'
import {connect} from "react-redux";

const LandingPage = ({
                         recipes,
                         latestRecipes,
                         latestRecipesForAuthor,
                         imageBaseUrl,
                         searchRecipes,
                         findLatestRecipes,
                         findLatestRecipesForAuthor
                     }) => {

    const [currUser, setCurrUser] = useState(null)

    useEffect(() => {
        searchRecipes("")
        findLatestRecipes(4)
        usersService.profile()
            .then(user => {
                setCurrUser(user)
                console.log('Latest recipes anonymous', user)
                if (user && user.username && user.userType === 'CHEF') {
                    findLatestRecipesForAuthor(4, user.username)
                }
            })

    }, [])

    return (
        <div>
            <div>
                <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
                <LandingMain recipes={recipes} imageBaseUrl={imageBaseUrl}
                             latestRecipes={(currUser && currUser.username && currUser.userType === 'CHEF' ? latestRecipesForAuthor : latestRecipes)}
                             user={currUser}/>
            </div>
        </div>

    )
}

const stpm = (state) => {
    return {
        recipes: state.searchRecipeReducer.recipes,
        imageBaseUrl: state.searchRecipeReducer.imageBaseUrl,
        latestRecipes: state.recipePageReducer.latestRecipes,
        latestRecipesForAuthor: state.recipePageReducer.latestRecipesForAuthor
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
        },
        findLatestRecipes: (limit) => {
            recipeService.findLatestRecipes(limit)
                .then(theLatestRecipes => dispatch({
                    type: "FIND_LATEST_RECIPES",
                    latestRecipes: theLatestRecipes
                }))
        },
        findLatestRecipesForAuthor: (limit, username) => {
            recipeService.findLatestRecipesForUserName(limit, username)
                .then(theLatestRecipes => dispatch({
                    type: "FIND_LATEST_RECIPES_FOR_AUTHOR",
                    latestRecipesForAuthor: theLatestRecipes
                }))
        }

    }
}

export default connect(stpm, dtpm)(LandingPage)