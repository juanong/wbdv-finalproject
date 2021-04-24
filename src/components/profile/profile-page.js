import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import './profile-page.style.css';
import usersService from '../../services/users-service'
import LandingNavbar from "../landing-page/landing-navbar";
import UploadFile from "../upload-file/upload-file";


const ProfilePage = () => {

    const history = useHistory()

    const [currUser, setCurrUser] = useState({})

    const {username} = useParams()

    const [userProfile, setUserProfile] = useState({})

    const [editing, setEditing] = useState(false)

    const currUserCopy = JSON.parse(JSON.stringify(currUser))

    const [imageUrl, setImageUrl] = useState("")

    // Get the user who is logged in
    useEffect(() => {
        usersService.profile()
            .then(user => {
                return setCurrUser(user)
            })
        usersService.findUserByUsername(username)
            .then(user => setUserProfile(user))
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
                history.push("/login")
                setCurrUser(updatedUser)
            })
    }

    return (
        <div>
            {
                console.log(currUser)
            }
            <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3"><img
                                    src={`http://localhost:4000/api/internal/images/${imageUrl}`}
                                    alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                    {
                                        userProfile.username === currUser.username &&
                                        <>
                                            {
                                                editing &&
                                                <UploadFile setImageUrl={setImageUrl}/>

                                                // <button
                                                //     className="btn btn-outline-dark btn-sm btn-block"
                                                //     onClick={() => setEditing(true)}>
                                                //     Upload Profile Pic
                                                // </button>
                                            }
                                            {
                                                !editing &&
                                                <button
                                                    className="btn btn-outline-dark btn-sm btn-block"
                                                    onClick={() => setEditing(true)}>
                                                    Edit profile
                                                </button>
                                            }
                                            <button
                                                className="btn btn-outline-dark btn-sm btn-block">
                                                <Link to={'/add/recipe'}>
                                                    <li>
                                                        Add Recipe
                                                    </li>
                                                </Link>
                                            </button>
                                        </>
                                    }
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{`${userProfile.firstName} ${userProfile.lastName}`}</h4>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">

                                </li>
                                {/*<li className="list-inline-item">*/}
                                {/*    <h5 className="font-weight-bold mb-0 d-block">15</h5><small className="text-muted"> <i*/}
                                {/*    className="fas fa-image mr-1"></i>Recipes</small>*/}
                                {/*</li>*/}
                                {/*<li className="list-inline-item">*/}
                                {/*    <h5 className="font-weight-bold mb-0 d-block">85</h5><small className="text-muted"> <i*/}
                                {/*    className="fas fa-user mr-1"></i>Followers</small>*/}
                                {/*</li>*/}
                                {/*<li className="list-inline-item">*/}
                                {/*    <h5 className="font-weight-bold mb-0 d-block">10</h5><small className="text-muted"> <i*/}
                                {/*    className="fas fa-user mr-1"></i>Following</small>*/}
                                {/*</li>*/}
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
                                        <label htmlFor="userType">User type:</label> <br/>
                                        <select onChange={e => setUserProfile({
                                            ...userProfile,
                                            userType: e.target.value
                                        })}
                                                id="userType" name="userType">
                                            <option value="HOME_COOK">Home Cook</option>
                                            <option value="CHEF">Chef</option>
                                        </select>

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
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent recipes</h5><a href="#"
                                                                           className="btn btn-link text-muted">Show
                                all</a>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1"><img
                                    src="https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 mb-2 pl-lg-1"><img
                                    src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=985&q=80"
                                    alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 pr-lg-1 mb-2"><img
                                    src="https://images.unsplash.com/photo-1559100644-59dad675d48d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHJlY2lwZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 pl-lg-1"><img
                                    src="https://images.unsplash.com/photo-1575919094625-6c0fcda78000?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHJlY2lwZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt="" className="img-fluid rounded shadow-sm"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage