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
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, loginSuccess } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const toast = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //   console.log(form);
  const handleLogin = (e) => {
    e.preventDefault();

    if (form.email == "admin@admin.com" && form.password == "admin") {
      const Admin = [
        {
          firstName: "Admin",
          email: form.email,
          password: form.password,
        },
      ];
      dispatch(loginSuccess(Admin));
      onClose();
      navigate("/admin");
    } else {
      dispatch(login(form.email, form.password));

      // console.log(isLoggedIn);
      // if (isLoggedIn) {
      //   toast({
      //     title: "login Successfull",
      //     description: "Login completed",
      //     status: "success",
      //     duration: 5000,
      //     isClosable: true,
      //   });
      // } else {
      //   toast({
      //     title: "Login failed",
      //     description: error,
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //   });
      // }
    }
  };

  useEffect(() => {
    if (isLoggedIn || form.email == "admin@admin.com") {
      onClose();
    }
  }, [isLoggedIn, onClose]);

  return (
    <>
      <Button onClick={onOpen} bg="white" _hover="color:cyan">
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <FormControl>
            <ModalBody>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={handleLogin}
                bg="#FF5A5F"
                _hover="color:#FF5A5F"
                color="white"
              >
                Login
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

export default Login;
