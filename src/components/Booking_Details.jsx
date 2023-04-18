import React from 'react'
import './booking_details.css'

const Booking_Details = () => {
  return (
    <div>
 
 <body>
 <div className='success'>
    Ticket Booked successfully!!
 </div>
    <div>
        <h1 className="color: grey; font-family: Times New Roman, Times, serif;">, Indian Railways wishes you happy journey!</h1>
    </div>
    <div class="ticket">
  <div class="header">
    <div className="title" >INDIAN  RAILWAY</div>
    <div class="title">HAPPY JOURNEY</div>
  </div>
  <div class="content">
    <div class="row">
      <div class="label">Passenger:</div>
      
      </div> 
    <div class="row">
      <div class="label">From:</div>
      <div class="value"></div>
    </div>
    <div class="row">
      <div class="label">To:</div>
      <div class="value"></div>
    </div>
    <div class="row">
      <i></i>
      <div class="label">Date:</div>
      <div class="value"></div>
    </div>
    <div class="row">
      <div class="label">Time:</div>
      <div class="value"></div>
    </div>
    <div class="row">
      <div class="label">Ticket Id:</div>
      <div class="value"></div>
    </div>
  </div>

  {/* <div class="footer">
    <div class="disclaimer">Valid for one trip on the date and time specified above. Non-refundable.</div>
  </div> */}
</div>
</body>
    </div>
  )
}

export default Booking_Details