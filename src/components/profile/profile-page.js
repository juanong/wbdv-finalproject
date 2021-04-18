import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import './profile-page.style.css';
import usersService from '../../services/users-service'

// TODO: user info should be displayed when first entering page; toggle on edit button to show input fields
// TODO: implement updateUser function in users-service and in the node server

const ProfilePage = () => {

    const history = useHistory()

    const [currUser, setCurrUser] = useState({})

    // Get the user who is logged in
    useEffect(() => {
        usersService.profile()
            .then(user => setCurrUser(user))
    }, [])

    const logout = () => {
        usersService.logout()
            .then((response) => {
                console.log(response)
                history.push("/home")
            })
    }

    const {username} = useParams();

    return (
        <div className="row py-5 px-4">
            <div className="col-md-5 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3"><img
                                src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit
                                profile</a>
                                <button className="btn btn-outline-dark btn-sm btn-block">
                                    <Link to={`/${currUser.username}/add/recipe`}>
                                        <li>
                                            Add Recipe
                                        </li>
                                    </Link>
                                </button>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">{`${currUser.firstName} ${currUser.lastName}`}</h4>
                                <p className="small mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Boston, MA</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">

                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">15</h5><small className="text-muted"> <i
                                className="fas fa-image mr-1"></i>Recipes</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">85</h5><small className="text-muted"> <i
                                className="fas fa-user mr-1"></i>Followers</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">10</h5><small className="text-muted"> <i
                                className="fas fa-user mr-1"></i>Following</small>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 py-3">
                        <h5 className="mb-0">About</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <label htmlFor="fname">First name:</label> <br/>
                            <input type="text" id="fname" name="fname"/><br/><br/>
                            <label htmlFor="lname">Last name:</label> <br/>
                            <input type="text" id="lname" name="lname"/><br/><br/>
                            <label htmlFor="email">Email:</label> <br/>
                            <input type="text" id="email" name="email"/><br/><br/>
                            <label htmlFor="password">Password:</label> <br/>
                            <input type="password" id="password" name="password"/><br/><br/>
                            <label htmlFor="lname">Mobile:</label> <br/>
                            <input type="tel" id="lname" name="lname"/><br/><br/>
                            <button onClick={logout}
                                    className="btn btn-outline-dark btn-sm">
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Recent recipes</h5><a href="#" className="btn btn-link text-muted">Show
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
    )
}

export default ProfilePage