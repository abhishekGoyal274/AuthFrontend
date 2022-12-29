import React from 'react'
import { useState } from 'react';
import { registerCustomer } from '../api/requests';

export default function CustomerForm(props) {
  const [name, setName] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const customerData = {name: name}; 
      await registerCustomer(customerData);
      setName("");
      props.getCust();
     }
    catch (err) {
      console.error(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      Customer Name:
      <input
        type="text"
        value={name}
        placeholder="Customer Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="submit"> Submit </button>
    </form>
  )
}
