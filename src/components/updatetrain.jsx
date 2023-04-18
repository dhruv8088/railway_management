import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const UpdateTrain = () => {
    const {T_ID}=useParams()
    const [scheduleId,setScheduleId]=useState(0)
    const [source,setSource]=useState('')
    const [destination,setDestination]=useState('')
    const [startT,setStartT]=useState('')
    const [endT,setEndT]=useState('')
    const [stationId,setStationId]=useState(0)
    const [stationName,setStationName]=useState('')
    const [place,setPlace]=useState('')
    const train =[
        {
            'key':1,
            'T_Name':"Malwa Express",
            'T_ID':'12344',
            'T_type':'Passenger'
        }
    ]
    const track =[
        {
            "Track_no":111,
            "length":703
        }
    ]
    const station =[
        {
            "url": "https://127.0.0.1:8000/management/system/station/1/",
            "S_id": "1",
            "S_Name": "Bina Jn",
            "Place": "MP",
            "track": "https://127.0.0.1:8000/management/system/tracks/141/"
        }
    ]
    
    const schedule =[
        {
            "url": "https://127.0.0.1:8000/management/system/schedule/1/",
            "S_id": "1",
            "S_Name": "Bhopal",
            "Place": "Kolkata",
            "Start_time": "2023-05-04T08:30:00Z",
            "End_time": "2023-05-05T15:15:00Z"
        }
    ]

    
  return (
    <div className='flex flex-col m-[5px] gap-[10px] h-[200%] justify-center items-center' >
    {train.map((tra)=>(<div key={tra.key} className='flex m-[10px] flex-col border-[1px] m-[15px] h-[70%] w-[80%]'>
    <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Train Details</div>
    <div className='m-[20px] flex flex-[9] gap-[15px] justify-evenly items-start'>
    <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Name</h1><input readonly="readonly" className='p-[5px]' value={tra.T_Name}/></div>
    <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Number</h1><input readonly="readonly" className='p-[5px]' value={tra.T_ID}/></div>
    <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Type</h1><input readonly="readonly" className='p-[5px]' value={tra.T_type}/></div>
    </div>
    {/* <div className='flex justify-center items-center w-[100%] m-[20px]'><button className='flex bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleTrain}>Submit</button></div> */}
    </div>))}
    {track.map((tra)=>(<div key={tra.key} className='m-[5px] flex flex-col border-[1px] m-[15px] h-[70%] w-[80%]'>
    <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add Track</div>
    <div className='m-[20px] flex flex-[9] gap-[15px] justify-evenly items-start'>
    <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Track Number</h1><input readonly="readonly" className='p-[5px]' value={tra.Track_no} placeholder="Track Number"/></div>
    <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Track Length</h1><input readonly="readonly" className='p-[5px]' value={tra.length}  placeholder="Train Length"/></div>
   </div>
    {/* <div className='flex justify-center m-[20px] items-center w-[100%]'><button className='flex bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleTrack}>Submit</button></div> */}
    </div>))}
   { schedule.map((sch)=>(<div key={sch.key} className='m-[5px] flex flex-col gap-[5px] border-[1px] m-[15px] h-[70%] w-[80%]'>
    <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add New Schedule</div>
    <div className='m-[20px] grid grid-cols-3 content-evenly justify-evenly gap-x-40'>
    <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Schedule Id</h1><input readonly="readonly" className='p-[5px]' value={sch.S_id}/></div>
    <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Source</h1><input className='p-[5px]' readonly="readonly" value={sch.S_Name} /></div>
    <div className='grid grid-rows-2 h-[70px]'><h1 className='font-[Poppins] text-[20px]'>Destination</h1><input className='p-[5px]' readonly="readonly" value={sch.Place}/></div>
    <div className='grid grid-rows-2 h-[70px]'><h1 className='font-[Poppins] text-[20px]'>Start Time</h1><input value={sch.Start_time} readonly="readonly" className='p-[5px]'/></div>
    <div className='grid grid-rows-2  h-[70px]'><h1 className='font-[Poppins] text-[20px]'>End Time</h1><input value={sch.End_time} readonly="readonly" className='p-[5px]'/></div>
    </div>
    {/* <div className='flex justify-center items-center m-[20px] w-[100%]'><button className='flex  bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleSchedule}>Submit</button></div> */}
    </div>))}
    {station.map((stat)=>(<div key={stat.key} className='m-[5px] flex flex-col gap-[5px] border-[1px] m-[15px] h-[70%] w-[80%]'>
    <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add New Station</div>
    <div className='m-[20px] grid grid-cols-3 content-evenly justify-evenly gap-x-40'>
    <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Station Id</h1><input readonly="readonly" className='p-[5px]' value={stationId} placeholder="Station Id"/></div>
    <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Station Name</h1><input className='p-[5px]' value={stationName} onChange={(event)=>{setStationName(event.target.value)}} placeholder="Station Name"/></div>
    <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Place</h1><input className='p-[5px]' value={place} onChange={(event)=>{setPlace(event.target.value)}} placeholder="Place"/></div>
    </div>
    {/* <div className='flex justify-center items-center m-[20px] w-[100%]'><button className='flex  bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleStation}>Submit</button></div> */}
    </div>

    ))}
</div>
  )
}

export default UpdateTrain