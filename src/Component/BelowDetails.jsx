import React, { useState } from "react";
import Price from "./Price";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BelowDetails = ({detailData}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="container mx-auto py-8 ">
      
      <div className="flex gap-4 ml-48">
        <img
          className="h-10 w-10 rounded-full"
          src="https://a0.muscache.com/im/pictures/user/dc023d0d-5bf7-4e5f-acf9-4e9cce1e4897.jpg?"
        />
        <span>
          hosted by rekha <br />
          <p className="text-gray-600">8 years of hosting</p>{" "}
        </span>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 w-3/4 ">
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold ">
            <i className="fa-solid fa-key fa-flip-horizontal "></i>
          </span>
        </div>
        <div className="">
          <p>
            Great Check-in Experience ,90% of recent guests gave the check-in
            process a 5-star rating.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold ">
            <img className="h-6 w-6" src="./detailsIMG/circleP.png" alt="ok" />
          </span>
        </div>
        <div className="">
          <p>
            Park for free This is one of the few places in the area with free
            parking.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold ">
            <span className="material-symbols-outlined">edit_calendar</span>
          </span>
        </div>
        <div className="">
          <p>
            Free cancellation before 5 March Guests can cancel their reservation
            for free before March 5th.
          </p>
        </div>
      </div>
      <hr />
      <p className="ml-28">
        ★ You’ll be taken care of by one of the most successful Airbnb hosts in
        the country.
      </p>
      <p className="ml-28">
        ★ The treehouse is nestled in the Himalayan subtropical pine forests. It
        is made keeping in mind to provide a comfortable and memorable stay to
        travelers seeking a break from the hustle of city life. The house is
        cozy both in winter and summer. It has a 360-degree view of the greater
        Himalayas.
      </p>
      <Button onClick={handleOpen} colorScheme="blue" variant="outline">
        Show more
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About this space</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Detailed information content goes here */}

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
              town. The space
            </p>
            <p>
              ★ Our cottage is located in the beautiful Tandi village of Banjar
              Valley offering a 360 degrees view of the mighty Himalayas.
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
  );
};

export default BelowDetails;
