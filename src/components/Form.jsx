import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div>
         <form
        //   action="/booked_ticket" method="post"
         >
        <div class="mains">
            <h1>Enter Your Details</h1>
        </div>
        
            <div class="containers">
            <p class="mandetory">*required fields are followed by</p>
            <p>First Name:*<input class="first_name" type="text" name="first_name" required/></p>
            <p>Last Name:*<input class="last_name" type="text" name="last_name" required/></p>
            <p>Gender*
                <select class="gender" name="gender" id="gender" required>
                    <option value="">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Others</option>
                </select>
            </p>
            <p>Age:*<input class="mobile" type="number" name="age" required/></p>
            <p>Email:*<input class="email" type="email" name="email" required/></p>
            <p>Aadhaar No.:*<input class="adhar" type="number" name="adhar" required/></p>
            <p>Mobile No.:*<input class="mobile" type="number" name="mobile" required/></p>
                <center><input type="submit" className='sub' value="Book Now" /></center>
        </div>
    </form>
    </div>
  )
}

export default Form