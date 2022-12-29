import React, { useState,useEffect } from 'react'
import CustomerForm from './customerForm';
import CustomerList from './customerList';
import axios from 'axios';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    try {
      const gotCstomers = await axios.get("https://auth-api-vkc5.onrender.com/customer")
      setCustomers(gotCstomers.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCustomers()
  }, [])


  return (
    <>
      <h1>Customers</h1>
      <CustomerForm getCust = {getCustomers} />
      <CustomerList customers = {customers}/>
    </>
  )
}
