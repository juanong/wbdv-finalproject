import React from 'react'
import LandingPage from "./landing-page/landing-page";
import {Route, Redirect, Switch, Router} from 'react-router-dom'
import LoginPage from "./login-page/login-page";
import RecipePage from "./recipe-page/recipe-page";
import recipePageReducer from "../reducers/recipe-page-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Profile from "./profile/profile-page";
import SearchRecipe from "./search-recipe/search-recipe";
import CreateRecipe from "./create-recipe-page/create-recipe";
import searchRecipeReducer from "../reducers/search-recipe-reducer";
import LandingNavbar from "./landing-page/landing-navbar";
import RegistrationPage from "./registration-page/registration-page";
import registrationPageReducer from "../reducers/registration-page-reducer";

const reducer = combineReducers({
    recipePageReducer: recipePageReducer,
    searchRecipeReducer: searchRecipeReducer,
    registrationPageReducer: registrationPageReducer
})

const store = createStore(reducer)

const WebManager = () => {
    return (
        <Provider store={store}>
            <div>
                <div className="sticky-top">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/welcome"/>}
                        />
                        <Route path={["/search", "/search/:searchQueryParam"]} exact={true}
                               render={() => <LandingNavbar isSearchPage={true}/>}>

                        </Route>
                        <Route
                            path={["/:username/profile", "/profile", "/welcome", "/:username/recipes/:recipeId", "/recipes/:recipeId", "/home/:username", "/home", "/:username/add/recipe"]}
                            exact={true}
                            render={() => <LandingNavbar isSearchPage={false}/>}>

                        </Route>
                    </Switch>
                </div>

                <Route path="/welcome">
                    <LandingPage/>
                </Route>
                <Route path="/login" component={LoginPage}/>
                <Route path={["/:username/recipes/:recipeId", "/recipes/:recipeId"]}
                       exact={true}>
                    <RecipePage/>
                </Route>
                <Route path={["/home/:username", "/home"]} exact={true}>
                    <LandingPage/>
                </Route>
                <Route path="/:username/add/recipe">
                    <CreateRecipe/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path={["/search", "/search/:searchQueryParam"]} exact={true}>
                    <SearchRecipe/>
                </Route>
                <Route path="/signup">
                    <RegistrationPage/>
                </Route>
            </div>
        </Provider>
    )
}

export default WebManager