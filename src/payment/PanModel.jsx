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
import PanToast from "./PanToast";

export default function PANModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [panNumber, setPanNumber] = useState("");
  const [isPanValid, setIsPanValid] = useState(true);

  const validatePAN = (pan) => {
    // Regular expression for PAN validation
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    return panRegex.test(pan);
  };

  const handleChange = (e) => {
    const inputPan = e.target.value;
    setPanNumber(inputPan);
    setIsPanValid(validatePAN(inputPan));
  };

  const handleSave = () => {
    // Validate PAN again before saving
    if (validatePAN(panNumber)) {
      console.log("Valid PAN:", panNumber);
      onClose();
    } else {
      setIsPanValid(false);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Add </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter PAN Number</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!isPanValid}>
              <FormLabel>PAN Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter PAN Number"
                value={panNumber}
                onChange={handleChange}
              />
              <FormErrorMessage>
                {!isPanValid && "Invalid PAN Number format"}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            {/* <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button> */}
            <PanToast colorScheme="blue" mr={3} onClick={handleSave}/>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
