import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import Booking from './components/Booking_Details'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/trains' element={<Form/>}/>
        <Route path='/booked_ticket' element={<Booking/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
