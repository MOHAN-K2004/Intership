import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbarbox'>
      <div className='navbarbox-left'>
      <p>Student</p>
      <p className='navbarbox-left-management'>Mangement</p>

      </div>
      <div className='navbarbox-right'>
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p>Staff</p>
      </div>
    </div>
  )
}

export default Navbar