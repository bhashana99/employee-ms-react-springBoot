import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import EmployeeService from '../service/EmployeeService';

const NewEmployeeComponent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email, nic };

    // console.log(employee);

    EmployeeService.addEmployee(employee)
    .then((res)=>{
      
    })
    


  }


  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 mt-5 border border-4 shadow-lg">
            <h2 className="text-center text-primary shadow my-4 py-3 ">Add New Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                   
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">E-Mail:</label>
                  <input
                    type="email"
                    placeholder="Enter e-mail"
                    name="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                  />
                  
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">NIC:</label>
                  <input
                    type="text"
                    placeholder="National Identity Card Number"
                    name="nic"
                    className="form-control mb-3"
                    required
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                   
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveEmployee(e)}
                  
                >
                  Submit
                </button>
                <Link to='/employees' className="btn btn-danger" style={{marginLeft:"10px"}}>
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEmployeeComponent
