import {Button, useToast} from '@chakra-ui/react';

export default function PhoneToast() {
  const toast = useToast();
  return (
    <Button
      mt={3}
      mb={3}
      color={'black'}
      bgColor={'palevioletred'}
      onClick={() =>
        toast({
          title: 'Phone Number Add',
          description: 'Phone Number Added Successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    >
      Save
    </Button>
  );
}
