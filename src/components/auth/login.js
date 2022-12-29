import React, { useContext } from 'react'
import { useState } from 'react';
import { loginUser } from "../api/requests"
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {getLoggedIn} = useContext(AuthContext);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await loginUser(inputs);
      getLoggedIn();
      navigate("/customers");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={inputs.password || ""}
          onChange={handleChange}
        />

        <button type="submit" >Login</button>
      </form>
    </div>
  );
}
