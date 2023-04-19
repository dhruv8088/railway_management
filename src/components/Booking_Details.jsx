import React, { useEffect } from 'react'
import './booking_details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Booking_Details = () => {

    const {x}=useParams()
    console.log(x)
    const [detail,setDetail]=useState([])
    
    useEffect(() => {
       
           axios.get(`http://127.0.0.1:8000/management/system/passengers/${x}/`).then((res)=>setDetail(res.data)).catch((e)=>{console.log(e)})    
    }, [])
    


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
    <div className="title" >Track-Ease</div>
    <div class="title">HAPPY JOURNEY</div>
  </div>
  <div class="content">
    <div class="row">
      <div class="label">Passenger Id:</div>
     
      <div class="value">
      {detail.P_ID}
      </div>
      </div> 
    <div class="row">
      <div class="label">Passenger Name:</div>
      <div class="value">
      {detail.P_Name}
      </div>
    </div>
    <div class="row">
      <div class="label">Gender</div>
      <div class="value">{detail.Gender}</div>
    </div>
    <div class="row">
      <i></i>
      <div class="label">Email</div>
      <div class="value">{detail.Email}</div>
    </div>
    <div class="row">
      <div class="label">Adhaar no.:</div>
      <div class="value">{detail.AadharNo}</div>
    </div>
    <div class="row">
      <div class="label">Age:</div>
      <div class="value">{detail.Age}</div>
    </div>
    <div class="row">
      <div class="label">Ticket Id:</div>
      <div class="value">{Math.floor(Math.random()*(99999-100+1)+100)}</div>
    </div>
    <div class="row">
      <div class="label">Train details:</div>
      <div class="value">{detail.train}</div>
    </div>
    <div class="row">
      <div class="label">Coach Number:</div>
      <div class="value">{detail.Coaches}</div>
      <div class="value"></div>
    </div>
    <div class="row">
      <div class="label">Seat Number:</div>
      <div class="value">{detail.Seat_number}</div>
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