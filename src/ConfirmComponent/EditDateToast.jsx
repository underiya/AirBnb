import { Button, useToast } from "@chakra-ui/react"

 export default function EditDateToast() {
    const toast = useToast()
    return (
      <Button mt={3} mb={3} color={"black"} bgColor={"palevioletred"}  
        onClick={() =>
          toast({
            title: 'Date update',
            description: "Date updated Successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Save
      </Button>
    )
  }