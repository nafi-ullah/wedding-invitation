import React from 'react'
import Invitation from './Invitation'

const InviatationCard = ({guestName}) => {
  return (
    <div className='pb-20'>  <div className="w-full h-2 bg-yellow-800 "></div>
    <div className="w-full h-[80vh] flex justify-center  bg-black ">
      <div className="w-1/5"><img src="sidebar1.png" alt="side image"/></div>
    <div className="w-1/2 h-1/2  ">
      
     <Invitation guestName={guestName}/>

    </div>
    <div className="w-1/5"><img src="sidebar2.png" alt="side image"/></div>
    </div>
    <div className="w-full h-2 bg-yellow-800 mb-10"></div>
    
    </div>
  )
}

export default InviatationCard