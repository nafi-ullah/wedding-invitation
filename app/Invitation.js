import React from 'react';

const Invitation = ({ guestName }) => {
  return (
    <div className='w-full h-full justify-center text-[#E1B954]'>
            <div className='text-5xl w-full flex justify-center my-7  pt_sarief'>Wedding Invitation</div>
      <div className='w-full my-1  flex justify-center pt_sarief text-2xl'>Dear {guestName || 'Guest'}, </div>
      
      <div className='w-full flex justify-center text-2xl pt_sarief mb-14'>You are requested to attend the wedding ceremony of </div>

      <div className='parisienne w-full text-5xl flex justify-center '>Muid Hasan Mahin</div>
      <div className='pt_sarief w-full text-xl flex justify-center italic'>Eldest son of S.M.Sayed and Nargis Parvin Nazma</div>
      <div className='parisienne w-full text-6xl flex justify-center'>&</div>
      <div className='parisienne w-full text-5xl flex justify-center'>Afroze Jabin Ela</div>
      <div className='pt_sarief w-full text-xl mt-2 flex justify-center italic'>Youngest daughter of Azizul Haque and Helena akter</div>
      <div className='w-full my-4 flex justify-center pt_sarief text-2xl mt-10'>Save The Date </div>
      <div className='w-full flex justify-center '>
        <div className='w-1/2 h-1 bg-[#E1B954] '></div>
      </div>
      <div className='w-full my-3 flex justify-center pt_sarief text-4xl'>28th June 2024 </div>
      <div className='w-full flex justify-center '>
        <div className='w-1/2 h-1 bg-[#E1B954] '></div>
       
      </div>
      <div className='w-full my-6 flex justify-center pt_sarief text-2xl mt-2'>01:00 PM Friday </div>
      <div className='w-full mt-6 flex justify-center pt_sarief text-2xl '>HAQUE's Banquet Hall & Restaurant   </div>
      <div className='w-full text-center px-5  pb-10 flex justify-center pt_sarief text-lg'>46/6, Haque Tower, M-block, Main Road, Banasree, Dhaka-1219  </div>
    </div>
  );
}

export default Invitation;
