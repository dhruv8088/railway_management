import React from 'react'
import './coverpg.css'
import { useNavigate } from 'react-router-dom';
const Coverpg = () => {

    const navigate=useNavigate();
    const navigatetrain = () => {
      navigate('/trainlist');
    };

  return (
    <div className='main'>
        <div className="headin">Track-Ease</div>
        <div className='conte'>Now Book Your Journey with Ease</div>
        <div className="butt">
        <button className='flex  bg-[#6A1B9A] text-white text-[22px] w-[20%] rounded-[10px] h-[40px] p-[2px] justify-center items-center' onClick={navigatetrain}>Book Now</button>
        </div>
    </div>
  )
}

export default Coverpg