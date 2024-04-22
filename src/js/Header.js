import '../css/Header.css';
import logo from '../assets/logo.svg';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';

function Header() {
  return (
    <div className='Header-Parent'>
        <Link to='/'><img src={logo}/></Link>
        <Navbar/>
    </div>
  )
}

export default Header;
