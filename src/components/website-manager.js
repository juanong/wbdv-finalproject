import React from 'react'
import LandingPage from "./landing-page/landing-page";
import {Route, Redirect} from 'react-router-dom'
import LoginPage from "./login-page/login-page";
import RecipePage from "./recipe-page/recipe-page";
import DummyHomePage from "./dummy-home-page";
import recipePageReducer from "../reducers/recipe-page-reducer"
import searchRecipeReducer from "../reducers/search-recipe-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import CreateRecipe from "./add-recipe-page/create-recipe";
import Profile from "./profile/profile";
import SearchRecipe from "./search-recipe/search-recipe";

const reducer = combineReducers({
    recipePageReducer: recipePageReducer,
    searchRecipeReducer: searchRecipeReducer
})

const store = createStore(reducer)

const WebManager = () => {
    return (
        <Provider store={store}>
            <div>
                {/*<Redirect from={"/"} to={"/welcome"}/>*/}
                <Route path="/welcome">
                    <LandingPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/:username/recipes/:recipeId">
                    <RecipePage/>
                </Route>
                <Route path="/home/:username">
                    <DummyHomePage/>
                </Route>
                <Route path="/:username/add/recipe">
                    <CreateRecipe/>
                </Route>
                <Route path="/:username/profile">
                    <Profile/>
                </Route>
                <Route path="/search">
                    <SearchRecipe/>
                </Route>
            </div>
        </Provider>
    )
}

export default WebManager