/* eslint-disable react/prop-types */
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
} from '@chakra-ui/react';
import Guest from './Guest';

export default function EditGuest({setGuest}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const handleSave = () => {
    setGuest(guestCounts.adults + guestCounts.children);
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
            <Guest guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
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
