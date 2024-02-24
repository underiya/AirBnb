import React, { useState } from 'react';
import FormSubmitToast from './FormSubmitToast';

function PaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission based on selectedPaymentMethod and inputValue
    console.log(selectedPaymentMethod, inputValue);
  };

  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case 'UPI':
        return (
          <div>
            <label className="block mb-2">Enter UPI ID:</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder='Enter UPI ID'
            />
          </div>
        );
      case 'Creditdebitcard':
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Credit Card Number:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder='Enter Nuber' />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Card Holder Name:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder='Enter Your Name' />
            </div>
            <div className='flex justify-between'>
            <div className="mb-4">
              <label className="block mb-2">Expiry Date:</label>
              <input type="date" className="border border-gray-300 rounded-lg p-2 w-full" placeholder='Expiry Date' />
            </div>
            <div className="mb-4">
              <label className="block mb-2">CVV Number:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2 w-full"  placeholder='CVV Number'/>
            </div>
            </div>
            {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button> */}
            <FormSubmitToast/>
          </form>
        );
      case 'NetBanking':
        return (
          <div>
            <label className="block mb-2">Enter Bank Name:</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full" placeholder='Enter Bank Name'
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='mt-3'>
      <select
        name="selectedPaymentMethod"
        className='w-full p-4 border-2 border-gray-500 rounded-lg'
        value={selectedPaymentMethod}
        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
      >
        <option value="UPI">UPI</option>
        <option value="Creditdebitcard">Credit or Debit Card</option>
        <option value="NetBanking">Net Banking</option>
      </select>
      {renderPaymentForm()}
    </div>
  );
}

export default PaymentForm;
