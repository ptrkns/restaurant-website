import '../css/ReservationForm.css';
import '../css/Button.css';
import React from 'react';
import { useState, useEffect } from 'react';

function ReservationForm(props) {

    const [reservation, setReservation] = useState({
        fullName: '',
        phone: '',
        email: '',
        numberOfDiners: 1,
        date: '',
        time: '12:00',
        occasion: 'Just eating out',
        requirement: ''
    });
    const [reservations, setReservations] = useState([]);

    const onDateChange = (e) => {
        setReservation(prev => ({...prev, date:e.target.value}));
        props.updateTimes(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!reservation.date || !reservation.time || !reservation.occasion || !reservation.fullName || !reservation.phone || !reservation.email){
            alert("Can't book the table until the required fields are filled.");
        } else {
            setReservations(prev => [...prev, reservation]);
            setReservation({
                fullName: '',
                phone: '',
                email: '',
                numberOfDiners: 1,
                date: '',
                time: '',
                occasion: '',
                requirement: ''
            });
            const result = await props.submitForm(reservation);
            if(result === true) { props.setSubmitted(true); }
        }
    }

    useEffect(() => {}, [reservation, reservations])

    return (
        <div className='Reservation-Form-Parent'>
            <form onSubmit={handleSubmit}>

                {/* Reservation Data */}
                <section className='Reservation-Input-Fields'>
                    <h1>Reservation Info</h1>
                    <div className='Input-Container'>
                        <label htmlFor='Diners-Input'>Number of diners*</label>
                        <input type='number' id='Diners-Input' min='2' max='15' defaultValue={reservation.numberOfDiners} onChange={(e) => setReservation(prev => ({...prev, numberOfDiners:e.target.value}))} required aria-required="true"/>
                    </div>
                    <div className='Input-Container'>
                        <label htmlFor='Time-Date-Input'>Date and time*</label>
                        <div className='Time-Date-Div'>
                            <input type='date' id='Time-Date-Input' defaultValue={reservation.date} onChange={(e) => onDateChange(e)} required aria-required="true"/>
                            <select id='Time-Date-Input' defaultValue={reservation.time} onChange={(e) => setReservation(prev => ({...prev, time:e.target.value}))}>
                                TimeOptions
                            </select>
                        </div>
                    </div>
                    <div className='Input-Container'>
                        <label htmlFor='Occasion-Input'>Occasion</label>
                        <select id='Occasion-Input' defaultValue={reservation.occasion} onChange={(e) => setReservation(prev => ({...prev, occasion:e.target.value}))}>
                            <option>Just eating out</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Buisness event</option>
                        </select>
                    </div>
                    <div className='Input-Container'>
                        <label htmlFor='Requirements-Input'>Special requirements</label>
                        <textarea type='text'rows='2' cols='1' id='Requirements-Input' defaultValue={reservation.requirement} onChange={(e) => setReservation(prev => ({...prev, requirement:e.target.value}))}/>
                    </div>
                </section>

                {/* Personal Data */}
                <section className='Personal-Data-Input-Fields'>
                    <h1>Personal Info</h1>
                    <div className='Input-Container'>
                        <label htmlFor='Full-Name-Input'>Enter your full name!*</label>
                        <input type='text' id='Full-Name-Input' defaultValue={reservation.fullName} onChange={(e) => setReservation(prev => ({...prev, fullName:e.target.value}))} required aria-required="true"/>
                    </div>
                    <div className='Input-Container'>
                        <label htmlFor='Phone-Input'>Phone number*</label>
                        <input type='tel' id='Phone-Input' defaultValue={reservation.phone} onChange={(e) => setReservation(prev => ({...prev, phone:e.target.value}))} required aria-required="true"/>
                    </div>
                    <div className='Input-Container'>
                        <label htmlFor='Email-Input'>Email address*</label>
                        <input type='email' id='Email-Input' defaultValue={reservation.email} onChange={(e) => setReservation(prev => ({...prev, email:e.target.value}))} required aria-required="true"/>
                    </div>
                    <div className='Button-Container'>
                        <input type='submit' disabled={props.submitted} value='Book table' className='Button-Parent'/>
                    </div>
                </section>
            </form>
        </div>
    )
};

export default ReservationForm;
