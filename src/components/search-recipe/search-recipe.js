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
import RecipeCard from "../recipe-card";


const useSearchStyles = makeStyles(theme => ({
    wbdvSearchInputField: {
        backgroundColor: "white",
        borderRadius: theme.shape.borderRadius,
        borderColor: "orange"
    }
}))

const SearchRecipe = ({
                          recipes = [],
                          imageBaseUrl,
                          searchRecipes
                      }) => {
    const styleClasses = useSearchStyles();

    useEffect(() => {
        searchRecipes("")
    }, [])

    const [searchQuery, setSearchQuery] = useState("")

    function keyPress(event) {
        if (event.keyCode === 13) {
            searchRecipes(searchQuery);
            setSearchQuery("");
        }
    }

    return <div className="wbdv-search-container">
        <div className="wbdv-search-header">
            <div className="wbdv-background-search-bar"/>
            <div className="wbdv-search-details">
                <div className="wbdv-search-input">
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                            className: styleClasses.wbdvSearchInputField
                        }}
                        onChange={event => {
                            setSearchQuery(event.target.value)
                        }}
                        onKeyDown={event => {
                            keyPress(event)
                        }}
                        id="search-recipe"
                        type="text"
                        value={searchQuery}
                        fullWidth={true}
                        placeholder="Search recipe"
                        variant="outlined"/>
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