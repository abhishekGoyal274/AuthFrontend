import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../context/authContext';
import LogoutBtn from '../auth/logoutBtn';

function Navbar() {
    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn);
    return (
        <>
            <Link to="/">Home</Link>
            {
                loggedIn === false && (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )
            }
            {
                loggedIn === true && (
                    <>
                        <Link to="/customers">Customrs</Link>
                        <LogoutBtn/>
                    </>
                )
            }
        </>
    )
}

export default Navbar