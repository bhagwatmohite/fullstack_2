import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
     <>
    <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Full Stack Apllication</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link to='/adduser' className='btn btn-outlined-light ' > Add User </Link>
    
   </div>
</nav>



     </>
  )
}

export default Navbar