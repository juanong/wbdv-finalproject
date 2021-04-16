import React from 'react'
import './sidebar-items'
import {Link} from "react-router-dom";
import {SidebarItems} from "./sidebar-items";
import './sidebar.style.css'

const Sidebar = ({sidebar, showSidebar, username}) => {


    return (
        <div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <i onClick={showSidebar} className="fas fa-times fa-2x" style={{color: "white"}}></i>
                    </li>
                    {
                        SidebarItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path === '/home' ? `/home/${username}` : item.path}>
                                        {item.pageName}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar