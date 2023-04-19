import React from 'react'
import './form.css'
import { Link ,useNavigate, useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { click } from '@testing-library/user-event/dist/click'

const Form = () => {
    const {T_ID}=useParams()
    console.log(T_ID)

    
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [gender,setGender]=useState('');
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState('');
    const [adhaar,setAdhaar]=useState('');
    const [mob,setMob]=useState(0);
    const [check,setCheck]=useState(false)
    const navigate = useNavigate();
  

    const navigatetoform = () => {
        navigate(`/booked_ticket/${x}`);
      };
    let x=Math.floor(Math.random()*(9999999-100+1)+100);
    const handleTrain=async()=>{
        await axios.post('http://127.0.0.1:8000/management/system/passengers/',{
        "P_ID" :x,
        "P_Name" :fname+lname,
        "Gender" : gender,
        "Email" :email,
        "AadharNo" : adhaar,
        "Age" :age ,
        "Seat_number" :Math.floor(Math.random()*(99-10+1)+10) ,
        "Coaches" : 'B1',
         "train" :`http://127.0.0.1:8000/management/system/train/${T_ID}/` 
        }).then(res=>{if(res.status===201)setCheck(true)}).catch((e)=>{console.log(e)})
        
    }




  return (
    <div>
         <form
            // action="/booked_ticket" method="post"
         >
        <div class="mains">
            <h1>Enter Your Details</h1>
        </div>
        
            <div class="containers">
            <p class="mandetory">*required fields are followed by</p>
            <p>First Name:*<input class="first_name" type="text" name="first_name" required value={fname} onChange={(event)=>{setFname(event.target.value)}}/></p>
            <p>Last Name:*<input class="first_name" type="text" name="first_name" required value={lname} onChange={(event)=>{setLname(event.target.value)}}/></p>
            <p>Gender:*<input class="last_name" type="text" name="gender" required value={gender} onChange={(event)=>{setGender(event.target.value)}} placeholder="M/F"/></p>
            {/* <p>Gender*
                <select class="gender" name="gender" id="gender" required value={gender} onSelect={(event)=>{setGender(event.target.value)}}>
                    <option value="">Choose</option>
                    <option value="male">M</option>
                    <option value="female">F</option>
                </select>
            </p> */}
            <p>Age:*<input class="mobile" type="number" name="age" required value={age} onChange={(event)=>{setAge(event.target.value)}}/></p>
            <p>Email:*<input class="email" type="email" name="email" required value={email} onChange={(event)=>{setEmail(event.target.value)}}/></p>
            <p>Aadhaar No.:*<input class="adhar" type="number" name="adhar" required value={adhaar} onChange={(event)=>{setAdhaar(event.target.value)}}/></p>
            <p>Mobile No.:*<input class="mobile" type="number" name="mobile" required value={mob} onChange={(event)=>{setMob(event.target.value)}}/></p>
                <center><button className='but' value={click} onClick={()=>{handleTrain(); navigatetoform();}} >Book Now</button></center>
        </div>
    </form>
    </div>
  )
}

export default Form