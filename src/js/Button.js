import '../css/Button.css';
import React from 'react';

function Button(props) {
  return (
    <button className='Button-Parent' onClick={props.handleClick}>{props.text}</button>
  )
};

export default Button;