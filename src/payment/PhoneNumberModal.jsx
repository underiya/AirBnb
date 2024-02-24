import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import PhoneToast from "./PhoneToast";

export default function PhoneNumberModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneNumberValid] = useState(true);
  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for Indian phone number validation
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
};

const handlePhoneChange = (e) => {
    const inputPhoneNumber = e.target.value;
    setPhoneNumber(inputPhoneNumber);
    setIsPhoneNumberValid(validatePhoneNumber(inputPhoneNumber));
};

const handleSave = () => {
    // Validate phone number again before saving
    if (validatePhoneNumber(phoneNumber)) {
        console.log("Valid Phone Number:", phoneNumber);
        onClose();
    } else {
        setIsPhoneNumberValid(false);
    }
};


  return (
    <>
    <Button onClick={onOpen}>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Phone Number</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!isPhoneValid}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
               <FormErrorMessage>
                {!isPhoneValid && "Invalid Phone Number format"}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            {/* <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button> */}
            <PhoneToast colorScheme="blue" mr={3} onClick={handleSave}/>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
