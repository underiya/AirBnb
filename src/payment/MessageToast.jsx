import { Button, useToast } from "@chakra-ui/react"

 export default function MessageToast() {
    const toast = useToast()
    return (
      <Button mt={3} mb={3} color={"black"} bgColor={"palevioletred"}  
        onClick={() =>
          toast({
            title: 'Message sent',
            description: "Message sent Successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      >
        send
      </Button>
    )
  }