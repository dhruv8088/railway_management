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
import Trains from './components/Trains'
import Coverpg from './components/Coverpg';
function App() {
 
  return (
    <>
     <div className='flex flex-row justify-center items-center p-[10px] border-b-[2px] border-black'><img src={logo} alt="logo" height="76px" width="76px"/><h1 className='font-[pacifico] text-[32px]'>Railway Management System</h1></div>
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/123' element={<Home/>}/>
        <Route path='/' element={<Coverpg/>}/>
        <Route path='/trains/:T_ID' element={<Form/>}/>
        <Route path='/booked_ticket/:x' element={<Booking/>}/>
        <Route path='/admin/trainlist/' element={<Trainlist/>}/>
        <Route path='/admin/feeddata' element={<FeedTrain/>}/>
        <Route path='/trainlist' element={<Trains/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
