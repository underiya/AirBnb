import React, { useEffect, useRef, useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { fetchData } from './fetch';
const CardCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          "https://backend-airbnb-stqx.onrender.com/api/locations"
        );
        let data = await res.json();
        console.log(data);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  console.log(currentIndex);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M15.293 13.707a1 1 0 01-1.414 1.414l-3.793-3.793a6 6 0 111.414-1.414l3.793 3.793zM11 8a3 3 0 100 6 3 3 0 000-6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 gap-[25px] w-[90%] mx-auto pt-[10px] ">
        {data.map((el, i) => (
          <div>
            <div className="rounded-lg w-[100%] h-[50%] overflow-hidden relative ">
              <img
                className="h-[100%] w-[100%] "
                src={el.images[currentIndex]}
                alt=""
              />
              <div className="text-[14px] font-[400] rounded-full bg-gray-100 py-[2px] px-[15px] absolute top-[10px] left-[10px] ">
                Guest Favourite
              </div>
              <div className="absolute top-[10px] right-[10px] text-[24px] font-[700] ">
                {<CiHeart />}
              </div>

              <span
                onClick={prevImage}
                className=" cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[10px] text-[12px] rounded-full bg-gray-100 flex items-center justify-start py-[10px] px-[10px] text-black font-[500] "
              >
                {<FaAngleLeft />}
              </span>
              <span
                onClick={nextImage}
                className=" cursor-pointer absolute top-1/2 transform -translate-y-1/2  right-[10px] text-[12px] rounded-full bg-gray-100 flex items-center justify-start py-[10px] px-[10px] text-black font-[500] "
              >
                {<FaAngleRight />}
              </span>

              <div className=" absolute h-[70px] w-[70px] bottom-[10px] left-[10px] bg-gray-200 rounded-r-lg shadow-lg flex items-center justify-center ">
                <div className="rounded-full overflow-hidden h-[40px] w-[40px] ">
                  <img
                    className="w-[100%] h-[100%]   "
                    src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>

              <div className="bottom-[20px] w-[50%] mx-auto left-1/2 transform transalet-x-1/2 absolute flex gap-x-[5px] ">
                {el.images.map((el, i) => (
                  <div
                    className={`h-[5px] w-[5px] rounded-full ${
                      currentIndex === i
                        ? "bg-white"
                        : " bg-gray-300 bg-opacity-50 "
                    }   `}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-[10px] ">
              <div className="font-[600] text-[16px] ">{el.location}</div>
              <div>★ {el.reviews[0].rating}</div>
            </div>

            <div className="font-[400] text-gray-600 text-[16px] ">
              {el.description}
            </div>
            <div className="text-[16px] font-[400] ">
              <span className="font-[600] ">{el.price} /</span>night
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default React.memo(CardCarousel);
