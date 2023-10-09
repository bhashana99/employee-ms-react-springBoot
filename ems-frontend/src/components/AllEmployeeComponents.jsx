import React from 'react'
import { useState } from 'react';

const AllEmployeeComponents = () => {

    const [employees, setEmployees] = useState([]);


  return (
    <div>
      <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold">List of All Employees</h2>
      <table className="table table-striped table-bordered text-center mt-4">
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>NIC Number</th>
                
            </tr>
          
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Bhashana</td> 
            <td>Chamodya</td> 
            <td>bhashanachamodya99@gmail.com</td> 
            <td>992830352v</td> 
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AllEmployeeComponents
