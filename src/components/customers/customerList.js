import React from 'react'

export default function CustomerList(props) {
  function renderCustomers() {
    return props.customers.map((customer, i) => {
      return (
        <tr key={customer._id}>
          <th>{customer.name}</th>
          <th> {customer.createdBy}</th>
        </tr>
      );
    })
  }
  return (
    <table
      className="styled-table"
      style={{ marginLeft: "10vw", width: "80vw" }}
    >
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>CreatedBy</th>
        </tr>
      </thead>
      <tbody>
        {renderCustomers()}
      </tbody>
    </table>
  )
}
