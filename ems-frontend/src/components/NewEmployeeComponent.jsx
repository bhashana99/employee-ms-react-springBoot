import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

const NewEmployeeComponent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email, nic };

    // console.log(employee);

    EmployeeService.addEmployee(employee)
    .then((res)=>{

      Toast.fire({
        icon: 'success',
        title: 'Add new employee successful'
      });

      navigate("/employees");

    })
    
  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setEmail(response.data.nic);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
