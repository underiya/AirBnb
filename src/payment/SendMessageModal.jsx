

import {useState} from 'react';
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
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import MessageToast from './MessageToast';

export default function SendMessageModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [message, setMessage] = useState('');
  const [isMessageValid, setIsMessageValid] = useState(true);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsMessageValid(true);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      setIsMessageValid(false);
      return;
    }
    console.log('Sending message:', message);
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
            <FormControl isInvalid={!isMessageValid} mb={4}>
              <FormLabel>Hi, I have a question about your listing:</FormLabel>
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={handleMessageChange}
                size="lg"
              />
              <FormErrorMessage>Please enter a message.</FormErrorMessage>
            </FormControl>
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
