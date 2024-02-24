import React, { useEffect, useRef, useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { handleDelete } from "./fetch";
// import { fetchData } from './fetch';
const Analytics = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [dele,setDele] = useState(false);
  const [link,setLink]=useState(`https://backend-airbnb-stqx.onrender.com/api/locations?`);
  const [search,setSearch]=useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          link
        );
        let data = await res.json();
        console.log(data);
        setData(data);
        setCurrentIndex(Object.fromEntries(data.map((_, i) => [i, 0])));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [dele,link]);

  const nextImage = (index) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [index]:
        prevIndex[index] === data[index]?.images.length - 1
          ? 0
          : prevIndex[index] + 1,
    }));
  };

  const prevImage = (index) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [index]:
        prevIndex[index] === 0
          ? data[index]?.images.length - 1
          : prevIndex[index] - 1,
    }));
  };
  function handleSearch(){
    setLink(`https://backend-airbnb-stqx.onrender.com/api/locations?location_like=${search}`)
  }

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  }

  return (
    <>
    <div className="flex justify-center gap-2 border my-4 py-3">
  <input
    type="text"
    className="px-3 py-2 rounded border border-slate-400 "
    placeholder="Search"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
  />
  <button className="px-4 py-1 bg-slate-400 rounded-sm hover:bg-slate-500" onClick={handleSearch}>Search</button>
</div>

   
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-[25px] w-[90%] mx-auto pt-[10px] ">

      {data.map((el, i) => (
        <div
          key={i}
          className={`mb-8 ${
            selectedCardIndex !== null && selectedCardIndex !== i
              ? "hidden"
              : "block"
          }` }
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
            {/* ... Other card elements ... */}
          </div>

          {/* ... Other card content ... */}

          <div className="flex justify-between mt-3">
            <div className="font-semibold text-lg">{el.title}</div>
            <div>★ {el.rating}</div>
          </div>

          <div className="text-gray-600 text-sm mt-1">{el.description}</div>

          <div className="text-sm font-semibold mt-1">
            <span className="font-normal">{el.price} /</span>night
          </div>
          <div className=" flex gap-3 align-middle justify-between">
          <button className=" px-3 py-1 bg-slate-400 rounded-sm	"> Edit</button>
          <button className=" px-3 py-1 bg-red-500 rounded-sm	" onClick={(e)=>{
          handleDelete(el.id,setDele);
          // setDele(!dele);
          }}>Delete</button>
          </div>
         
        </div>
      ))}
    </div>
  </>
)
};
export default React.memo(Analytics);
