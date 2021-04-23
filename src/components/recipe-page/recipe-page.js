import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import recipePageService from '../../services/recipe-page-service'
import './recipe.style.css'
import RecipeNavBarV2 from "./recipe-navbar-v2";
import RecipeBanner from "./recipe-banner";
import RecipeBody from "./recipe-body";
import ReviewsSection from "./reviews-section";
import LandingNavbar from "../landing-page/landing-navbar";
import userService from "../../services/users-service"
import usersService from "../../services/users-service";

const RecipePage = (
    {
        recipe = {},
        author = {},
        findRecipeById = () => alert("Could not find recipe"),
        findUserLoggedIn
    }
) => {

    const {recipeId} = useParams()
    const [currUser, setCurrUser] = useState({})

    useEffect(() => {
        findRecipeById(recipeId)
        findUserLoggedIn(setCurrUser)
    }, [recipeId])

    return (

        <div>
            <div className="container container-outline">
                <RecipeBanner recipe={recipe} author={author}/>
                <RecipeBody recipe={recipe}/>
                <ReviewsSection recipe={recipe} currUser={currUser}/>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

const stpm = (state) => {
    return {
        recipe: state.recipePageReducer.recipe,
        author: state.recipePageReducer.author
    }
}

const dtpm = (dispatch) => {
    return {
        findRecipeById: (recipeId) => {
            recipePageService.findInternalRecipeById(recipeId)
                .then(recipe => {
                    if (recipe === 0) {
                        recipePageService.findRecipeById(recipeId)
                            .then(recipe => dispatch({
                                type: "FIND_RECIPE_BY_ID",
                                recipe
                            }))
                    } else {
                        dispatch({
                            type: "FIND_RECIPE_BY_ID",
                            recipe
                        })

                        userService.findUserByUsername(recipe.author_id)
                            .then(response => dispatch({
                                type: "FIND_AUTHOR_FOR_RECIPE",
                                author: response
                            }))
                    }

                })
        },
        findUserLoggedIn: (setCurrUser) => {
            usersService.profile()
                .then(user => setCurrUser(user))
        }
    }
}

export default connect(stpm, dtpm)(RecipePage)