import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "./Price";
import BelowDetails from "./BelowDetails";

const DetailsPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://backend-airbnb-stqx.onrender.com/api/locations/${id}`
        );
        const data = await res.json();
        setDetailData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!detailData) return <div>Loading...</div>;

  return (
    <div className=" pt-[300px]">
      <div className="card">
        <div className="card-details">
          <h1 className="font-semibold text-3xl text-start ml-48">
            {detailData.title}
          </h1>

          <div className="card-images grid grid-cols-4 gap-2 border border-gray-300 rounded-lg w-3/4 m-auto relative">
            {/* First image spans 2 columns and 2 rows */}
            <img
              className="object-cover col-span-2 row-span-2 rounded-lg"
              key={0}
              src={detailData.images[0]}
              alt={`Image 1`}
            />

            {/* Remaining images */}
            {detailData.images.slice(1, 5).map((image, index) => (
              <img
                className="object-cover col-span-1 rounded-lg overflow-hidden h-52 w-full relative"
                key={index + 1}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}

            {/* Button */}
            {!showAllImages && (
              <button
                onClick={() => setShowAllImages(true)}
                className="absolute bottom-2 right-2 bg-white text-black px-4 py-2 rounded-md flex gap-2"
                style={{ zIndex: 1 }} // Ensure button appears above the images
              >
                <box-icon type="solid" name="grid"></box-icon>
                Show All Images
              </button>
            )}
          </div>

          <div className="text-start ml-48 ">
            <h1 className="font-bold text-2xl text-start">
              {detailData.location}
            </h1>
            <ul className="flex gap-5 list-disc ">
              <p>13 guests</p>
              <li> 1 bedroom</li>
              <li>10 beds</li>
              <li>Toilet with sink</li>
            </ul>
            <span>
              {" "}
              <p>
                <box-icon
                  className="mr-2 h-2 w-2 mt-6"
                  type="solid"
                  name="star"
                ></box-icon>
                {detailData.rating}
              </p>{" "}
              <p>{detailData.review}</p>
            </span>
          </div>
          <div className="flex gap-4 ml-48">
            <img
              className="h-10 w-10 rounded-full"
              src="https://a0.muscache.com/im/pictures/user/dc023d0d-5bf7-4e5f-acf9-4e9cce1e4897.jpg?"
            />
            <span>
              hosted by rekha <br />
              <p className="text-gray-600">8 years of hosting</p>{" "}
            </span>
          </div>

          {/* <p>Price: {detailData.price}</p> */}
        </div>
        <Price detailData={detailData} />
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <BelowDetails detailData={detailData} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
