import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../context/authContext';
import LogoutBtn from '../auth/logoutBtn';

function Navbar() {
    const { loggedIn } = useContext(AuthContext);
    // console.log(loggedIn);
    return (
        <>
            <nav
                className="navbar navbar-expand-md navbar-light bg-light"
                style={{
                    color: "white",
                    fontSize: "20px",
                    background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(26,35,126,1) 100%)",
                }}
            >
                <Link className="navbar-brand" to="/" style={{ color: "white", fontSize: "24px" }}>
                    Home
                </Link>{" "}
                <span className="sr-only">(current)</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {
                            loggedIn === false && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register" style={{ color: "white", }}>
                                            Register
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login" style={{ color: "white", }}>
                                            Login
                                        </Link>
                                    </li>
                                </>
                            )
                        }


                        {
                            loggedIn === true && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/customers" style={{ color: "white", }}>Customrs</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    {loggedIn === true && (
                        <LogoutBtn />
                    )}

                </div>
            </nav>

        </>
    )
}

export default Navbar