import React from 'react'
import { useState } from 'react';
import { registerCustomer } from '../api/requests';

export default function CustomerForm(props) {
  const [name, setName] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const customerData = { name: name };
      await registerCustomer(customerData);
      setName("");
      props.getCust();
    }
    catch (err) {
      alert(err.response.data.errorMessage)
      // console.error(err);
    }
  }
  return (
    <>
      <div className="form-container">

        {/******************** Register **************************/}
        <form className="register-form form-style-10" onSubmit={handleSubmit}>

          <h1>Register Customer</h1>

          {/* Section 1 */}
          <div className="section">
            <span>*</span>Customer Name
          </div>
          <div className="inner-wrap">
            <input
              type="text"
              value={name}
              placeholder="Customer Name"
              className="form-field"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>

          {/* ------------------------------------ */}

          <div className="button-section">
            <button
              className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
              type="submit"
            >
              Register Customer

            </button>
          </div>
        </form>
      </div>
    </>

  )
}
