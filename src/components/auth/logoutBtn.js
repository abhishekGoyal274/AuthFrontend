import React, { useContext } from 'react'
import { logoutUser } from '../api/requests'
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function LogoutBtn() {
    const {getLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const logout = async ()=>{
        await logoutUser();
        await getLoggedIn();
        navigate("/login")
    }
  return (
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>
        Logout
    </button>

  )
}
