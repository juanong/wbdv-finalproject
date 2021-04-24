import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Sidebar from "../sidebar/sidebar";

// This is a GRID implementation of the navbar (idea is that this will be easier to collapse on smaller screens)
const RecipeNavBarV2 = ({username, userLoggedIn}) => {

    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar-v2">
                <div>
                    <i onClick={showSideBar}
                       className="fas fa-bars fa-2x"></i>
                </div>
            </div>
            <Sidebar sidebar={sidebar} showSidebar={showSideBar} username={username} userLoggedIn={userLoggedIn}/>
        </>
    )
}
export default RecipeNavBarV2