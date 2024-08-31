import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className="p-2 mb-2  bg-light rounded-3">
        <div className="container-fluid py-5 w-75">
            <h2 className="display-5 fw-bold my-4">User Management App</h2>
            <Link to="/" className="btn btn-primary" type="button" >Show users</Link>
            <Link to="/user/create" className="btn btn-primary ms-3" type="button" >Add user</Link>
        </div>
    </div>
    )
    }
    
export default Navbar