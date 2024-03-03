import React, { useState } from "react";
import FormSubmitToast from "./FormSubmitToast";

function PaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [inputValues, setInputValues] = useState({
    upiId: "",
    creditCardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    bankName: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    const today = new Date();
    const expiryDate = new Date(inputValues.expiryDate);

    if (!inputValues.upiId && selectedPaymentMethod === "UPI") {
      errors.upiId = "UPI ID is required";
    }
    if (
      !inputValues.creditCardNumber &&
      selectedPaymentMethod === "Creditdebitcard"
    ) {
      errors.creditCardNumber = "Credit Card Number is required";
    } else if (!/^\d+$/.test(inputValues.creditCardNumber)) {
      errors.creditCardNumber = "Invalid Credit Card Number";
    }
    if (
      !inputValues.cardHolderName &&
      selectedPaymentMethod === "Creditdebitcard"
    ) {
      errors.cardHolderName = "Card Holder Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputValues.cardHolderName)) {
      errors.cardHolderName = "Invalid Card Holder Name";
    }
    if (
      !inputValues.expiryDate &&
      selectedPaymentMethod === "Creditdebitcard"
    ) {
      errors.expiryDate = "Expiry Date is required";
    } else if (expiryDate <= today) {
      errors.expiryDate = "Expiry Date must be in the future";
    }
    if (!inputValues.cvv && selectedPaymentMethod === "Creditdebitcard") {
      errors.cvv = "CVV Number is required";
    } else if (!/^\d{3,4}$/.test(inputValues.cvv)) {
      errors.cvv = "Invalid CVV Number";
    }
    if (!inputValues.bankName && selectedPaymentMethod === "NetBanking") {
      errors.bankName = "Bank Name is required";
    }

    if (Object.keys(errors).length === 0) {
      console.log(selectedPaymentMethod, inputValues);
    } else {
      setFormErrors(errors);
    }
    setInputValues({
      upiId: "",
      creditCardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
      bankName: "",
    });
  };

  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case "UPI":
        return (
          <div>
            <label className="block mb-2">Enter UPI ID:</label>
            <input
              type="text"
              name="upiId"
              value={inputValues.upiId}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter UPI ID"
              required
            />
            {formErrors.upiId && (
              <p className="text-red-500">{formErrors.upiId}</p>
            )}
          </div>
        );
      case "Creditdebitcard":
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Credit Card Number:</label>
              <input
                type="text"
                name="creditCardNumber"
                value={inputValues.creditCardNumber}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Enter Number"
                required
              />
              {formErrors.creditCardNumber && (
                <p className="text-red-500">{formErrors.creditCardNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2">Card Holder Name:</label>
              <input
                type="text"
                name="cardHolderName"
                value={inputValues.cardHolderName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Enter Your Name"
                required
              />
              {formErrors.cardHolderName && (
                <p className="text-red-500">{formErrors.cardHolderName}</p>
              )}
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <label className="block mb-2">Expiry Date:</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={inputValues.expiryDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
                {formErrors.expiryDate && (
                  <p className="text-red-500">{formErrors.expiryDate}</p>
                )}
              </div>
              <div>
                <label className="block mb-2">CVV Number:</label>
                <input
                  type="text"
                  name="cvv"
                  value={inputValues.cvv}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="CVV Number"
                  required
                />
                {formErrors.cvv && (
                  <p className="text-red-500">{formErrors.cvv}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              submit
            </button>
          </form>
        );
      case "NetBanking":
        return (
          <div>
            <label className="block mb-2">Enter Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={inputValues.bankName}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter Bank Name"
            />
            {formErrors.bankName && (
              <p className="text-red-500">{formErrors.bankName}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-3">
      <select
        name="selectedPaymentMethod"
        className="w-full p-4 border-2 border-gray-500 rounded-lg"
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
