import '../css/Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar-Parent'>
      <ul className='Navbar-UL'>
        <li><Link className='Nav-Link' to='/'>Home</Link></li>
        <li><Link className='Nav-Link' to='/about'>About</Link></li>
        <li><Link className='Nav-Link' to='/menu'>Menu</Link></li>
        <li><Link className='Nav-Link' to='/reservations'>Reservations</Link></li>
        <li><Link className='Nav-Link' to='/order'>Order online</Link></li>
        <li><Link className='Nav-Link' to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar