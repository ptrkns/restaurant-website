import '../css/Confirmation.css';
import React from 'react';

function Confirmation(props) {
  return (
    <div className='Confirmation-Parent'>
      {props.content}
    </div>
  )
};

export default Confirmation;
