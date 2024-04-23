import '../css/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import Order from './Order.js';
import Login from './Login.js';
import Footer from './Footer.js';

import ScreenWidthProvider from './ScreenWidthProvider.js';

function App() {
  return (
    <div>
      <ScreenWidthProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/menu' element={<Menu/>} />
            <Route exact path='/reservations' element={<Reservations/>} />
            <Route exact path='/order' element={<Order/>} />
            <Route exact path='/login' element={<Login/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ScreenWidthProvider>
    </div>
  )
}

export default App
