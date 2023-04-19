import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FeedTrain = () => {
    const [trainNum,setTrainNum]=useState(0)
    const [trainName,setTrainName]=useState('')
    const [trainType,setTrainType]=useState('')
    const [trackNum,setTrackNum]=useState(0)
    const [trackLen,setTrackLen]=useState(0)
    const [scheduleId,setScheduleId]=useState(0)
    const [midStations,setMidStations]=useState(0)
    const [source,setSource]=useState('')
    const [destination,setDestination]=useState('')
    const [startT,setStartT]=useState('')
    const [endT,setEndT]=useState('')
    const [stationId,setStationId]=useState('')
    const [stationName,setStationName]=useState('')
    const [place,setPlace]=useState('')
    let x=midStations;



    useEffect(() => {
        setScheduleId(Math.floor(Math.random()*(999-100+1)+100))
        console.log("AMMMM",scheduleId)
    }, [])

    const handleTrain=async()=>{
        await axios.post('http://127.0.0.1:8000/management/system/train/',{
            "T_ID":trainNum,
            "T_Name":trainName,
            "T_type":trainType
        }).then(res=>{if(res.status===200)console.log("Success")}).catch((e)=>{console.log(e)})

    }
    const handleTrack=async()=>{
        await axios.post('http://127.0.0.1:8000/management/system/tracks/',{
            "Track_no":trackNum,
            "length":trackLen
        }).then(res=>{if(res.status===200)console.log("Success")}).catch((e)=>{console.log(e)})
        await axios.post('http://127.0.0.1:8000/management/system/movesOn/',{
            "Train":`http://127.0.0.1:8000/management/system/train/${trainNum}/`,
            "Track":`http://127.0.0.1:8000/management/system/tracks/${trackNum}/`
        }).then(res=>{if(res.status===200)console.log("Success")}).catch((e)=>{console.log(e)})
        
    }
    const handleSchedule=async()=>{
        await axios.post('http://127.0.0.1:8000/management/system/schedule/',{
            "Schedule_id": scheduleId,
           "Source": source,
           "Destination": destination,
           "Start_time": startT,
           "End_time": endT,
        }).then((req,res)=>{if(res.status===200)console.log("Success",req)}).catch((e)=>{console.log(e)})
        await axios.post('http://127.0.0.1:8000/management/system/follows/',{
            "Train":`http://127.0.0.1:8000/management/system/train/${trainNum}/`,
            "Schedule":`http://127.0.0.1:8000/management/system/schedule/${scheduleId}/`
        }).then(res=>{if(res.status===200)console.log("Success")}).catch((e)=>{console.log(e)})
        
        setScheduleId(Math.floor(Math.random()*(999-100+1)+100))

        
    }

    const handleStation=async()=>{
        setMidStations(x--);
        
        await axios.post('http://127.0.0.1:8000/management/system/station/',{
            "S_id":stationId,
            "S_Name":stationName,
            "Place":place,
            "track": `http://127.0.0.1:8000/management/system/tracks/${trackNum}/`
        }).then((res,req)=>{console.log(res,req)}).catch((e)=>{console.log(e)});
        setStationId('')
        setStationName('')
            setPlace('')
        if(x===0){
            setTrackNum(0);
            
            
            setTrainName('')
            setTrackNum(0)
            setTrainType('')
            setSource('')
            setDestination('')
            setStartT('')
            setEndT('')
            setTrackLen(0)
        }
    }
  return (
    <div className='flex flex-col m-[5px] gap-[10px] h-[200%] justify-center items-center' >
        <div className='flex m-[10px] flex-col border-[1px] m-[15px] h-[70%] w-[80%]'>
        <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add New Train</div>
        <div className='m-[20px] flex flex-[9] gap-[15px] justify-evenly items-start'>
        <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Name</h1><input className='p-[5px]' value={trainName} onChange={(event)=>{setTrainName(event.target.value)}} placeholder="Train Name"/></div>
        <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Number</h1><input className='p-[5px]' value={trainNum} onChange={(event)=>{setTrainNum(event.target.value)}} placeholder="Train Number"/></div>
        <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Train Type</h1><input className='p-[5px]' value={trainType} onChange={(event)=>{setTrainType(event.target.value)}} placeholder="Train Type"/></div>
        </div>
        <div className='flex justify-center items-center w-[100%] m-[20px]'><button className='flex bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleTrain}>Submit</button></div>
        </div>
        <div className='m-[5px] flex flex-col border-[1px] m-[15px] h-[70%] w-[80%]'>
        <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add Track</div>
        <div className='m-[20px] flex flex-[9] gap-[15px] justify-evenly items-start'>
        <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Track Number</h1><input className='p-[5px]' value={trackNum} onChange={(event)=>{setTrackNum(event.target.value)}} placeholder="Track Number"/></div>
        <div className='flex flex-col gap-[5px] h-[50px] w-[23%]'><h1 className='font-[Poppins] text-[20px]'>Track Length</h1><input className='p-[5px]' value={trackLen} onChange={(event)=>{setTrackLen(event.target.value)}} placeholder="Train Length"/></div>
       </div>
        <div className='flex justify-center m-[20px] items-center w-[100%]'><button className='flex bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleTrack}>Submit</button></div>
        </div>
        <div className='m-[5px] flex flex-col gap-[5px] border-[1px] m-[15px] h-[70%] w-[80%]'>
        <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add New Schedule</div>
        <div className='m-[20px] grid grid-cols-3 content-evenly justify-evenly gap-x-40'>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Schedule Id</h1><input readonly="readonly" className='p-[5px]' value={scheduleId}/></div>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Number Of Middle Stations</h1><input className='p-[5px]' value={midStations} onChange={(event)=>{setMidStations(event.target.value)}} placeholder="Number of Mid Stations"/></div>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Source</h1><input className='p-[5px]' value={source} onChange={(event)=>{setSource(event.target.value)}} placeholder="Source"/></div>
        <div className='grid grid-rows-2 h-[70px]'><h1 className='font-[Poppins] text-[20px]'>Destination</h1><input className='p-[5px]' value={destination} onChange={(event)=>{setDestination(event.target.value)}} placeholder="Destination"/></div>
        <div className='grid grid-rows-2 h-[70px]'><h1 className='font-[Poppins] text-[20px]'>Start Time</h1><input type="datetime-local" className='p-[5px]' onChange={(event)=>{setStartT(event.target.value)}}/></div>
        <div className='grid grid-rows-2  h-[70px]'><h1 className='font-[Poppins] text-[20px]'>End Time</h1><input type="datetime-local" className='p-[5px]' onChange={(event)=>{setEndT(event.target.value)}}/></div>
        </div>
        <div className='flex justify-center items-center m-[20px] w-[100%]'><button className='flex  bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleSchedule}>Submit</button></div>
        </div>
        {midStations && <div className='m-[5px] flex flex-col gap-[5px] border-[1px] m-[15px] h-[70%] w-[80%]'>
        <div className='flex m-[20px] justify-start text-[26px] text-[#7D7D7D]'>Add New Station</div>
        <div className='m-[20px] grid grid-cols-3 content-evenly justify-evenly gap-x-40'>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Station Id</h1><input className='p-[5px]' value={stationId} onChange={(event)=>{setStationId(event.target.value)}} placeholder="Station Id"/></div>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Station Name</h1><input className='p-[5px]' value={stationName} onChange={(event)=>{setStationName(event.target.value)}} placeholder="Station Name"/></div>
        <div className='grid grid-rows-2 h-[70px] '><h1 className='font-[Poppins] text-[20px]'>Place</h1><input className='p-[5px]' value={place} onChange={(event)=>{setPlace(event.target.value)}} placeholder="Place"/></div>
        </div>
        <div className='flex justify-center items-center m-[20px] w-[100%]'><button className='flex  bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={handleStation}>Submit</button></div>
        </div>}

    </div>
  )
}

export default FeedTrain
// 