
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addToCart } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const App = ({ detailData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
    setShowAmenitiesModal(false);
  };

  
  const handleOpen = () => setIsOpen(true);
  const handleOpenAmenitiesModal = () => setShowAmenitiesModal(true);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkInDate: null,
    checkOutDate: null,
    category: "",
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [numberOfNights, setNumberOfNights] = useState(0);
  const airbnbServiceFeePercentage = 0.2;
  const [showGuestFields, setShowGuestFields] = useState(false);

  useEffect(() => {
    if (formData.checkInDate && formData.checkOutDate) {
      const nights = Math.ceil(
        (formData.checkOutDate - formData.checkInDate) /
          (1000 * 60 * 60 * 24)
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
      [field]: date,
    });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      category: value,
    });
    if (value === "Guests") {
      setShowGuestFields(true);
    } else {
      setShowGuestFields(false);
    }
  };

  const handleGuestChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
  };

  const handleDecrease = (type) => {
    if (formData[type] > 0) {
      setFormData({
        ...formData,
        [type]: formData[type] - 1,
      });
    }
  };

  const handleIncrease = (type) => {
    setFormData({
      ...formData,
      [type]: formData[type] + 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...detailData, formData }));
    setFormData({
      checkInDate: null,
      checkOutDate: null,
      category: "",
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
    });
    navigate("/payment");
  };
  return (
    <div className="flex">
      <div className="flex-1 p-6 ">
        {/* Left side content */}
        <div className="container mx-auto py-8 flex flex-col items-start md:ml-48 border-t border-gray-400 my-4">
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://a0.muscache.com/im/pictures/user/dc023d0d-5bf7-4e5f-acf9-4e9cce1e4897.jpg?"
            />
            <div>
              <p>hosted by rekha</p>
              <p className="text-gray-600">8 years of hosting</p>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 w-full md:w-3/4 border-t border-gray-400 my-4">
            <div className="flex items-center justify-center">
              <box-icon name="location-plus"></box-icon>
            </div>
            <div>
              <p>Great Check-in Experience</p>
              <p>
                90% of recent guests gave the check-in process a 5-star
                rating.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <box-icon
                name="key"
                type="solid"
                rotate="270"
              ></box-icon>
            </div>
            <div>
              <p>Park for free</p>
              <p>
                This is one of the few places in the area with free parking.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <box-icon name="calendar-minus"></box-icon>
            </div>
            <div>
              <p>Free cancellation before 5 March</p>
              <p>
                Guests can cancel their reservation for free before March 5th.
              </p>
            </div>
          </div>
          <hr />
          <div className="border-t border-gray-400 my-4">
            <p className="">
              ★ You’ll be taken care of by one of the most successful Airbnb
              hosts in the country.
            </p>
            <p className="">
              ★ The treehouse is nestled in the Himalayan subtropical pine
              forests. It is made keeping in mind to provide a comfortable and
              memorable stay to travelers seeking a break from the hustle of
              city life. The house is cozy both in winter and summer. It has a
              360-degree view of the greater Himalayas.
            </p>{" "}
            <p className=" text-2xl">...</p>
            <span
              onClick={handleOpen}
              className="text-black cursor-pointer underline flex mt-4"
            >
              Show more{" "}
              <box-icon
                name="chevron-right"
                type="solid"
              ></box-icon>
            </span>
            <Modal isOpen={isOpen} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>About this space</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>
                    ★ You’ll be taken care of by one of the most successful
                    Airbnb hosts in the country.
                  </p>
                  <p>
                    ★ The treehouse is nestled in the Himalayan subtropical
                    pine forests. It is made keeping in mind to provide a
                    comfortable and memorable stay to travelers seeking a break
                    from the hustle of city life. The house is cozy both in
                    winter and summer. It has a 360-degree view of the greater
                    Himalayas.
                  </p>
                  <p>
                    ★ We have the best food in the Jibhi and the best view in
                    the town.
                  </p>
                  <p>
                    ★ Our cottage is located in the beautiful Tandi village of
                    Banjar Valley offering a 360 degrees view of the mighty
                    Himalayas.
                  </p>
                  <p>
                    ★ We have designed our cottages without disturbing the pine
                    forests and made them an integral part of our interiors.
                  </p>
                  <p>
                    ★ You will experience the warmth of Himachali culture and
                    hospitality here.
                  </p>
                  <p>
                    ★ Designed with much love and care, we accommodate 1 double
                    bedroom and an attic with double and single beds.
                  </p>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <hr></hr>
          <div className="border-t border-gray-400 my-4">
            <h1 className="text-2xl  mb-4 font-semibold mt-4">
              Where you'll sleep
            </h1>
            <div className="card-images grid grid-cols-2 md:grid-cols-3 gap-4">
              {detailData.images.slice(2, 4).map((image, index) => (
                <img
                  className="h-56 w-96 rounded-lg hover:scale-110 "
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))}
              <br />
              <div>
                {" "}
                <p className="text-xl font-semibold">bedroom 1</p>
                <p>1 double bed,1 floor matress</p>
              </div>

              <div>
                {" "}
                <p className="text-xl font-semibold">bedroom 2</p>
                <p>1 double bed,1 floor matress</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="border-t border-gray-400 my-4">
            {" "}
            <h1 className="text-2xl font-semibold mt-4">
              What this place offers
            </h1>
            <ul>
              {detailData.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <box-icon
                    name="check-square"
                    type="solid"
                    className="text-green-500"
                  ></box-icon>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleOpenAmenitiesModal}
              className="text-black border border-black px-4 py-2 rounded flex  mt-4"
            >
              Show all Amenities
            </button>
            <Modal isOpen={showAmenitiesModal} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Amenities</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ul>
                    {detailData.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <hr />
          <div className="border-t border-gray-400 my-4">
            {" "}
            <h1 className="text-2xl font-semibold">Select check-in date</h1>
            <p>Add your travel dates for exact pricing</p>
            <div className="flex gap-20">
              <div style={{ border: "none", height: "400px" }}>
                <p>Check-in Date:</p>
                <ReactDatePicker
                  selected={checkInDate}
                  onChange={(date) => handleDateChange(date, "checkInDate")}
                  inline
                />
              </div>
              <div style={{ border: "none", height: "400px" }}>
                <p>Check-out Date:</p>
                <ReactDatePicker
                  selected={checkOutDate}
                  onChange={(date) => handleDateChange(date, "checkOutDate")}
                  inline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 ">
        {/* Right side sticky box */}
        <div className="sticky top-20   bg-white-100 ml-60  p-6">
          <div className="flex flex-col gap-3 left-2/3 top-3/4 md:top-1/4 mt-20 md:mt-0 p-5 w-96 text-center bg-white shadow-lg rounded-lg">
          <span className="text-start flex gap-3">
        <h1 className="text-3xl font-bold text-start">₹{detailData.price}</h1>{' '}
        <span className="text-sm text-gray-500 mt-3 ">per night</span>
      </span>
            <form onSubmit={handleSubmit}>
              
              <div className="flex"><div className="-mr-14">
                <label htmlFor="checkInDate" className="">
                  Check-in Date:
                </label>
                
                <DatePicker
                  id="checkInDate"
                  selected={formData.checkInDate}
                  onChange={(date) => handleDateChange(date, "checkInDate")}
                  className="border-2 w-36 border-gray-400 rounded px-2 py-1"
                />
              </div>
              <div className="">
                <label htmlFor="checkOutDate" className="">
                  Check-out Date:
                </label>
                <DatePicker
                  id="checkOutDate"
                  selected={formData.checkOutDate}
                  onChange={(date) => handleDateChange(date, "checkOutDate")}
                  className="border-2 w-36 border-gray-400 rounded px-2 py-1"
                />
              </div></div>
              
              <div className="">
                <label htmlFor="category" className="">
               
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="border-2 border-gray-400 rounded px-1 py-1 w-72"
                >
                  <option value="">Select Category</option>
                  <option value="Guests">Guests</option>
                </select>
              </div>
              {showGuestFields && (
                <>
                  <div className="mb-4">
                    <label htmlFor="adults" className="mr-2">
                      Adults:
                    </label>
                    <button
                      type="button"
                      onClick={() => handleDecrease("adults")}
                      className="mr-2"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleGuestChange}
                      min="1"
                      max="5"
                      className="border-2 border-gray-400 rounded px-2 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleIncrease("adults")}
                      className="ml-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="children" className="mr-2">
                      Children:
                    </label>
                    <button
                      type="button"
                      onClick={() => handleDecrease("children")}
                      className="mr-2"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleGuestChange}
                      min="0"
                      max="5"
                      className="border-2 border-gray-400 rounded px-2 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleIncrease("children")}
                      className="ml-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="infants" className="mr-2">
                      Infants:
                    </label>
                    <button
                      type="button"
                      onClick={() => handleDecrease("infants")}
                      className="mr-2"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="infants"
                      name="infants"
                      value={formData.infants}
                      onChange={handleGuestChange}
                      min="0"
                      max="5"
                      className="border-2 border-gray-400 rounded px-2 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleIncrease("infants")}
                      className="ml-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pets" className="mr-2">
                      Pets:
                    </label>
                    <button
                      type="button"
                      onClick={() => handleDecrease("pets")}
                      className="mr-2"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="pets"
                      name="pets"
                      value={formData.pets}
                      onChange={handleGuestChange}
                      min="0"
                      max="5"
                      className="border-2 border-gray-400 rounded px-2 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleIncrease("pets")}
                      className="ml-2"
                    >
                      +
                    </button>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="bg-rose-600 text-white w-full h-10 rounded-lg mt-4"
              >
                Reserve
              </button>
            </form>
            <p className="text-sm text-gray-500">You won't be charged yet</p>
            <div className="flex justify-between mt-4">
              <p className="text-lg">
                ₹{detailData.price} X {numberOfNights} nights
              </p>
              <p className="text-lg">₹{calculateTotal()}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-lg">Airbnb service fee </p>
              <p className="text-lg">
                ₹{(detailData.price * numberOfNights * airbnbServiceFeePercentage).toFixed(2)}
              </p>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-between mt-2">
              <p className="text-lg font-bold">Total before taxes</p>
              <p className="text-lg font-bold">₹{calculateTotalpay()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
