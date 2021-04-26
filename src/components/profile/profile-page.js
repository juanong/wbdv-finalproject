import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import './profile-page.style.css';
import usersService from '../../services/users-service'
import reviewsService from '../../services/recipe-page-service'
import LandingNavbar from "../landing-page/landing-navbar";
import UploadFile from "../upload-file/upload-file";
import Review from "../recipe-page/review";


const ProfilePage = () => {

    const history = useHistory()

    const [currUser, setCurrUser] = useState({})

    const {username} = useParams()

    const [userProfile, setUserProfile] = useState({})

    const [editing, setEditing] = useState(false)

    const [allReviews, setAllReviews] = useState([])

    const [userRecipes, setUserRecipes] = useState([])

    const [imageUrl, setImageUrl] = useState();

    // Get the user who is logged in
    useEffect(() => {
        usersService.profile()
            .then(user => {
                return setCurrUser(user)
            })
        usersService.findUserByUsername(username)
            .then(user => setUserProfile(user))
        // reviewsService.findReviewsByAuthor(username)
        //     .then(reviews => {
        //         setAllReviews(reviews)
        //         reviews.forEach(item => {
        //             reviewsService.findRecipeById(item.recipe_id)
        //                 .then(recipe => setRecipeNames(recipeNames => [recipe.title, ...recipeNames]))
        //         })
        //     })
        reviewsService.findReviewsByAuthor(username)
            .then(reviews => setAllReviews(reviews))

        reviewsService.findRecipesByAuthor(username)
            .then(recipes => setUserRecipes(recipes))

    }, [])

    const logout = () => {
        usersService.logout()
            .then((response) => {
                history.push("/home")
            })
    }

    const updateUser = () => {
        usersService.updateUser(userProfile)
            .then(updatedUser => {
                setCurrUser(updatedUser)
                history.push("/login")
            })
    }

    const followUser = () => {
        usersService.followUser(currUser.username, userProfile.username)
            .then(status => history.go(0))

    }

    return (
        <div>
            <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    {
                                        userProfile && userProfile.profilePic_url &&
                                        <img
                                            src={`${userProfile.profilePic_url}`}
                                            alt="..."
                                            width="130"
                                            className="rounded mb-2 img-thumbnail"/>
                                    }

                                    {
                                        currUser.username && userProfile.username !== currUser.username &&
                                        userProfile && userProfile.followers &&
                                        !userProfile.followers.includes(currUser.username) &&
                                        <>
                                            <button
                                                className="btn btn-outline-dark btn-sm btn-block"
                                                onClick={() => followUser()}>
                                                Follow
                                            </button>
                                        </>
                                    }
                                    {
                                        currUser.username && userProfile.username !== currUser.username &&
                                        userProfile && userProfile.followers &&
                                        userProfile.followers.includes(currUser.username) &&
                                        <>
                                            <button
                                                className="btn btn-outline-dark btn-sm btn-block"
                                                disabled={true}>
                                                Following
                                            </button>
                                        </>
                                    }
                                    {
                                        userProfile.username === currUser.username &&
                                        <>
                                            {
                                                editing &&
                                                <UploadFile setImageUrl={setImageUrl}
                                                            userProfile={userProfile}
                                                            setUserProfile={setUserProfile}/>
                                            }
                                            {
                                                !editing &&
                                                <button
                                                    className="btn btn-outline-dark btn-sm btn-block"
                                                    onClick={() => setEditing(true)}>
                                                    Edit profile
                                                </button>
                                            }
                                            {
                                                currUser.userType === 'CHEF' &&
                                                <button
                                                    className="btn btn-outline-dark btn-sm btn-block">
                                                    <Link to={'/add/recipe'}>
                                                        <li>
                                                            Add Recipe
                                                        </li>
                                                    </Link>
                                                </button>
                                            }
                                        </>
                                    }

                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">
                                        {`${userProfile.firstName} ${userProfile.lastName}`}
                                    </h4>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">
                                        {userProfile.recipes ? userProfile.recipes.length : 0}
                                    </h5>
                                    <small className="text-muted">
                                        <i className="fas fa-image mr-1"/>
                                        Recipes
                                    </small>
                                </li>
                                <Link to={{
                                    pathname: `/${userProfile.username}/profile/followers`,
                                    followersUsernamesList: userProfile.followers
                                }}>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">
                                            {userProfile.followers ? userProfile.followers.length : 0}
                                        </h5>
                                        <small
                                            className="text-muted">
                                            <i className="fas fa-user mr-1"/>
                                            Followers
                                        </small>
                                    </li>
                                </Link>
                                <Link to={{
                                    pathname: `/${userProfile.username}/profile/following`,
                                    followingUsernamesList: userProfile.following
                                }}>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">
                                            {userProfile.following ? userProfile.following.length : 0}
                                        </h5>
                                        <small
                                            className="text-muted">
                                            <i className="fas fa-user mr-1"/>
                                            Following
                                        </small>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-0">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                {
                                    editing &&
                                    <div>
                                        <label htmlFor="fname">First name:</label> <br/>
                                        <input value={userProfile.firstName}
                                               onChange={e => setUserProfile({
                                                   ...userProfile,
                                                   firstName: e.target.value
                                               })}
                                               type="text"
                                               id="fname"
                                               name="fname"/><br/><br/>
                                        <label htmlFor="lname">Last name:</label> <br/>
                                        <input value={userProfile.lastName}
                                               onChange={e => setUserProfile({
                                                   ...userProfile,
                                                   lastName: e.target.value
                                               })}
                                               type="text"
                                               id="lname"
                                               name="lname"/><br/><br/>
                                        <label htmlFor="password">Password:</label> <br/>
                                        <input value={userProfile.password}
                                               onChange={e => setUserProfile({
                                                   ...userProfile,
                                                   password: e.target.value
                                               })}
                                               type="text"
                                               id="password"
                                               name="password"/><br/><br/>
                                        {/*<label htmlFor="userType">User type:</label> <br/>*/}
                                        {/*<select onChange={e => setUserProfile({*/}
                                        {/*    ...userProfile,*/}
                                        {/*    userType: e.target.value*/}
                                        {/*})}*/}
                                        {/*        id="userType" name="userType">*/}
                                        {/*    <option value="HOME_COOK">Home Cook</option>*/}
                                        {/*    <option value="CHEF">Chef</option>*/}
                                        {/*</select>*/}

                                        <br/><br/>
                                        <p>You will have to log in again to see your changes</p>
                                        <button className="btn btn-primary"
                                                onClick={() => {
                                                    setEditing(false)
                                                    updateUser()
                                                }}>
                                            Save changes
                                        </button>
                                        <br/>
                                        <p onClick={() => setEditing(false)}>Cancel</p>
                                        <br/>
                                    </div>
                                }
                                {
                                    !editing &&
                                    <div>
                                        <label htmlFor="fname">First name:</label>
                                        <br/>
                                        <p>{userProfile.firstName}</p>
                                        <label htmlFor="lname">Last name:</label> <br/>
                                        <p>{userProfile.lastName}</p>
                                        {
                                            userProfile.username === currUser.username &&
                                            <>
                                                <label htmlFor="password">Password:</label> <br/>
                                                <p>{userProfile.password}</p>
                                            </>
                                        }
                                        <label htmlFor="userType">User type:</label> <br/>
                                        <p>{userProfile.userType === "CHEF" ? "Chef" : "Home cook"}</p>
                                    </div>
                                }
                                <br/>
                                {
                                    userProfile.username === currUser.username &&
                                    <button onClick={logout}
                                            className="btn btn-outline-dark btn-sm">
                                        Logout
                                    </button>
                                }
                            </div>
                        </div>
                        {
                            userProfile.userType === "CHEF" &&
                            <div className="py-4 px-4">
                                <h6>Recent Recipes</h6>
                                <br/>
                                {
                                    userRecipes.map(recipe =>
                                        <Link to={`/recipes/${recipe._id}`}>
                                            <p>{recipe.title}</p>
                                        </Link>
                                    )
                                }
                            </div>
                        }
                        <div className="py-4 px-4">
                            <h6>Recent Reviews</h6>
                            <br/>
                            <ul>
                                {
                                    allReviews.map((item, ndx) =>
                                        <div>
                                            <Link to={`/recipes/${item.recipe_id}`}>
                                                <p>{item.recipe_title}</p>
                                            </Link>
                                            <Review review={item}/>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage