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
import EditDateToast from "./EditDateToast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditDate({data,onUpdate}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [newData, setNewData] = useState(data);
  const [checkInDate, setCheckInDate] = useState(data.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(data.checkOutDate);


  const today = new Date(); // Get today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date

  const handleSave = () => {
      onUpdate(checkInDate,checkOutDate);
      onClose();   
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={500} w="100%">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={5}>
              <Box>
                <Text>5 nights</Text>
                <Text>1 bed.1 bath</Text>
              </Box>
              <Spacer />

              <Box className="rounded-lg w-72 h-28 ml-3">
                <Flex gap={4}>
                  <Box>
                    <Text>CheckIn Date</Text>
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      placeholderText="Check-in"
                      minDate={tomorrow} // Set minimum date as tomorrow
                      // Add any other props you need for react-datepicker here
                    />
                  </Box>
                  <Box>
                    <Text>Checkout Date</Text>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText="Check-out"
                      minDate={checkInDate || tomorrow} // Set minimum date as check-in date or tomorrow if check-in date not selected
                      // Add any other props you need for react-datepicker here
                    />
                  </Box>
                </Flex>
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
