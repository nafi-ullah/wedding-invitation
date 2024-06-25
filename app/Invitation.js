import React from 'react';

const Invitation = ({ guestName }) => {
  return (
    <div className='w-full h-full justify-center text-[#E1B954]'>
      <div className='w-full my-1 mt-8 flex justify-center pt_sarief text-2xl'>Dear {guestName || 'Guest'}, </div>
      <div className='w-full flex justify-center text-2xl pt_sarief'>You are requested to attend the wedding ceremony of </div>
      <div className='text-5xl w-full flex justify-center my-7 mb-14 pt_sarief'>Wedding Invitation</div>
      <div className='parisienne w-full text-5xl flex justify-center '>Muid Hasan Mahin</div>
      <div className='parisienne w-full text-8xl flex justify-center'>&</div>
      <div className='parisienne w-full text-5xl flex justify-center'>Afroza Jabin Ela</div>
      <div className='w-full my-6 flex justify-center pt_sarief text-2xl mt-20'>Save The Date </div>
      <div className='w-full flex justify-center '>
        <div className='w-1/2 h-1 bg-[#E1B954] '></div>
      </div>
      <div className='w-full my-3 flex justify-center pt_sarief text-4xl'>28th June 2024 </div>
      <div className='w-full flex justify-center '>
        <div className='w-1/2 h-1 bg-[#E1B954] '></div>
      </div>
      <div className='w-full text-center px-5 pt-5 pb-10 flex justify-center pt_sarief text-2xl'>46/6, Haque Tower, M-block, Main Road, Banasree, Dhaka-1219 Dhaka </div>
    </div>
  );
}

export default Invitation;
