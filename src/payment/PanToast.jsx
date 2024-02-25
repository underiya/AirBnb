import { Button, useToast } from "@chakra-ui/react"

 export default function PanToast() {
    const toast = useToast()
    return (
      <Button mt={3} mb={3} color={"black"} bgColor={"palevioletred"}  
        onClick={() =>
          toast({
            title: 'Pan Number Added',
            description: "Pan Number Added Successfully",
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