import logo from './assets/logo.svg';
import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Trainlist from './components/Trainlist'
import './components/Trainlist.css';
import FeedTrain from './components/FeedTrain';

function App() {
 
  return (
    <>
     <div className='flex flex-row justify-center items-center p-[10px] border-b-[2px] border-black'><img src={logo} alt="logo" height="76px" width="76px"/><h1 className='font-[pacifico] text-[32px]'>Railway Management System</h1></div>
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/trainlist' element={<Trainlist/>}/>
        <Route path='/admin/feeddata' element={<FeedTrain/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
