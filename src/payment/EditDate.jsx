/* eslint-disable react/prop-types */
/* eslint-disable max-len */
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
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import EditDateToast from './EditDateToast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditDate({checkInD, checkOutD, setCheckIn, setCheckout}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [checkInDate, setCheckInDate] = useState(checkInD);
  const [checkOutDate, setCheckOutDate] = useState(checkOutD);

  const today = new Date(); // Get today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date


  function formatDate(date) {
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(
        date,
    );
    return `${day} ${month}`;
  }

  const formattedCheckInDate = formatDate(checkInDate);
  const formattedCheckOutDate = formatDate(checkOutDate);


  const handleSave = () => {
    setCheckIn(formattedCheckInDate);
    setCheckout(formattedCheckOutDate);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="72" h={750}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Flex direction="column" gap={5} >
              <Box>
                <Text>CheckIn Date</Text>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  minDate={tomorrow}
                  inline
                />
              </Box>
              <Box>
                <Text>Checkout Date</Text>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={checkInDate || tomorrow}
                  inline
                />
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <EditDateToast color="blue" mr={3} onClick={handleSave} />
            <Button variant="ghost" onClick={onClose}>
        Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}


{/* <ModalOverlay />
  <ModalContent width="70%" height="500px">
    <ModalHeader></ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Flex direction="column" spacing={5}>
        <Box className="rounded-lg w-72 h-28 ml-3">
          <Flex spacing={4}>
            <Box>
              <Text>CheckIn Date</Text>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={tomorrow}
                inline
              />
            </Box>
            <Box>
              <Text>Checkout Date</Text>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate || tomorrow}
                inline
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
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
</Modal>; */}
