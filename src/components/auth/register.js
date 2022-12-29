import React, { useContext} from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../api/requests"
import AuthContext from '../../context/authContext';

export default function Register() {
  const {getLoggedIn} = useContext(AuthContext)
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await registerUser(inputs);
      await getLoggedIn()
      navigate("/customers")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Register</h1>
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
        <input
          type="password"
          name="passwordVerify"
          placeholder='Verify your password Password'
          value={inputs.passwordVerify || ""}
          onChange={handleChange}
        />

        <button type="submit" >Register</button>
      </form>
    </div>
  );
}
