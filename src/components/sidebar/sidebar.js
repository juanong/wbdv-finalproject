import React from 'react'
import './sidebar-items'
import {Link, useHistory} from "react-router-dom";
//import {SidebarItems} from "./sidebar-items";
import './sidebar.style.css'
import usersService from '../../services/users-service'

const Sidebar = ({sidebar, showSidebar, username, userLoggedIn}) => {

    const history = useHistory()

    const logout = () => {
        usersService.logout()
            .then((response) => history.push("/"))
    }

    const goToProfile = (itemPath) => {
        history.push(itemPath)
        history.go(0)
    }

    const SidebarItems = [
        {
            pageName: 'Home',
            path: '/home',
            cName: 'nav-text'
        },
        {
            pageName: 'Search',
            path: '/search',
            cName: 'nav-text'
        },
        {
            pageName: 'Profile',
            path: '/profile',
            cName: 'nav-text'
        }
    ]

    return (
        <div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <i onClick={showSidebar} className="fas fa-times fa-2x"
                           style={{color: "white"}}></i>
                    </li>
                    {
                        SidebarItems.map((item, index) => {
                            if (item.pageName === 'Profile') {
                                if (userLoggedIn && userLoggedIn.username) {
                                    return (
                                        <li onClick={() => goToProfile(item.path)} key={index}
                                            className={item.cName}>
                                            <Link>
                                                {item.pageName}
                                            </Link>
                                        </li>
                                    )
                                }
                            } else {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.pageName}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                    {
                        userLoggedIn && userLoggedIn.username && <button className="btn btn-primary"
                                                         onClick={logout}>Logout</button>
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar