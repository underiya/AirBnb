import React, { useEffect, useState } from "react";
import { addToCart } from "../Redux/action";

const Guest = ({ onClose }) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleIncrease = (type) => {
    if (type === "adults" && totalGuests() < 5) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] + 1,
      }));
    } else if (type === "children" && totalGuests() < 5) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] + 1,
      }));
    } else if (type === "infants" && guestCounts.infants < 5) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] + 1,
      }));
    } else if (type === "pets" && guestCounts.pets < 5) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] + 1,
      }));
    }
  };

  const handleDecrease = (type) => {
    if (guestCounts[type] > 0) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] - 1,
      }));
    }
  };

  const totalGuests = () => {
    return guestCounts.adults + guestCounts.children;
  };

  const guestString = () => {
    let string = "";
    for (const [key, value] of Object.entries(guestCounts)) {
      if (value > 0) {
        string += value + " " + key + ", ";
      }
    }
    return string.slice(0, -2);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <label>Adults</label>
        <div className="flex items-center">
          <button
            onClick={() => handleDecrease("adults")}
            className="border rounded-full w-8 h-8"
          >
            -
          </button>
          <span className="mx-2">{guestCounts.adults}</span>
          <button
            onClick={() => handleIncrease("adults")}
            className="border rounded-full w-8 h-8"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <label>Children</label>
        <div className="flex items-center">
          <button
            onClick={() => handleDecrease("children")}
            className="border rounded-full w-8 h-8"
          >
            -
          </button>
          <span className="mx-2">{guestCounts.children}</span>
          <button
            onClick={() => handleIncrease("children")}
            className="border rounded-full w-8 h-8"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <label>Infants</label>
        <div className="flex items-center">
          <button
            onClick={() => handleDecrease("infants")}
            className="border rounded-full w-8 h-8"
          >
            -
          </button>
          <span className="mx-2">{guestCounts.infants}</span>
          <button
            onClick={() => handleIncrease("infants")}
            className="border rounded-full w-8 h-8"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <label>Pets</label>
        <div className="flex items-center">
          <button
            onClick={() => handleDecrease("pets")}
            className="border rounded-full w-8 h-8"
          >
            -
          </button>
          <span className="mx-2">{guestCounts.pets}</span>
          <button
            onClick={() => handleIncrease("pets")}
            className="border rounded-full w-8 h-8"
          >
            +
          </button>
        </div>
      </div>
      <input type="text" placeholder={guestString()} readOnly />
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Guest;
