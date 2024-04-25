import '../css/Reservations.css';
import React from 'react';
import { useState } from 'react';
import ReservationForm from './ReservationForm.js';
import Confirmation from './Confirmation.js';

function Reservations() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='Reservations-Parent'>
      <div className='Reservation-Form'>
        <ReservationForm setSubmitted={setSubmitted}/>
      </div>
    </div>
  )
};

export default Reservations;