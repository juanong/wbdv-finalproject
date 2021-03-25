import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Sidebar from "../sidebar/sidebar";

// This is a GRID implementation of the navbar (idea is that this will be easier to collapse on smaller screens)
const RecipeNavBarV2 = ({username}) => {

    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="container navbar-container">
                <div className="row navbar-v2">
                    <div className="col-1 separation-padding">
                        <i onClick={showSideBar}
                           className="fas fa-bars fa-2x"></i>
                    </div>
                    <div className="col-5 separation-padding">
                        <span className="navbar-logo">Spoonful</span>
                    </div>
                    <div className="col-6 text-right separation-padding">
                        <i className="fas fa-search fa-2x"></i>
                    </div>
                </div>
            </div>
            <Sidebar sidebar={sidebar} showSidebar={showSideBar} username={username}/>
        </>
    )
}
export default RecipeNavBarV2