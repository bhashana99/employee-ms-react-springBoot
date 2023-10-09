import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <header >
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark ' style={{height:"70px"}} >
            <div>
                <a href="#" className="navbar-brand fs-3 ">Employee Management Application</a>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
