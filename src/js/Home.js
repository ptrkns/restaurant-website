import '../css/Home.css';
import '../css/Button.css';

import React from 'react';
import { Link } from 'react-router-dom';

import food from '../assets/food.jpg';
import marioAdrian1 from '../assets/mario-adrian-1.jpg';
import marioAdrian2 from '../assets/mario-adrian-2.jpg';

function Home() {

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className='Home-Parent'>
    <article className='Hero-Background'>
      <div className='Hero-Article'>
        <section className='Hero-Article-Left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with 
                a modern twist
            </p>
            <Link className='Link-Button' to="/reservations">Reserve a Table</Link>
        </section>
        <section className='Hero-Article-Right'>
            <img src={food} alt='Hero image'/>
        </section>
      </div>
    </article>
    <article className='Highlights-Article'>
      <section className='Highlights-Top'>
          <h1>This weeks specials!</h1>
          <Link className='Link-Button' to="/order">Order online</Link>
      </section>
      <section className='Highlights-Bottom'>
      </section>
    </article>
    <article className='About-Article'>
      <section className='About-Left'>
          <h1>About us</h1>
          <p>{loremIpsum}</p>
      </section>
      <section className='About-Right'>
          <img src={marioAdrian1} alt='Mario and Adrian' className='img1'/>
          <img src={marioAdrian2} alt='Mario and Adrian' className='img2'/>
      </section>
    </article>
    </div>
  );
}

export default Home;