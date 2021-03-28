import React from 'react'
import LandingPage from "./landing-page/landing-page";
import {Route, Redirect} from 'react-router-dom'
import LoginPage from "./login-page/login-page";
import RecipePage from "./recipe-page/recipe-page";
import DummyHomePage from "./dummy-home-page";
import recipePageReducer from "../reducers/recipe-page-reducer"
import {createStore} from "redux";
import {Provider} from "react-redux";
import AddRecipePage from "./add-recipe-page/add-recipe-page";
import ProfilePage from "./profile/profile-page";

const store = createStore(recipePageReducer)

const WebManager = () => {
    return (
        <Provider store={store}>
            <div>
                <Redirect from={"/"} to={"/welcome"}/>
                <Route path="/welcome">
                    <LandingPage/>
                </Route>
                <Route path="/profile">
                    <ProfilePage/>
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
                    <AddRecipePage/>
                </Route>
                <Route path="/:username/profile">
                    <ProfilePage/>
                </Route>
            </div>
        </Provider>
    )
}

export default WebManager