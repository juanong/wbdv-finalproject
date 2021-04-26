import React from 'react'
import LandingPage from "./landing-page/landing-page";
import {Route, Redirect, Switch} from 'react-router-dom'
import LoginPage from "./login-page/login-page";
import RecipePage from "./recipe-page/recipe-page";
import recipePageReducer from "../reducers/recipe-page-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Profile from "./profile/profile-page";
import SearchRecipe from "./search-recipe/search-recipe";
import CreateRecipe from "./create-recipe-page/create-recipe";
import searchRecipeReducer from "../reducers/search-recipe-reducer";
import RegistrationPage from "./registration-page/registration-page";
import registrationPageReducer from "../reducers/registration-page-reducer";
import FollowersList from "./profile/followers-list/followers-list";
import FollowingList from "./profile/following-list/following-list";

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
                            render={() => <Redirect to="/home"/>}
                        />
                    </Switch>
                </div>

                <Route path="/login" component={LoginPage}/>
                <Route path={["/:username/recipes/:recipeId", "/recipes/:recipeId"]}
                       exact={true}>
                    <RecipePage/>
                </Route>
                <Route path={["/home/:username", "/home"]} exact={true}>
                    <LandingPage/>
                </Route>
                <Route path="/add/recipe">
                    <CreateRecipe/>
                </Route>
                <Route path={["/profile", "/:username/profile"]} exact={true}>
                    <Profile/>
                </Route>
                <Route path={["/:username/profile/followers", "/profile/followers"]} exact={true} component={FollowersList}>
                </Route>
                <Route path={["/:username/profile/following", "/profile/following"]} exact={true} component={FollowingList}/>
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