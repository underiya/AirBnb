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
import Guest from "./Guest";

export default function EditGuest() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
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
            <Guest />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
