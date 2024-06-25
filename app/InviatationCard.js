import React from 'react';
import Invitation from './Invitation';

const InviatationCard = ({ guestName }) => {
  return (
    <div id="invitation-card" style={{ width: '1850px', height: '800px' }}>
      <div className="w-full h-2 bg-yellow-800"></div>
      <div className="w-full h-[80vh] flex justify-center bg-black">
        <div className="md:w-1/5 w-1/6"><img src="sidebar1.png" alt="side image" /></div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <Invitation guestName={guestName} />
        </div>
        <div className=" md:w-1/5 w-1/6"><img  src="sidebar2.png" alt="side image" /></div>
      </div>
      <div className="w-full h-2 bg-yellow-800"></div>
      <div className="w-full  h-48 bg-black"></div>
    </div>
  );
}

export default InviatationCard;
