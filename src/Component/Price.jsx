
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addToCart } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


  const Price = ({detailData}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    checkInDate: null,
    checkOutDate: null,
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });
  const [numberOfNights, setNumberOfNights] = useState(0);
  const airbnbServiceFeePercentage = 0.2;

  useEffect(() => {
    if (formData.checkInDate && formData.checkOutDate) {
      const nights = Math.ceil(
        (formData.checkOutDate - formData.checkInDate) / (1000 * 60 * 60 * 24)
      );
      setNumberOfNights(nights);
    }
  }, [formData.checkInDate, formData.checkOutDate]);

  const calculateTotal = () => {
    const subtotal = detailData.price * numberOfNights;
    return subtotal;
  };

  const calculateTotalpay = () => {
    const subtotal = detailData.price * numberOfNights;
    const serviceFee = subtotal * airbnbServiceFeePercentage;
    return subtotal + serviceFee;
  };



  const handleDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date
    });
  };

  const handleGuestChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value)
    });
  };

  const handleDecrease = (type) => {
    if (formData[type] > 0) {
      setFormData({
        ...formData,
        [type]: formData[type] - 1
      });
    }
  };

  const handleIncrease = (type) => {
    setFormData({
      ...formData,
      [type]: formData[type] + 1
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to the server
    dispatch(addToCart({...detailData,formData}))
    setFormData({
      checkInDate: null,
      checkOutDate: null,
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0
    });
    navigate("/payment")
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="w-96 p-5 text-center bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Make a Reservation</h2>
      <div className="mb-4">
        <label htmlFor="checkInDate" className="mr-2">Check-in Date:</label>
        <DatePicker
          id="checkInDate"
          selected={formData.checkInDate}
          onChange={(date) => handleDateChange(date, 'checkInDate')}
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="checkOutDate" className="mr-2">Check-out Date:</label>
        <DatePicker
          id="checkOutDate"
          selected={formData.checkOutDate}
          onChange={(date) => handleDateChange(date, 'checkOutDate')}
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="adults" className="mr-2">Adults:</label>
        <button type="button" onClick={() => handleDecrease('adults')} className="mr-2">-</button>
        <input
          type="number"
          id="adults"
          name="adults"
          value={formData.adults}
          onChange={handleGuestChange}
          min="1"
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
        <button type="button" onClick={() => handleIncrease('adults')} className="ml-2">+</button>
      </div>
      <div className="mb-4">
        <label htmlFor="children" className="mr-2">Children:</label>
        <button type="button" onClick={() => handleDecrease('children')} className="mr-2">-</button>
        <input
          type="number"
          id="children"
          name="children"
          value={formData.children}
          onChange={handleGuestChange}
          min="0"
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
        <button type="button" onClick={() => handleIncrease('children')} className="ml-2">+</button>
      </div>
      <div className="mb-4">
        <label htmlFor="infants" className="mr-2">Infants:</label>
        <button type="button" onClick={() => handleDecrease('infants')} className="mr-2">-</button>
        <input
          type="number"
          id="infants"
          name="infants"
          value={formData.infants}
          onChange={handleGuestChange}
          min="0"
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
        <button type="button" onClick={() => handleIncrease('infants')} className="ml-2">+</button>
      </div>
      <div className="mb-4">
        <label htmlFor="pets" className="mr-2">Pets:</label>
        <button type="button" onClick={() => handleDecrease('pets')} className="mr-2">-</button>
        <input
          type="number"
          id="pets"
          name="pets"
          value={formData.pets}
          onChange={handleGuestChange}
          min="0"
          className="border-2 border-gray-400 rounded px-2 py-1"
        />
        <button type="button" onClick={() => handleIncrease('pets')} className="ml-2">+</button>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Reserve</button>
    </form>
    <p className="text-sm text-gray-500">You won't be charged yet</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg">₹{detailData.price} X {numberOfNights} nights</p>
        <p className="text-lg">₹{calculateTotal()}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-lg">Airbnb service fee </p>
        <p className="text-lg">₹{(detailData.price * numberOfNights * airbnbServiceFeePercentage).toFixed(2)}</p>
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
