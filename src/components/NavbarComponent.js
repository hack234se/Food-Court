import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/style.css'
export const Navbar = ()=>{
    return (
       
<nav className="navbar">
   
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
