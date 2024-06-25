// // components/WeddingInvitation.js
// import React from 'react';
// import Countdown from 'react-countdown';
// import Image from 'next/image';
// //import bgImage from '/mnt/data/image.png'; // Adjust the path if necessary

// const WeddingInvitation = () => {
//   const weddingDate = new Date('2024-06-28T13:30:00');
//   const [guestName, setGuestName] = useState('Rahim');

//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       return <span>It's our wedding day!</span>;
//     } else {
//       return (
//         <div className="flex space-x-2">
//           <div className="flex flex-col items-center">
//             <span className="text-xl">{days}</span>
//             <span className="text-sm">Days</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-xl">{hours}</span>
//             <span className="text-sm">Hours</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-xl">{minutes}</span>
//             <span className="text-sm">Minutes</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-xl">{seconds}</span>
//             <span className="text-sm">Seconds</span>
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div >
//         <div ></div>
//         <div>Dear {guestName} </div>
//         <div>You are requested to attend the wedding ceremony of </div>
//         <div>Wedding Invitation</div>

//         {/* <Countdown date={weddingDate} renderer={renderer} /> */}
//       </div>
   
//   );
// };

// export default WeddingInvitation;
