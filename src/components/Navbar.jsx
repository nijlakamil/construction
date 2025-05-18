import React from 'react';
import conlogo from '../assets/conlogo.png';
import './Navbar.css';
function Navbar() {
  return (
    <div  className='navbar'>
       <div className="navbar-brand">
        <div className='logo'> <img src={conlogo} alt="logo-image" className='logo-img' /></div>
      <div className='company'>
        <h1>BuildRight Solutions</h1>
      </div>
      </div>
       <ul className="navbar-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
    </div>
  )
}

export default Navbar
