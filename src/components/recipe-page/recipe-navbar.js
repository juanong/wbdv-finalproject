import React from 'react'
import {Link} from 'react-router-dom'

const RecipeNavBar = ({username}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-styling shadow-sm">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <i className="fas fa-bars navbar-element-padding"></i>
                    </li>
                    <li className="nav-item">
                        <Link to={`/home/${username}`}>
                            SPOONFUL LOGO
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        Search
                        <i className="fas fa-search navbar-element-padding"></i>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default RecipeNavBar