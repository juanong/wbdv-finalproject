import React from "react";
import {Link, useParams} from "react-router-dom";

const Profile = () => {

    const {username} = useParams();

    return <div>
        <h1>Profile</h1>
        <Link to={`/${username}/add/recipe`}>
            <li>
                Add Recipe
            </li>
        </Link>
    </div>
}

export default Profile