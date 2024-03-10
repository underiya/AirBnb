import {Button, useToast} from '@chakra-ui/react';

export default function EditGuestToast() {
  const toast = useToast();
  return (
    <Button mt={3} mb={3} color={'black'} bgColor={'palevioletred'}
      onClick={() =>
        toast({
          title: 'Guest Added',
          description: 'Guest Added Successfully',
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
