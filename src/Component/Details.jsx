import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Price from "./Price";
import BelowDetails from "./BelowDetails";
import Review from "./Review";
import Map from "./Map";
import { Button, Flex, Text, VStack, useToast } from "@chakra-ui/react";

const DetailsPage = () => {
  const navigate = useNavigate();
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
  const handleShowAllImages = () => {
    setShowAllImages(true);
    navigate(`/show-all-images`);
  };
  const toast = useToast();

  const handleShareClick = () => {
    toast({
      title: "Share",
      description: "copy to clipBoard",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSaveClick = () => {
    toast({
      title: "Save",
      description: "login to save this",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  if (!detailData) return <div>Loading...</div>;
  const { map_location } = detailData; 
  return (
    <div className="pt-[300px] ">
   
      <div className="card">
        <div className="card-details ">
          <div  className="flex">
        <h1 className="font-semibold text-3xl text-start ml-48"> {detailData.title}</h1>   
    <Flex spacing={4} align="center" marginLeft={"600px"} gap={"10px"}>
  <Text textDecoration="underline" cursor="pointer" onClick={handleShareClick}>
    <box-icon name='arrow-from-bottom' style={{ fontSize: "16px", verticalAlign: "middle" }}></box-icon> Share
  </Text>
  <Text textDecoration="underline" cursor="pointer" onClick={handleSaveClick}>
    <box-icon name='heart' style={{ fontSize: "16px", verticalAlign: "middle" }}></box-icon> Save
  </Text>
</Flex>

          </div>

          <>
            <div
              id="imagegrid"
              className="  grid grid-cols-4 gap-2 w-3/4 m-auto relative mt-4 h-[500px]"
            >
              <img
                className="object-cover col-span-2 row-span-2 w-full h-[495px] rounded-lg hover:opacity-75 transition-opacity duration-300"
                key={0}
                src={detailData.images[0]}
                alt={`Image 1`}
              />

              {detailData.images.slice(1, 5).map((image, index) => (
                <img
                  className="object-cover rounded-lg overflow-hidden h-[240px] w-full relative hover:opacity-75 transition-opacity duration-300"
                  key={index + 1}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))}
              <div>
                <button
                  className="absolute bottom-4 right-6 bg-white p-2 border-2 border-black flex gap-2 rounded-lg "
                  onClick={handleShowAllImages}
                >
                  <box-icon type="solid" name="grid"></box-icon>
                  Show All Images
                </button>
              </div>
            </div>
          </>

          <div className="text-start ml-48 ">
            <h1 className="font-bold text-2xl text-start mt-4">
              {detailData.location}
            </h1>
            <ul className="flex gap-5 list-disc ">
              <p>13 guests</p>
              <li> 1 bedroom</li>
              <li>10 beds</li>
              <li>Toilet with sink</li>
            </ul>
            <span className="flex justify-start items-baseline gap-3 mt-3">
              {" "}
              <p className="mt-4">
                <box-icon
                  className="mr-2 h-2 w-2 "
                  type="solid"
                  name="star"
                ></box-icon>
                {detailData.rating}
              </p>{" "}
              <p>Review{detailData.review}</p>
            </span>
          </div>
        </div>
        {/* <Price detailData={detailData} /> */}
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <BelowDetails detailData={detailData} />
        </div>
        <Review reviews={detailData.reviews} />
        <div className="w-full border rounded-lg overflow-hidden">
  <h1 className="text-center p-2">Map</h1>
  {map_location && map_location.lat && map_location.long && (
    <iframe
      title="Map"
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${map_location.lat},${map_location.long}&zoom=15`}
      allowFullScreen
    ></iframe>
  )}
</div>

      </div>
    </div>
  );
};

export default DetailsPage;
