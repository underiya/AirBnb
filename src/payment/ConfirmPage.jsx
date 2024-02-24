import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import EditDate from "./EditDate";
import EditGuest from "./EditGuest";
import PhoneNumberModal from "./PhoneNumberModal";
import SendMessageModal from "./SendMessageModal";
import PANModal from "./PanModel";
import ConfirmPay from "./ConfirmPay";
import HotelCard from "./HotelCard";
const obj = {
  title: "SarNest - Designed with Nature",
  location: "Entire home in Honningsvåg, Norway",
  images: [
    "data:image/jpeg;base64,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",
  ],
  rating: "4.8",
  checkInDate: "2024-02-25",
  checkOutDate: "2024-02-28",
  nearBy: "Connaught Place, India Gate",
  price: "6000",
  map_location: { lat: "28.6139", long: "77.2090" },
  description:
    "Cozy Haven Guesthouse offers a warm and welcoming environment for travelers visiting Delhi. Situated in the heart of the city, our guesthouse provides comfortable accommodation and easy access to major attractions.",
  amenities: ["Free Breakfast", "Wifi", "24/7 Room Service"],
  reviews: [
    {
      image: "reviewer1.jpg",
      city: "Mumbai",
      name: "John Doe",
      review_msg:
        "Excellent place to stay! The rooms are clean and well-maintained. The staff is friendly and helpful. Would definitely come back again.",
      rating: "5",
    },
    {
      image: "reviewer2.jpg",
      city: "Bangalore",
      name: "Jane Smith",
      review_msg:
        "Had a wonderful experience here. The location is perfect, and the amenities provided are great. Highly recommend!",
      rating: "4.5",
    },
  ],
};
const checkInDate = new Date(obj.checkInDate);
const checkOutDate = new Date(obj.checkOutDate);

const dayOfCheckInDay = checkInDate.getDate(); // Get the day of the week for the check-in date
const dayOfCcheckOutDay = checkOutDate.getDate();
const checkInMonthName = checkInDate.toLocaleString('default', { month: 'long' });
const checkOutMonthName = checkOutDate.toLocaleString('default', { month: 'long' });

export default function ConfirmPage() {
  const [checkDate,setCheckDate]=useState(dayOfCheckInDay)
  const [checkoDate,setCheckotDate]=useState(dayOfCcheckOutDay)
  const [checkInMonth,setcheckInMonthName]=useState(checkInMonthName)
  const [checkOutMonth,setcheckOutMonthName]=useState(checkOutMonthName)

  
  const handleUpdate = (checkInDate, checkOutDate) => {
    setCheckDate(checkInDate.getDate());
    setCheckotDate(checkOutDate.getDate());
    setcheckInMonthName(checkInDate.toLocaleString('default', { month: 'long' }));
    setcheckOutMonthName(checkOutDate.toLocaleString('default', { month: 'long' }));
  };

  return (
    <div className="mx-auto w-10/12">
      <div className="mt-9 sm:w-full lg:w-1/2 ">
        <div>
          <i class="fa-solid fa-chevron-left"></i>
          <span className="ml-5 text-4xl font-semibold">Confirm and pay</span>
        </div>
        <div className="md:relative lg:absolute md:w-full lg:w-2/6 md:h-auto  lg:h-auto shadow-lg rounded-xl border-1 border-gray-100 sm:relative md:absolute lg:top-40  lg:right-36">
          <HotelCard data={obj} />
        </div>

        <div className="ave">
          <h1 className="font-medium text-2xl mt-4">Your trip</h1>
          <div className="flex justify-between">
            <div className="mt-3">
              <h2>Dates</h2>
              <h2>{`${checkDate} ${checkInMonth}-${checkoDate} ${checkOutMonth}`}</h2>
            </div>
            <EditDate data={obj}  onUpdate={handleUpdate}/>
          </div>

          <div className="flex justify-between">
            <h1 className="mt-9">Guests</h1>
            <EditGuest />
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex justify-between mt-3">
          <h1 className="text-2xl font-semibold ">Pay with</h1>
          <div className="flex gap-2 mr-3">
            <img
              className="h-5 w-8"
              src="data:image/jpeg;base64,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"
              alt="mstcrd"
            />
            <img
              className="h-5 w-8"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              className="h-5 w-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4DV91094KbKRfRkMwFCm9LptRiejlcRh8vk-9JvPGQ&s"
              alt=""
            />
            <img
              className="h-5 w-8"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>

        <PaymentForm />

        <div className="mt-3">
          <h1 className="text-2xl font-semibold ">Required for your trip</h1>
          <div className="flex justify-between mr-4 mt-3 ">
            <h2 className="font-semibold">Message the host</h2>
            {/* <button className='rounded-lg border-black border-2 px-2 '>Add</button> */}
            <SendMessageModal />
          </div>
          <h3>
            Share why you're travelling, who's coming with you and what you love
            about the space.
          </h3>
          <div className="flex justify-between mr-4 mt-2">
            <h2 className="font-semibold">Permanent Account Number (PAN)</h2>
            {/* <button className='rounded-lg border-black border-2 px-2 '>Add</button> */}
            <PANModal />
          </div>
          <h3>
            A valid PAN is required per Reserve Bank of India (RBI) regulations.
          </h3>
          <div className="flex justify-between mr-4 mt-2">
            <h2 className="font-semibold">Phone number</h2>
            <PhoneNumberModal />
          </div>
          <h3>Add and confirm your phone number to get trip updates.</h3>
          <hr className="mt-3" />
        </div>
        <h1 className="text-2xl font-semibold mt-3">Cancellation policy</h1>
        <h3>
          Cancel before 26 Feb for a partial refund. After that, the reservation
          is non-refundable
        </h3>
        <span>Learn more</span>
        <hr className="mt-3" />
        <h1 className="text-2xl font-semibold mt-3">Ground rules</h1>
        <h2>
          We ask every guest to remember a few simple things about what makes a
          great guest.
        </h2>
        <ul>
          <li>Follow the house rules</li>
          <li>Treat your Host’s home like your own</li>
        </ul>
        <hr className="mt-3" />
        <p className="mt-3 text-xs">
          By selecting the button below, I agree to the{" "}
          <strong>
            {" "}
            Host's House Rules, Ground rules for guests, Airbnb's Rebooking and
            Refund Policy{" "}
          </strong>{" "}
          and that Airbnb can <strong>charge my payment method </strong> if I’m
          responsible for damage.
        </p>
        {/* <button className='mt-3 p-3  bg-pink-600 text-white rounded-lg mb-4'>Confirm and Pay</button> */}

        <ConfirmPay />
      </div>
    </div>
  );
}
