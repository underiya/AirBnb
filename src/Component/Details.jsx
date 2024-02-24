import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

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

  if (!detailData) return <div>Loading...</div>;

  return (
    <div>
      <div className="card">
        <div className="card-images">
          {detailData.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <div className="card-details">
          <h2>{detailData.name}</h2>
          <p>{detailData.description}</p>
          <p>Rating: {detailData.rating}</p>
          <p>Price: {detailData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
