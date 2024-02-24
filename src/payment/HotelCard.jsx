import React from 'react'

export default function HotelCard ({data}) {
   
const checkInDate = new Date(data.checkInDate);
const checkOutDate = new Date(data.checkOutDate);

// Calculate the difference in milliseconds
const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
// Calculate the number of days
const differenceInDays = differenceInTime / (1000 * 3600 * 24);
 let totalPrice=data.price*differenceInDays;
//  totalPrice=totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
 const cleaningFees=1792.81;
 const servceFees=2910;
 const tax=1020.86;
 let totalPayment=totalPrice+cleaningFees+servceFees+tax;
 totalPayment = totalPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return (
    // lg:w-6/12 md:w-96
    <div className='lg:h-auto md:h-auto'>
      {/* w-40 md:w-72 lg:w-96 */}
         <div className='flex justify-between items-center mt-6 gap-5  '>
            <img className='ml-4 rounded-xl  md:h-20  lg:h-24 
            md:w-20 lg:w-28 
            object-cover' src={data.images} alt="" />
            <div className='mr-4 h-32 w-full'>
            <h1 className='font-semibold '>{data.title}</h1>
            <p>{data.location}</p>
            <h3 className='font-semibold'>{data.rating} <span>({data.reviews.length})</span></h3>
            </div>
          </div>
          <hr className='mt-3'/>
          <h1 className='text-2xl font-semibold mt-3 ml-4'>Price details</h1>
          <div className='flex justify-between  mt-3'>
            <h3  className='ml-4'>{`₹${data.price} x ${differenceInDays} nights`}</h3>
            <h3 className='mr-4'>{`₹${totalPrice}`}</h3>
          </div>
          <div className='flex justify-between mt-3'>
            <h3  className='ml-4'>Cleaning fee</h3>
          <h3 className='mr-4'>{`₹${cleaningFees}`}</h3>
          </div>
          <div className='flex justify-between mt-3'>
            <h3  className='ml-4'>Airbnb service fee</h3>
            <h3 className='mr-4'>{`₹${servceFees}`}</h3>
          </div>
          <div className='flex justify-between mt-3'>
            <h3  className='ml-4'>Taxes</h3>
            <h3 className='mr-4'>{`₹${tax}`}</h3>
          </div>
          <hr className='mt-2' />
            
         <div className='flex justify-between  mt-3 lg:mb-3 md:pb-5'>
            <h3 className='ml-4'>Total (INR)</h3>
            <h3 className='mr-4'>{`₹${totalPayment}`}</h3>
          </div> 
    </div>
  )
}



