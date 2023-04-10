import React from 'react'
import {useState} from 'react'

function Login() {
    const USER_NAME='himanshu'
    const PASSWORD='himanshu@18'
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [admin, setAdmin]=useState(false);
    console.log(username,password)
    const handleClick=()=>{
      if(username===USER_NAME && password===PASSWORD){
        setAdmin(true);
      }
      console.log(admin);
      setPassword("")
      setUsername("")
    }
  return (
      <>
    <div className='flex flex-row justify-center items-center p-[10px] border-b-[2px] border-black'><h1 className='font-[pacifico] text-[32px]'>Railway Management System</h1></div>
    <div className="flex flex-row gap-[5px] m-[10px] justify-center items-center ">
      {admin && <div className="flex flex-[2]">
         Himanshu
      </div>}
      <div className="flex flex-[8] flex-col gap-[20px] justify-center items-center">
        <div className=' flex flex-col justify-center border-black border-[1px] items-center w-[50%] '>
        <div className='flex flex-row justify-center items-center p-[10px] border-b-[1px]'><h1 className='font-[pacifico] text-[32px]'>Login Form</h1></div>
         <form className='flex flex-col gap-[10px] w-[320px] p-[10px]'>
          <div className='flex flex-col gap-[5px] p-[2px]'>
          <h3 className='font-[pacifico] text-[22px]'>Username</h3>
           <input placeholder='Enter your Username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
          </div>
           <div className='flex flex-col gap-[5px] p-[2px]'>
           <h3 className='font-[pacifico] text-[22px]'>Password</h3>
           <input placeholder='Enter your Password' value={password} onChange={(event)=>{setPassword(event.target.value)}} />
           </div>
         </form>
         <button className='flex mb-[10px] rounded-[10px] text-white p-[10px] justify-center bg-slate-600 w-[120px]' onClick={handleClick}>
           Submit
         </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login