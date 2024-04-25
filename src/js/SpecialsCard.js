import '../css/SpecialsCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import basket from '../assets/icon-basket.svg';

function SpecialsCard(props) {

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  return (
    <div className='Specials-Card-Parent'>
      <div className='Image-Container'>
        <img src={props.image}/>
      </div>
      <div className='First-Row'>
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
      <div className='Second-Row'>
        <p>{loremIpsum}</p>
      </div>
      <div className='Button-Container'>
        <Link className='Link' to='/order'>Order online</Link>
        <img src={basket}/>
      </div>
    </div>
  )
};

export default SpecialsCard;