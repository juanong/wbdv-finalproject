import React, {useEffect, useState} from "react";
import searchService from '../../services/search-recipe-services'

import {
    Grid,
    InputAdornment,
    makeStyles,
    TextField
} from "@material-ui/core";
import './search-recipe.css'
import SearchIcon from '@material-ui/icons/Search'
import {connect} from "react-redux";
import RecipeCard from "../recipe-card/recipe-card";
import {useParams} from "react-router-dom";
import SearchBar from "../search-bar/search-bar";

const SearchRecipe = ({
                          recipes = [],
                          imageBaseUrl,
                          searchRecipes
                      }) => {

    const {searchQueryParam} = useParams()

    useEffect(() => {
        searchRecipes(searchQueryParam)
    }, [searchQueryParam])


    return <div className="wbdv-search-container">
        <div className="wbdv-search-header">
            <div className="wbdv-background-search-bar"/>
            <div className="wbdv-search-details">
                <div className="wbdv-search-input">
                    <SearchBar searchRecipes={searchRecipes} initialSearchQuery={searchQueryParam}/>
                </div>
            </div>
        </div>
        <div>
            <Grid container>
                {
                    recipes.map(recipe =>
                        <RecipeCard recipe={recipe} imageBaseUrl={imageBaseUrl}/>
                    )
                }
            </Grid>

        </div>
    </div>
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

export default connect(stpm, dtpm)(SearchRecipe)