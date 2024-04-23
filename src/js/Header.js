import '../css/Header.css';

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar.js';
import logo from '../assets/Logo.svg';
import hamburger from '../assets/icon-hamburger-menu.svg';
import { useScreenWidth } from './ScreenWidthProvider.js';

function Header() {

  const screenWidth = useScreenWidth();
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const handleClick = () => {
    setHamburgerClick(!hamburgerClick);
  }

  return (
    <div className='Header-Parent'>
        {screenWidth < 701 && <div className='Header-Container'>
          <div className='Logo-Icon-Container'>
            <Link to='/' onClick={()=>{setHamburgerClick(false)}}><img src={logo}/></Link>
            <img src={hamburger} onClick={handleClick}/>
          </div>
          {hamburgerClick === true && <Navbar hamburgerClick={hamburgerClick} setHamburgerClick={setHamburgerClick}/>}
        </div>}

        {screenWidth >= 701 && <div className='Header-Container'>
          <Link to='/'><img src={logo}/></Link>
          <Navbar/>
        </div>}
    </div>
  )
}

export default Header;
