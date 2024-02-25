import { Button, useToast } from "@chakra-ui/react";

export default function EditDateToast({ onClick }) {
  const toast = useToast();

  const handleClick = () => {
    // Execute the onClick function passed from the parent component
    onClick();

    // If the date update was successful, show the toast and close the modal
    // if (isUpdateSuccessful) {
      toast({
        title: "Date update",
        description: "Date updated Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    // }
  };

  return (
    <Button mt={3} mb={3} colorScheme="blue" onClick={handleClick}>
      Save
    </Button>
  );
}
