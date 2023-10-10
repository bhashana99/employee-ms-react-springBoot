import React from 'react'

const NewEmployeeComponent = () => {
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
                    
                    
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                  
                   
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">E-Mail:</label>
                  <input
                    type="email"
                    placeholder="Enter e-mail"
                    name="email"
                    className="form-control"
                   
                   
                  />
                  
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">NIC:</label>
                  <input
                    type="text"
                    placeholder="National Identity Card Number"
                    name="nic"
                    className="form-control mb-3"
                  
                   
                  />
                </div>

                <button
                  className="btn btn-success"
                  
                  
                >
                  Submit
                </button>
                <button  className="btn btn-danger" style={{marginLeft:"10px"}}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEmployeeComponent
