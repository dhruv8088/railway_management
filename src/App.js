import logo from './assets/logo.svg';
import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import Booking from './components/Booking_Details'
import Trainlist from './components/Trainlist'
import './components/Trainlist.css';
import FeedTrain from './components/FeedTrain';
import UpdateTrain from './components/updatetrain';

function App() {
 
  return (
    <>
     <div className='flex flex-row justify-center items-center p-[10px] border-b-[2px] border-black'><img src={logo} alt="logo" height="76px" width="76px"/><h1 className='font-[pacifico] text-[32px]'>Railway Management System</h1></div>
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/trains' element={<Form/>}/>
        <Route path='/booked_ticket' element={<Booking/>}/>
        <Route path='/admin/trainlist' element={<Trainlist/>}/>
        <Route path='/admin/feeddata' element={<FeedTrain/>}/>
        <Route path='/admin/updatedata/:T_ID' element={<UpdateTrain/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
