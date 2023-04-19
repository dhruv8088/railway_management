import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Home() {

  const navigate=useNavigate();
  const navigatetrain = () => {
    navigate('/trainlist');
  };

  const [departure,setDeparture]=useState('');
  
  const [arrival,setArrival]=useState('');
  const [date,setDate]=useState('');

  return (
    <body>
    <header>
   
    
      
      <main>
        <div className="container">
          <form >
            <h1 className="form-title">Book Your Ticket</h1>
            <div className="main-user-info">
            <div className="user-input-box">
              <label for="Departure">Departure</label>
              <input
                type="text"
                name="departure"
                id="Departure"
                value={departure} onChange={(event)=>{setDeparture(event.target.value)}}
                required
              />
            </div>
            <div className="user-input-box">
              <label for="Arrival">Arrival</label>
              <input
                type="text"
                name="arrival"
                id="Arrival"
                required
                value={arrival} onChange={(event)=>{setArrival(event.target.value)}}
              />
            </div>
            <div class="user-input-box">
              <label for="Date">Date</label>
              <input type="date" name="date" id="Date" required value={date} onChange={(event)=>{setDate(event.target.value)}} />
            </div>
            <div className="form-submit-btn">
            <button onClick={navigatetrain}>Book Now</button>
            </div>
            </div>
          </form>
        </div>
        
      </main>
    </header>
  </body>
   
  )
}

export default Home