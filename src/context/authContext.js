import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined)
    async function getLoggedIn() {
        const res = await axios.get("https://auth-api-vkc5.onrender.com/auth/loggedIn");
        // console.log(res,res.data);
        setLoggedIn(res.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, [])
    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>);
}

export default AuthContext;
export { AuthContextProvider };