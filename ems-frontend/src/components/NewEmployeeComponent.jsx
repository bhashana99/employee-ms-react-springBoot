import React from 'react'

const NewEmployeeComponent = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center text-primary ">Add New Employee</h2>
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
                  <label className="form-label fw-bold">National Identity Card Number:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="nic"
                    className="form-control"
                  
                   
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
