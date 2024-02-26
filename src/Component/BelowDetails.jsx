import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";

const BelowDetails = ({ detailData }) => {
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

  return (
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
          <p>90% of recent guests gave the check-in process a 5-star rating.</p>
        </div>
        <div className="flex items-center justify-center">
          <box-icon name="key" type="solid" rotate="270"></box-icon>
        </div>
        <div>
          <p>Park for free</p>
          <p>This is one of the few places in the area with free parking.</p>
        </div>
        <div className="flex items-center justify-center">
          <box-icon name="calendar-minus"></box-icon>
        </div>
        <div>
          <p>Free cancellation before 5 March</p>
          <p>Guests can cancel their reservation for free before March 5th.</p>
        </div>
      </div>
      <hr />
      <div className="border-t border-gray-400 my-4">
        <p className="">
          ★ You’ll be taken care of by one of the most successful Airbnb hosts
          in the country.
        </p>
        <p className="">
          ★ The treehouse is nestled in the Himalayan subtropical pine forests.
          It is made keeping in mind to provide a comfortable and memorable stay
          to travelers seeking a break from the hustle of city life. The house
          is cozy both in winter and summer. It has a 360-degree view of the
          greater Himalayas.
        </p>{" "}
        <p className=" text-2xl">...</p>
        <span
          onClick={handleOpen}
          className="text-black cursor-pointer underline flex mt-4"
        >
          Show more <box-icon name="chevron-right" type="solid"></box-icon>
        </span>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>About this space</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                ★ You’ll be taken care of by one of the most successful Airbnb
                hosts in the country.
              </p>
              <p>
                ★ The treehouse is nestled in the Himalayan subtropical pine
                forests. It is made keeping in mind to provide a comfortable and
                memorable stay to travelers seeking a break from the hustle of
                city life. The house is cozy both in winter and summer. It has a
                360-degree view of the greater Himalayas.
              </p>
              <p>
                ★ We have the best food in the Jibhi and the best view in the
                town.
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
        <h1 className="text-2xl font-semibold mt-4">What this place offers</h1>
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
              onChange={handleCheckInDateChange}
              inline
            />
          </div>
          <div style={{ border: "none", height: "400px" }}>
            <p>Check-out Date:</p>
            <ReactDatePicker
              selected={checkOutDate}
              onChange={handleCheckOutDateChange}
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowDetails;
