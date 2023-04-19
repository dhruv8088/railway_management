import React from 'react'
import { Link } from 'react-router-dom'
import head from '../assets/head.svg'
import arrow from '../assets/arrow.svg'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Trains = () =>{
    const [trains,setTrains]=useState(null)
    useEffect(() => {
        const getTrains = async ()=>{
             await axios.get('http://127.0.0.1:8000/management/system/train/').then((res)=>{console.log(res);setTrains(res.data)}).catch((e)=>{console.log(e)})
        }
        if(trains===null ||trains ===undefined)
        getTrains();
    }, [trains])
    let i=1;
    

  return (
    <div className='flex flex-col m-[5px] gap-[10px] justify-center items-center' >
        <div className='m-[5px] flex flex-col border-[1px] m-[15px] h-auto w-[80%]'>
        <div className='flex flex-[1] items-start justify-between m-[20px]'>
            <span className='flex flex-col gap-[5px] flex-[4]'>
                <h1 className='text-[26px]'>List of Trains</h1>
               
            </span>
          
        </div>
        <div className='m-[20px] flex flex-col flex-[9] gap-[15px] justify-evenly items-start'>
        <div className='flex gap-[5px] w-full justify-stretch bg-[#FAFAFA] p-[15px] rounded-[10px]'>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>S No.</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train Name</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train No</span>
        <span className='flex flex-[2] justify-center text-[22px] items-center'>Train Type</span>
        </div>
        {trains && trains.map((train)=>{return(
            <div key={train.key} className='flex gap-[5px] w-full justify-stretch border-b-2'>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{i++}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_Name}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_ID}</span>
            <span className='flex flex-[2] justify-center text-[22px] items-center'>{train.T_type}</span>
            <Link to={`/trains/${train.T_ID}`} className='flex p-[5px] justify-center items-center bg-[#FAFAFA]'><img src={arrow} height="20px" width="20px" alt='arrow'/></Link>
        </div>
        )})}
        </div>
        </div>
    </div>
  )
}

export default Trains;