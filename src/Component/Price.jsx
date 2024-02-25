// Price.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Guest from "./Guest";

const Price = ({detailData}) => {
  const [formData, setFormData] = useState({
    checkInDate: null,
    checkOutDate: null,
    selectedCategory: '',
  });
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [nightlyRate, setNightlyRate] = useState(detailData.price);
  const airbnbServiceFeePercentage = 0.2;
  const [guestComponentVisible, setGuestComponentVisible] = useState(false);
  console.log(detailData);
  useEffect(() => {
    if (formData.checkInDate && formData.checkOutDate) {
      const nights = Math.ceil(
        (formData.checkOutDate - formData.checkInDate) / (1000 * 60 * 60 * 24)
      );
      setNumberOfNights(nights);
    }
  }, [formData.checkInDate, formData.checkOutDate]);

  const calculateTotal = () => {
    const subtotal = nightlyRate * numberOfNights;
    // const serviceFee = subtotal * airbnbServiceFeePercentage;
    return subtotal;
  };
  const calculateTotalpay = () => {
    const subtotal = nightlyRate * numberOfNights;
    const serviceFee = subtotal * airbnbServiceFeePercentage;
    return subtotal+serviceFee;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Toggle visibility of guest component directly if "Guests" is selected
    if (value === "Guests") {
      setGuestComponentVisible(true);
    } else {
      setGuestComponentVisible(false);
    }
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleCloseGuestComponent = () => {
    setGuestComponentVisible(false);
  };

  return (
    <div className=" md:sticky flex flex-col gap-3 left-2/3 top-3/4 md:top-1/4 mt-20 md:mt-0 p-5 w-96 text-center bg-white shadow-lg rounded-lg">
      <span className="text-start flex gap-3">
        <h1 className="text-3xl font-bold text-start">{nightlyRate}</h1>{' '}
        <span className="text-sm text-gray-500 mt-3 ">per night</span>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="rounded-full grid grid-cols-2 w-72 ml-9">
          <div className="border border-black rounded-lg">
            <DatePicker
              id="checkInDate"
              selected={formData.checkInDate}
              onChange={(date) => handleDateChange(date, 'checkInDate')}
              placeholderText="Check-in"
              className="date-picker w-full h-10 border-2 border-gray-600"
            />
          </div>
          <div className="border border-black rounded-lg">
            <DatePicker
              id="checkOutDate"
              selected={formData.checkOutDate}
              onChange={(date) => handleDateChange(date, 'checkOutDate')}
              placeholderText="Check-out"
              className="date-picker w-full h-10 border-2 border-gray-600"
            />
          </div>
          <div className="border border-black rounded-lg col-span-2">
            <select
              id="selectedCategory"
              name="selectedCategory"
              value={formData.selectedCategory}
              onChange={handleFormChange}
              className="w-full h-10 border-2 border-gray-600"
            >
              <option value="">Select Category</option>
              <option value="Guests">Guests</option>
            </select>
          </div>
        </div>
        {guestComponentVisible && <Guest onClose={handleCloseGuestComponent} />}
        <button type="submit" className="bg-rose-600 text-white w-full h-10 rounded-lg mt-4">
          Reserve
        </button>
      </form>
      <p className="text-sm text-gray-500">You won't be charged yet</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg">₹{nightlyRate} X {numberOfNights} nights</p>
        <p className="text-lg">₹{calculateTotal()}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-lg">Airbnb service fee </p>
        <p className="text-lg">₹{(nightlyRate * numberOfNights * airbnbServiceFeePercentage).toFixed(2)}</p>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-between mt-2">
        <p className="text-lg font-bold">Total before taxes</p>
        <p className="text-lg font-bold">₹{calculateTotalpay()}</p>
      </div>
    </div>
  );
};

export default Price;
