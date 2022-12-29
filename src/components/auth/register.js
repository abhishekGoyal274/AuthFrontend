import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../api/requests"
import AuthContext from '../../context/authContext';

export default function Register() {
  const { getLoggedIn } = useContext(AuthContext)
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
      alert(err.response.data.errorMessage)
      // console.log(err);
    }
  }
  return (
    <>
      <div className="form-container">

        {/******************** Register **************************/}
        <form className="register-form form-style-10" onSubmit={handleSubmit}>

          <h1>Register</h1>

          {/* Section 1 */}
          <div className="section">
            <span>*</span>Email ,Password and Password Verification
          </div>
          <div className="inner-wrap">
            <input
              type="email"
              name="email"
              className="form-field"
              placeholder='Email'
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              className="form-field"
              name="password"
              placeholder='Password'
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              className="form-field"
              name="passwordVerify"
              placeholder='Verify your password Password'
              value={inputs.passwordVerify || ""}
              onChange={handleChange}
            />
          </div>

          {/* ------------------------------------ */}

          <div className="button-section">
            <button
              className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
              type="submit"
            >
              Register

            </button>
          </div>
        </form>
      </div>
    </>
  );
}
