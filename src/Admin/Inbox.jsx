import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { withTheme } from "@emotion/react";


  const Inbox = () => {
    const [title, setName] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImages] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let images=[];
      images=[image];
      try {
        const response = await fetch("https://backend-airbnb-stqx.onrender.com/api/locations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            rating,
            description,
            price,
           images,
          }),
        });
    
        const data = await response.json();
        console.log(data); // Log the response data
        onOpen(); // Open the modal
    
        // Empty the form fields
       
        setName('');
        setRating('');
        setDescription('');
        setPrice('');
        setImages('');
      } catch (error) {
        console.error("Error posting data: ", error);
      }
    };
    

      
        return (
          <>
         
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg={"black"} color={"white"}>
            <ModalHeader>Data Added</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-blue-400 font-semibold">Data has been added Successfully!</h1>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
        

        
          <form onSubmit={handleSubmit} className="max-w-md mx-auto shadow-cyan-800 shadow-2xl p-10 mt-20">
       
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                value={title}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
              <input
                id="rating"
                type="number"
                step="0.1"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>


            <div className="mb-4">
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
        <input
        type="url"
          id="images"
          accept="image/*"
          onChange={(e) => setImages(e.target.value)}
          multiple
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          value={image}
        />
        </div>
            <div className="mb-4">
              <button
                type="submit"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
         
          </>
        )
}
export default Inbox;





