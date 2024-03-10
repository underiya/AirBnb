import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import {useState} from 'react';

export async function postUsers(url, cred) {
  try {
    const res = await axios.post(url, cred);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

const Signup = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    PostUsers('https://backend-airbnb-stqx.onrender.com/api/users', form);
    console.log(form);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} bg="white" _hover="color:white">
        Signup
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <FormControl>
            <ModalBody>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                onChange={(e) =>
                  setForm({...form, firstName: e.target.value})
                }
              />
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                onChange={(e) => setForm({...form, lastName: e.target.value})}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                onChange={(e) => setForm({...form, password: e.target.value})}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={handleSignup}
                bg="#FF5A5F"
                color="white"
                _hover="color:#FF5A5F"
              >
                Signup
              </Button>
              <Button
                colorScheme="black"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
