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
  Textarea,
  Text,
} from "@chakra-ui/react";
import MessageToast from "./MessageToast";

export default function SendMessageModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const [isMessageValid, setIsMessageValid] = useState(true); // State to track if the message is valid

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsMessageValid(true); // Resetting message validation state when message changes
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      // If message is empty or contains only whitespace
      setIsMessageValid(false); // Set message validation state to false
      return; // Don't proceed further
    }
    console.log("Sending message:", message);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message the Host</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>Hi, I have a question about your listing:</Text>
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={handleMessageChange}
              size="lg"
              isInvalid={!isMessageValid} // Apply invalid styles if message is not valid
            />
            {!isMessageValid && ( // Display error message if message is not valid
              <Text mt={2} color="red.500">
                Please enter a message.
              </Text>
            )}
          </ModalBody>
          <ModalFooter justifyContent="center">
            <MessageToast colorScheme="blue" onClick={handleSendMessage} />
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
