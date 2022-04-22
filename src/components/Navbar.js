import React from 'react'
import './navbar.css'
import {
    Link
  } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
     <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/About'>About</Link>
       </li>
       <li>
         <Link to="/Contact">Contact</Link>
        </li>
        <li>
         <Link to="/Product">Product</Link>
        </li> 
  </ul>
    </div>
  )
}

export default Navbar