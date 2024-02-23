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
  Box,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import EditGuestToast from "./EditGuestToast";

export default function EditGuest() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleAdultIncrement = () => {
    setAdultsCount((prevCount) => prevCount + 1);
  };

  const handleAdultDecrement = () => {
    if (adultsCount > 0) {
      setAdultsCount((prevCount) => prevCount - 1);
    }
  };

  const handleChildIncrement = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleChildDecrement = () => {
    if (childrenCount > 0) {
      setChildrenCount((prevCount) => prevCount - 1);
    }
  };

  const handleSave = () => {
    console.log("Adults Count:", adultsCount);
    console.log("Children Count:", childrenCount);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Guests</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box>
                <Text>Adults</Text>
                <Flex>
                  <Button onClick={handleAdultDecrement} mr={5}>-</Button>
                  <Text>{adultsCount}</Text>
                  <Button onClick={handleAdultIncrement}ml={5}>+</Button>
                </Flex>
              </Box>
              <Spacer />
              <Box>
                <Text>Children</Text>
                <Flex >
                  <Button onClick={handleChildDecrement} mr={5}>-</Button>
                  <Text>{childrenCount}</Text>
                  <Button onClick={handleChildIncrement} ml={5}>+</Button>
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
          
            <EditGuestToast colorScheme="blue" mr={3} onClick={handleSave}/>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
