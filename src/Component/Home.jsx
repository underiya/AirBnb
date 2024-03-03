import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        overflow: "hidden",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",

        borderRadius: "50%",
        overflow: "hidden",
      }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 8,
    swipeToSlide: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          width: "90%",
        },
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 4,
          width: "90%",
        },
      },
    ],
  };
  return (
    <div className="w-[90%] slider-container lg:w-[65%] m-auto  text-slate-800">
      <Slider {...settings}>
        {obj1.image.map((imageUrl, index) => (
          <a
            href="#"
            key={index}
            className="hover:underline decoration-[2.5px]"
          >
            <div key={index} className="">
              <img src={imageUrl} alt="category" className=" w-[32px] " />
              <p className="text-[12px] font-[400] text-slate-400">
                {obj1.type[index]}
              </p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}
export default Home;

let obj1 = {
  image: [
    "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
    "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
    "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
    "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
  ],
  type: [
    "Rooms",
    "Amazing Pools",
    "National Park",
    "Arctic",
    "Cave",
    "Island",
    "Camper Vans",
    "OMG!",
    "Amazing views",
    "Camping",
    "Design",
    "View",
    "LakeFront",
    "Tropical",
    "Surfing",
    "Golfing",
    "Mountains",
    "Cityscape",
    "Luxury Resorts",
    "Beaches",
    "Historical Sites",
    "Adventure",
    "Wildlife",
    "Ski Resorts",
    "Underwater",
    "Hidden Gems",
    "Family-Friendly",
    "Lakeside Cabins",
    "Skydiving Spots",
    "Quaint Villages",
    "Exotic Cuisine",
  ],
};
