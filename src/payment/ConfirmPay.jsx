import { Button, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


 export default function ConfirmPay() {
  const navigate=useNavigate()
    const toast = useToast()
   const handleClick=()=>{
    navigate("/");
    toast({
      title: 'Payment Sucessessfull.',
      description: "payment Done",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
   }
    return (
      <Button mt={3} mb={3} color={"white"} colorScheme="blue" 
        onClick={ 
          handleClick
        }
      >
        Confirm and Pay
      </Button>
    )
  }

