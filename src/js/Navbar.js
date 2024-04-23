import '../css/Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useScreenWidth } from './ScreenWidthProvider.js';

function Navbar(props) {

  const screenWidth = useScreenWidth();

  const handleClick = () => {
    if(screenWidth < 1375) {
      props.setHamburgerClick(!props.hamburgerClick);
    }
  }

  return (
    <div className='Navbar-Parent'>
      <ul className='Navbar-UL'>
        <li><Link className='Nav-Link' to='/' onClick={handleClick}>Home</Link></li>
        <li><Link className='Nav-Link' to='/about' onClick={handleClick}>About</Link></li>
        <li><Link className='Nav-Link' to='/menu' onClick={handleClick}>Menu</Link></li>
        <li><Link className='Nav-Link' to='/reservations' onClick={handleClick}>Reservations</Link></li>
        <li><Link className='Nav-Link' to='/order' onClick={handleClick}>Order online</Link></li>
        <li><Link className='Nav-Link' to='/login' onClick={handleClick}>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar