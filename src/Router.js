import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Register from "./components/auth/register"
import Login from "./components/auth/login"
import Customers from "./components/customers/customers"
import NoPage from "./components/noPage"
import Navbar from './components/layout/navbar';
import AuthContext from './context/authContext';

function Router() {
    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                {
                    loggedIn === false && (
                        <>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )
                }
                {
                    loggedIn === true && (
                        <>
                            <Route path="/customers" element={<Customers />} />
                        </>
                    )
                }
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;