import React from 'react'
import LandingPage from "./landing-page/landing-page";
import {Route, Redirect} from 'react-router-dom'
import LoginPage from "./login-page/login-page";
import RecipePage from "./recipe-page/recipe-page";
import DummyHomePage from "./dummy-home-page";
import recipePageReducer from "../reducers/recipe-page-reducer"
import {createStore} from "redux";
import {Provider} from "react-redux";
import Profile from "./profile/profile-page";
import SearchRecipe from "./search-recipe/search-recipe";
import CreateRecipe from "./create-recipe-page/create-recipe";

const store = createStore(recipePageReducer)

const WebManager = () => {
    return (
        <Provider store={store}>
            <div>
                <Redirect from={"/"} to={"/welcome"}/>
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
                <Route path="/home/:username/search">
                    <SearchRecipe/>
                </Route>
            </div>
        </Provider>
    )
}

export default WebManager