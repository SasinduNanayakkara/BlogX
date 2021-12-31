import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

    const logout = () =>{ //logout function
        window.open("http://localhost:5000/auth/logout", "_self"); //call the backend logout function
    }
    return (
        <div className='navbar'>
            <span className='logo'>
                <Link className='link' to="/">
                    Tech Blog
                </Link>
            </span> 
            
            {user ? ( //is user logged in to the system
                
                    <ul className="list">
                    <li className="listItem">
                        <img src={user.photos[0].value} className='avatar' alt="" srcset="" />
                    </li>
                    <li className="listItem">{user.displayName}</li>
                    <li className="listItem" onClick={logout}>Logout</li>
                </ul>
            ) : ( //is user not logged in to the system 
                <Link className='link' to="login">Login</Link> //redirect to the login page
            )}
        </div>
    )
}

export default Navbar
