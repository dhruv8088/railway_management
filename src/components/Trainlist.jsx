import React from 'react'
import { Link } from 'react-router-dom'
import head from '../assets/head.svg'
import arrow from '../assets/arrow.svg'

const Trainlist = () =>{
    const trains=[
        {
            'key':1,
            'T_Name':"Malwa Express",
            'T_ID':'12344',
            'T_type':'Passenger'
        },
        {
            'key':2,
            'T_Name':"Punjab Mail",
            'T_ID':'12357',
            'T_type':'Luxury'
        },
        {
            'key':3,
            'T_Name':"Patalkot Express",
            'T_ID':'12317',
            'T_type':'Passenger'
        },
        {
            'key':4,
            'T_Name':"Rajdhani Express",
            'T_ID':'12847',
            'T_type':'Luxury'
        },
        {
            'key':5,
            'T_Name':"Shatabdi Express",
            'T_ID':'11947',
            'T_type':'Luxury'
        }
    ]
  return (
    <div className='flex flex-col m-[5px] gap-[10px] justify-center items-center' >
        <div className='m-[5px] flex flex-col border-[1px] m-[15px] h-auto w-[80%]'>
        <div className='flex flex-[1] items-start justify-between m-[20px]'>
            <span className='flex flex-col gap-[5px] flex-[4]'>
                <h1 className='text-[26px]'>List of Trains</h1>
                <h2 className='text-[20px]'>Total No-345</h2>
            </span>
            <Link to="/admin/feeddata" className='flex flex-[0.8] bg-[#6A1B9A] text-white text-[22px] rounded-[10px] h-[40px] p-[2px] justify-around items-center'><img src={head} height='30px' width='30px' alt='head'/>Add New Train</Link>
        </div>
        <div className='m-[20px] flex flex-col flex-[9] gap-[15px] justify-evenly items-start'>
        <div className='flex gap-[5px] w-full justify-stretch bg-[#FAFAFA] p-[15px] rounded-[10px]'>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>S No.</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train Name</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train No</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train Type</span>
        </div>
        {trains.map((train)=>(
            <div key={train.key} className='flex gap-[5px] w-full justify-stretch border-b-2'>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.key}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_Name}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_ID}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_type}</span>
            <Link to={`/admin/updatedata/${train.T_ID}`} className='flex p-[5px] justify-center items-center bg-[#FAFAFA]'><img src={arrow} height="20px" width="20px" alt='arrow'/></Link>
        </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Trainlist