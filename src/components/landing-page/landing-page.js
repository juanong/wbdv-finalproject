import React, {useEffect} from 'react'
import './landing-style.css'
import LandingNavbar from "./landing-navbar"
import LandingMain from "./landing-main"
import searchService from "../../services/search-recipe-services";
import {connect} from "react-redux";

const LandingPage = ({recipes, imageBaseUrl, searchRecipes}) => {
    useEffect(() => {
        searchRecipes("")
    }, [])

    return (
        <div>
            {/*<div>*/}
            {/*<LandingHeader/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <LandingNavbar searchRecipes={searchRecipes}/>*/}
            {/*</div>*/}
            {/*<br/><br/> <br/>*/}
            <div>
                <LandingMain recipes={recipes} imageBaseUrl={imageBaseUrl}/>
            </div>
            <div>
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
                }))
        }
    }
}

export default connect(stpm, dtpm)(LandingPage)