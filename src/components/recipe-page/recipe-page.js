import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import recipePageService from '../../services/recipe-page-service'
import './recipe.style.css'
import RecipeNavBarV2 from "./recipe-navbar-v2";
import RecipeBanner from "./recipe-banner";
import RecipeBody from "./recipe-body";
import ReviewsSection from "./reviews-section";

const RecipePage = (
    {
        recipe = {},
        findRecipeById = () => alert("Could not find recipe")
    }
    ) => {

    const {username, recipeId} = useParams()

    useEffect(() => {
        findRecipeById(recipeId)
    }, [recipeId])

    return (
        <div>
            <div className="sticky-top">
                <RecipeNavBarV2 username={username}/>
            </div>
            <div className="container container-outline">
                <RecipeBanner recipe={recipe}/>
                <RecipeBody recipe={recipe}/>
                <ReviewsSection recipe={recipe}/>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

const stpm = (state) => {
    return {
        recipe: state.recipePageReducer.recipe
    }
}

const dtpm = (dispatch) => {
    return {
        findRecipeById: (recipeId) => {
            recipePageService.findRecipeById(recipeId)
                .then(recipe => dispatch ({
                    type: "FIND_RECIPE_BY_ID",
                    recipe
                }))
        }
    }
}

export default connect(stpm, dtpm)(RecipePage)