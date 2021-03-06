import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
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
        reviews = [],
        findRecipeById = () => alert("Could not find recipe"),
        findReviewsForRecipe,
        findUserLoggedIn
    }
) => {

    const {recipeId} = useParams()
    const [currUser, setCurrUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        findRecipeById(recipeId)
        findReviewsForRecipe(recipeId)
        findUserLoggedIn(setCurrUser)
    }, [recipeId])

    return (

        <div>
            <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
            <div className="container container-outline">
                <RecipeBanner recipe={recipe} author={author}/>
                <RecipeBody recipe={recipe}/>
                <ReviewsSection recipe={recipe} currUser={currUser} recipeId={recipeId} reviews={reviews} history={history}/>
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
        author: state.recipePageReducer.author,
        reviews: state.recipePageReducer.reviews
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
        findReviewsForRecipe: (recipeId) => {
            recipePageService.findReviewsForRecipe(recipeId)
                .then(reviews => dispatch({
                    type: "FIND_REVIEWS_FOR_RECIPE",
                    reviews
                }))
        },

        findUserLoggedIn: (setCurrUser) => {
            usersService.profile()
                .then(user => setCurrUser(user))
        }
    }
}

export default connect(stpm, dtpm)(RecipePage)