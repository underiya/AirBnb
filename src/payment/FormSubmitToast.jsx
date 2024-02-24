import { Button, useToast } from "@chakra-ui/react"

 export default function FormSubmitToast() {
    const toast = useToast()
    return (
      <Button mt={3} mb={3} color={"black"} bgColor={"palevioletred"}  
        onClick={() =>
          toast({
            title: 'Card Data Added',
            description: "Card Data Added Successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Submit
      </Button>
    )
  }