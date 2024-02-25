import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Price from './Price';
import BelowDetails from './BelowDetails';
// import AllImages from './AllImages';
import Review from './Review';

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://backend-airbnb-stqx.onrender.com/api/locations/${id}`);
        const data = await res.json();
        setDetailData(data);
 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  const handleShowAllImages = () => {
    setShowAllImages(true);
    navigate(`/show-all-images`);
  };



  if (!detailData) return <div>Loading...</div>;

  return (
<<<<<<< HEAD
    <div className=" pt-[300px]">
=======
    <div className=' '>
>>>>>>> f4b17256003be68e2ac27e21943dfb7f37942d2c
      <div className="card">
        
        <div className="card-details ">
          <h1 className='font-semibold text-3xl text-start ml-48' >{detailData.title}</h1>
        
     
{/* <div className="card-images grid grid-cols-4 gap-2  rounded-lg w-3/4 m-auto relative mt-4">

  <img className="object-cover col-span-2 row-span-2 rounded-lg" key={0} src={detailData.images[0]} alt={`Image 1`}  />


  {detailData.images.slice(1,5).map((image, index) => (
    <img className="object-cover col-span-1 rounded-lg overflow-hidden h-52 w-full relative" key={index + 1} src={image} alt={`Image ${index + 1}`} />
  ))}
  
 
  <div>
      <button className='absolute right-4 bottom-3 bg-white p-2 border-2 border-black flex gap-2 rounded-lg ' onClick={handleShowAllImages}>
        <box-icon type='solid' name='grid'></box-icon>
        Show All Images
      </button>
      {showAllImages && <AllImages detailData={detailData} />}
    </div>
</div> */}
<>
<div id="imagegrid" className="  grid grid-cols-4 gap-2 w-3/4 m-auto relative mt-4 h-[500px]">
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
    <button className='absolute bottom-4 right-6 bg-white p-2 border-2 border-black flex gap-2 rounded-lg ' onClick={handleShowAllImages}>
      <box-icon type='solid' name='grid'></box-icon>
      Show All Images
    </button>
    {/* {showAllImages && <AllImages props={detailData} />} */}
  </div>
</div>





</>


<div className="text-start ml-48 ">
     
<h1 className='font-bold text-2xl text-start mt-4'>{detailData.location}</h1>       
            <ul className="flex gap-5 list-disc ">
              <p>13 guests</p>
              <li> 1 bedroom</li>
              <li>10 beds</li>
              <li>Toilet with sink</li>
            </ul>
            <span className='flex justify-start items-baseline gap-3 mt-3'> <p className='mt-4'><box-icon className="mr-2 h-2 w-2 " type='solid' name='star'></box-icon>{detailData.rating}</p> <p>Review{detailData.review}</p></span>
           
          </div>
          {/* <div className="flex gap-4 ml-48 mt-4">
        <img
          className="h-10 w-10 rounded-full"
          src="https://a0.muscache.com/im/pictures/user/dc023d0d-5bf7-4e5f-acf9-4e9cce1e4897.jpg?"
        />
        <span>
          hosted by rekha <br />
          <p className="text-gray-600">8 years of hosting</p>{' '}
        </span>
      </div> */}




        </div><Price detailData={detailData}/>
        <div className='grid grid-cols-2 gap-2'>  <BelowDetails detailData={detailData}/>   
        </div>
    <Review reviews={detailData.reviews}/>
      </div> 
    
    </div>
  );
};

export default DetailsPage;