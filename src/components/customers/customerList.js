import React from 'react'

export default function CustomerList(props) {
  function renderCustomers() {
    return props.customers.map((customer, i) => {
      return (
        <li key={customer._id}> Name: {customer.name},CreatedBy:{customer.createdBy}</li>
      );
    })
  }
  return (
    <ul>
      {renderCustomers()}
    </ul>
  )
}
