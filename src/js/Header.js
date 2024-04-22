import '../css/Header.css';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger-menu.svg';

function Header() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleClick = () => {
    setHamburgerClick(!hamburgerClick);
  }

  return (
    <div className='Header-Parent'>
        {windowWidth < 701 && <div className='Header-Container'>

          <div className='Logo-Icon-Container'>
            <Link to='/' onClick={()=>{setHamburgerClick(false)}}><img src={logo}/></Link>
            <img src={hamburger} onClick={handleClick}/>
          </div>

          {hamburgerClick === true && <Navbar hamburgerClick={hamburgerClick} setHamburgerClick={setHamburgerClick}/>}

        </div>}

        {windowWidth >= 701 && <div className='Header-Container'>

          <Link to='/'><img src={logo}/></Link>
          <Navbar/>

        </div>}
    </div>
  )
}

export default Header;
