// const Price=()=>{





//     return(
//         <div className="md:sticky flex flex-col gap-3 left-2/3 top-3/4 md:top-1/4 mt-20 md:mt-0 p-5 w-96 text-center bg-white shadow-lg rounded-lg">
//         <h1></h1>
//         <p>night</p>
//         <div className="rounded-lg grid grid-cols-2 grid-flow-row w-72 h-28 m-auto">
//           <div className="col-span-1 row-span-1 border border-black rounded-lg">
//             01
//           </div>
//           <div className="col-span-1 row-span-1 border border-black rounded-lg">
//             02
//           </div>
//           <div className="row-span-1 col-span-2 border border-black rounded-lg flex justify-between px-3">
//             <p className="text-s">
//               Guest<br></br>1 guest
//             </p>
//             <p className="">
//               <i className="fa-solid fa-chevron-down"></i>
//             </p>
//           </div>
//         </div>
//         <button className="bg-rose-600 w-72 h-10 m-auto rounded-lg ">
//           Reserve
//         </button>
//         <p>You won't be charged yet</p>
//         <div className="flex justify-around gap-20 md:gap-40">
//           <p>₹3,137 x 5 nights</p>
//           <p>₹15,687</p>
//         </div>
//         <div className="flex justify-around gap-20 md:gap-40">
//           <p>Airbnb service fee</p>
//           <p>₹2,215</p>
//         </div>
//         <hr className="" />
//         <div className="flex justify-around items-center gap-20 md:gap-40">
//           <p>Total before taxes</p>
//           <p>₹17,902</p>
//         </div>
//       </div>
//     )
// }
// export default Price;
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Price = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [nightlyRate, setNightlyRate] = useState(2750); // assuming nightly rate is ₹2750

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      setNumberOfNights(nights);
    }
  }, [checkInDate, checkOutDate]);

  const calculateTotal = () => {
    return nightlyRate * numberOfNights;
  };

  return (
    <div className="md:sticky flex flex-col gap-3 left-2/3 top-3/4 md:top-1/4 mt-20 md:mt-0 p-5 w-96 text-center bg-white shadow-lg rounded-lg">
      <h1>{nightlyRate}</h1>
      <p>night</p>
      <div className="rounded-lg grid grid-cols-2 grid-flow-row w-72 h-28 m-auto">
        <div className="col-span-1 row-span-1 border border-black rounded-lg">
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check-in"
          />
        </div>
        <div className="col-span-1 row-span-1 border border-black rounded-lg">
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check-out"
          />
        </div>
        <div className="row-span-1 col-span-2 border border-black rounded-lg flex justify-between px-3">
          <p className="text-s">
            Guest<br></br>1 guest
          </p>
          <p className="">
            <i className="fa-solid fa-chevron-down"></i>
          </p>
        </div>
      </div>
      <button className="bg-rose-600 w-72 h-10 m-auto rounded-lg ">
        Reserve
      </button>
      <p>You won't be charged yet</p>
      <div className="flex justify-around gap-20 md:gap-40">
        <p>₹{nightlyRate} x {numberOfNights} nights</p>
        <p>₹{calculateTotal()}</p>
      </div>
      <div className="flex justify-around gap-20 md:gap-40">
        <p>Airbnb service fee</p>
        <p>₹2,215</p>
      </div>
      <hr className="" />
      <div className="flex justify-around items-center gap-20 md:gap-40">
        <p>Total before taxes</p>
        <p>₹{calculateTotal() + 2215}</p>
      </div>
    </div>
  );
};

export default Price;
