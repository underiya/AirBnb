import React from "react";

export default function HotelCard({ data }) {
  const checkInDate = new Date(data.checkInDate);
  const checkOutDate = new Date(data.checkOutDate);

  // Calculate the difference in milliseconds
  const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
  // Calculate the number of days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  let totalPrice = data.price * differenceInDays;
  //  totalPrice=totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  const cleaningFees = 1792.81;
  const servceFees = 2910;
  const tax = 1020.86;
  let totalPayment = totalPrice + cleaningFees + servceFees + tax;
  totalPayment = totalPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return (
    // lg:w-6/12 md:w-96
    <div className="lg:h-auto md:h-auto">
      {/* w-40 md:w-72 lg:w-96 */}
      <div className="flex justify-between items-center mt-6 gap-5  ">
        {data && data.images && data.images.length > 0 && (
          <img
            className="ml-4 rounded-xl md:h-36 lg:h-24 md:w-36 lg:w-28 object-cover"
            src={data.images[0]}
            alt=""
          />
        )}
        <div className="mr-4 h-32 w-full">
          <h1 className="font-semibold ">{data.title}</h1>
          <p>{data.location}</p>
          {data.rating && (
            <h3 className="font-semibold">
              {data.rating} <span>({data.reviews && data.reviews.length})</span>
            </h3>
          )}
        </div>
      </div>
      <hr className="mt-3" />
      <h1 className="text-2xl font-semibold mt-3 ml-4">Price details</h1>
      <div className="flex justify-between  mt-3">
        <h3 className="ml-4">{`₹${data.price} x ${differenceInDays} nights`}</h3>
        <h3 className="mr-4">{`₹${totalPrice}`}</h3>
      </div>
      {/* <div className='flex justify-between mt-3'>
            <h3  className='ml-4'>Cleaning fee</h3>
          <h3 className='mr-4'>{`₹${cleaningFees}`}</h3>
          </div> */}
      <div className="flex justify-between mt-3">
        <h3 className="ml-4">Airbnb service fee</h3>
        <h3 className="mr-4">{`₹${servceFees}`}</h3>
      </div>
      {/* <div className='flex justify-between mt-3'>
            <h3  className='ml-4'>Taxes</h3>
            <h3 className='mr-4'>{`₹${tax}`}</h3>
          </div> */}
      <hr className="mt-2" />

      <div className="flex justify-between  mt-3 lg:mb-3 md:pb-5">
        <h3 className="ml-4">Total (INR)</h3>
        <h3 className="mr-4">{`₹${totalPayment}`}</h3>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Guest from "./Guest";

// const Price = ({detailData}) => {
//   const [formData, setFormData] = useState({
//     checkInDate: null,
//     checkOutDate: null,
//     selectedCategory: '',
//   });
//   const [numberOfNights, setNumberOfNights] = useState(0);
//   const [nightlyRate, setNightlyRate] = useState(detailData.price);
//   const airbnbServiceFeePercentage = 0.2;
//   const [guestComponentVisible, setGuestComponentVisible] = useState(false);
//   console.log(detailData);
//   useEffect(() => {
//     if (formData.checkInDate && formData.checkOutDate) {
//       const nights = Math.ceil(
//         (formData.checkOutDate - formData.checkInDate) / (1000 * 60 * 60 * 24)
//       );
//       setNumberOfNights(nights);
//     }
//   }, [formData.checkInDate, formData.checkOutDate]);

//   const calculateTotal = () => {
//     const subtotal = nightlyRate * numberOfNights;
//     // const serviceFee = subtotal * airbnbServiceFeePercentage;
//     return subtotal;
//   };
//   const calculateTotalpay = () => {
//     const subtotal = nightlyRate * numberOfNights;
//     const serviceFee = subtotal * airbnbServiceFeePercentage;
//     return subtotal+serviceFee;
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Toggle visibility of guest component directly if "Guests" is selected
//     if (value === "Guests") {
//       setGuestComponentVisible(true);
//     } else {
//       setGuestComponentVisible(false);
//     }
//   };

//   const handleDateChange = (date, name) => {
//     setFormData({
//       ...formData,
//       [name]: date,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   };

//   const handleCloseGuestComponent = () => {
//     setGuestComponentVisible(false);
//   };

//   return (
//     <div className=" md:sticky flex flex-col gap-3 left-2/3 top-3/4 md:top-1/4 mt-20 md:mt-0 p-5 w-96 text-center bg-white shadow-lg rounded-lg">
//       <span className="text-start flex gap-3">
//         <h1 className="text-3xl font-bold text-start">{nightlyRate}</h1>{' '}
//         <span className="text-sm text-gray-500 mt-3 ">per night</span>
//       </span>
//       <form onSubmit={handleSubmit}>
//         <div className="rounded-full grid grid-cols-2 w-72 ml-9">
//           <div className="border border-black rounded-lg">
//             <DatePicker
//               id="checkInDate"
//               selected={formData.checkInDate}
//               onChange={(date) => handleDateChange(date, 'checkInDate')}
//               placeholderText="Check-in"
//               className="date-picker w-full h-10 border-2 border-gray-600"
//             />
//           </div>
//           <div className="border border-black rounded-lg">
//             <DatePicker
//               id="checkOutDate"
//               selected={formData.checkOutDate}
//               onChange={(date) => handleDateChange(date, 'checkOutDate')}
//               placeholderText="Check-out"
//               className="date-picker w-full h-10 border-2 border-gray-600"
//             />
//           </div>
//           <div className="border border-black rounded-lg col-span-2">
//             <select
//               id="selectedCategory"
//               name="selectedCategory"
//               value={formData.selectedCategory}
//               onChange={handleFormChange}
//               className="w-full h-10 border-2 border-gray-600"
//             >
//               <option value="">Select Category</option>
//               <option value="Guests">Guests</option>
//             </select>
//           </div>
//         </div>
//         {guestComponentVisible && <Guest onClose={handleCloseGuestComponent} />}
//         <button type="submit" className="bg-rose-600 text-white w-full h-10 rounded-lg mt-4">
//           Reserve
//         </button>
//       </form>
//       <p className="text-sm text-gray-500">You won't be charged yet</p>
//       <div className="flex justify-between mt-4">
//         <p className="text-lg">₹{nightlyRate} X {numberOfNights} nights</p>
//         <p className="text-lg">₹{calculateTotal()}</p>
//       </div>
//       <div className="flex justify-between mt-2">
//         <p className="text-lg">Airbnb service fee </p>
//         <p className="text-lg">₹{(nightlyRate * numberOfNights * airbnbServiceFeePercentage).toFixed(2)}</p>
//       </div>
//       <hr className="mt-4" />
//       <div className="flex justify-between mt-2">
//         <p className="text-lg font-bold">Total before taxes</p>
//         <p className="text-lg font-bold">₹{calculateTotalpay()}</p>
//       </div>
//     </div>
//   );
// };

// export default Price;
