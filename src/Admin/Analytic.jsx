import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { handleDelete } from "./fetch";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [dele, setDele] = useState(false);
  const [link, setLink] = useState(
    `https://backend-airbnb-stqx.onrender.com/api/locations?`
  );
  const [search, setSearch] = useState("");
  const finalRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  const [title, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImages] = useState([]);
  const[id,setId]=useState('');
  const[edit,setEdit]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(link);
        let data = await res.json();
        console.log(data);
        setData(data);
        setCurrentIndex(Object.fromEntries(data.map((_, i) => [i, 0])));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [dele, link, edit]);

  const nextImage = (index) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [index]:
        prevIndex[index] === data[index]?.image.length - 1
          ? 0
          : prevIndex[index] + 1,
    }));
  };

  const prevImage = (index) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [index]:
        prevIndex[index] === 0
          ? data[index]?.image.length - 1
          : prevIndex[index] - 1,
    }));
  };
  function handleSearch() {
    setLink(
      `https://backend-airbnb-stqx.onrender.com/api/locations?location_like=${search}`
    );
  }

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleEdit = (el) => {
    console.log(el);
    setName(el.title);
    setRating(el.rating);
    setPrice(el.price);
    setDescription(el.description);
    setImages(el.images);
    setId(el.id);
    console.log("id ", id);
    onEditOpen();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let images=[];
      images=[image];
    try {
      const formData = {
        title,
        rating,
        description,
        price,
        images,
      };

      let res = await axios.patch(
        `https://backend-airbnb-stqx.onrender.com/api/locations/${id}`,
        formData
      );
      setEdit((prev) => !prev);

      console.log(res);
      onEditClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"} color={"white"}>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className="text-blue-400 font-semibold">
              Data has been Deleted Successfully!
            </h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
            <form  className="max-w-md mx-auto" >
       
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
            value={image}
          multiple
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        </div>
            
          </form>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onEditClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="flex justify-center gap-2  my-4 py-3 mt-20">
        <input
          type="text"
          className="px-3 py-2 rounded border border-slate-400 w-3/4"
          placeholder="Search Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 py-1 bg-slate-400 rounded-lg hover:bg-slate-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-[25px] w-[90%] mx-auto pt-[10px]">
        {data.length == 0 && (
          <h1 className=" text-center text-zinc-400">No data found</h1>
        )}
        {data.map((el, i) => (
          <div
            key={i}
            className={`mb-8 ${
              selectedCardIndex !== null && selectedCardIndex !== i
                ? "hidden"
                : "block"
            } relative h-[33rem]`}
          >
            <div className="rounded-lg overflow-hidden relative">
              <img
                className="w-full h-64 object-cover"
                src={el.images[currentIndex[i]]}
                alt=""
              />
              <div className="text-[14px] font-[400] rounded-full bg-gray-100 py-[2px] px-[15px] absolute top-[10px] left-[10px]">
                Guest Favourite
              </div>
              <div className="absolute top-[10px] right-[10px] text-[24px] font-[700]">
                <CiHeart />
              </div>
              <span
                onClick={() => prevImage(i)}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-2 text-sm bg-gray-100 px-2 py-1 rounded-full"
              >
                <FaAngleLeft />
              </span>
              <span
                onClick={() => nextImage(i)}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 text-sm bg-gray-100 px-2 py-1 rounded-full"
              >
                <FaAngleRight />
              </span>
            </div>

            <div className="flex justify-between mt-3">
              <div className="font-semibold text-lg">{el.title}</div>
              <div>★ {el.rating}</div>
            </div>

            <div className="text-gray-600 text-sm mt-1">{el.description}</div>

            <div className="text-sm font-semibold mt-1">
              <span className="font-normal">{el.price} /</span>night
            </div>

            <div className=" flex absolute bottom-0 justify-between">
              <button
                className=" px-3 py-1 bg-slate-400 rounded-lg	text-white  "
                onClick={(e) => handleEdit(el)}
              >
                Edit
              </button>
              <button
                className=" px-3 py-1 bg-red-500 rounded-lg text-white ml-32 "
                onClick={(e) => {
                  handleDelete(el.id, setDele);
                  onOpen();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default React.memo(Analytics);
