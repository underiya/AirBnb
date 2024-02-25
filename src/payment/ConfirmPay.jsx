import { Button, useToast } from "@chakra-ui/react"

 export default function ConfirmPay() {
    const toast = useToast()
    return (
      <Button mt={3} mb={3} color={"black"} bgColor={"palevioletred"}  
        onClick={() =>
          toast({
            title: 'Payment Sucessessfull.',
            description: "payment Done",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Confirm and Pay
      </Button>
    )
  }