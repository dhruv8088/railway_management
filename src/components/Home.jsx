import React from 'react'
import './home.css'


function Home() {
  return (
    <body>
    <header>
      <nav>
      <div className="logo"><h1 class="a">Indian Railways</h1></div>
        {/* <div class="menu">
          <a href="#">Home</a>
          <a href="BookedTickets.php?email=<?php echo $em; ?>">Tickets</a>
          <a href="#">About</a>
          <a href="index.php">Logout</a>
        </div> */}
      </nav>
      <main>
        <div className="container">
          <form action="BookTicketDb.php" method="post">
            <h1 className="form-title">Book Your Ticket</h1>
            <div className="main-user-info">
            <div className="user-input-box">
              <label for="Departure">Departure</label>
              <input
                type="text"
                name="departure"
                id="Departure"
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
              />
            </div>
            <div className="user-input-box">
              <label for="Trip">Choose your Trip: </label>
              <select id="Trip" name="trip">
                <option value="One-Way">One-Way</option>
                <option value="Round-Trip">Round-Trip</option>
              </select>
            </div>
            <div class="user-input-box">
              <label for="Date">Date</label>
              <input type="date" name="date" id="Date" required />
            </div>
            <div className="form-submit-btn">
              <input className="display: block; width: 600px; cursor: pointer;" type="submit" value="Show Trains"/>
            </div>
            </div>
          </form>
        </div>
        
      </main>
    </header>
  </body>
    // <header>
    // <div className='flex justify-center items-center'>
    // {/* <h1 className='font-[pacifico] text-[52px]'>Railway Managment System</h1> */}
    // <nav>
    // <div class="logo"><h1 class="a">Indian Railways</h1></div>
    // </nav>
    // <main>
    // <div class="container">
    //       <form action="BookTicketDb.php" method="post">
    //         <h1 class="form-title">Book Your Ticket</h1>
    //         <div class="main-user-info">
    //         <div class="user-input-box">
    //           <label for="Departure">Departure</label>
    //           <input
    //             type="text"
    //             name="departure"
    //             id="Departure"
    //             required
    //           />
    //         </div>
    //         <div class="user-input-box">
    //           <label for="Arrival">Arrival</label>
    //           <input
    //             type="text"
    //             name="arrival"
    //             id="Arrival"
    //             required
    //           />
    //         </div>
    //         <div class="user-input-box">
    //           <label for="Trip">Choose your Trip: </label>
    //           <select id="Trip" name="trip">
    //             <option value="One-Way">One-Way</option>
    //             <option value="Round-Trip">Round-Trip</option>
    //           </select>
    //         </div>
    //         <div class="user-input-box">
    //           <label for="Date">Date</label>
    //           <input type="date" name="date" id="Date" required />
    //         </div>
    //         <div class="form-submit-btn">
    //           <input  type="submit" value="Book Now"/>
    //         </div>
    //         </div>
    //       </form>
    //     </div>
    //     </main>
    // </div>
   
    // </header>
  )
}

export default Home