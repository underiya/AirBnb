const Details = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="font-bold text-2xl text-center md:text-left mb-4">
        Wadi Rum Cave Camping
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-80 w-3/4 m-auto">
        <div className="overflow-hidden rounded-lg md:hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/f18dad97-7d8b-444a-9d94-1a428f37f36b.jpg?im_w=1200"
            alt="First Image"
          />
        </div>

        <div className="overflow-hidden disabled rounded-lg md:row-span-2 md:col-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/f18dad97-7d8b-444a-9d94-1a428f37f36b.jpg?im_w=1200"
            alt="First Image"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/3cf691d6-e38f-496a-9a0c-f06df79eca0d.jpg?im_w=720"
            alt="Second Image"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/6d8b944b-9c55-46f9-bb28-983141736b61.jpg?im_w=720"
            alt="Third Image"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/45f0abb8-847c-40d5-bdfe-c8fe0d1305e9.jpg?im_w=720"
            alt="Fourth Image"
          />
        </div>

        <div className="overflow-hidden rounded-lg relative">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/810725ac-934f-46fc-959b-07e80cd969e6.jpg?im_w=720"
            alt="Sixth Image"
          />
          <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md">
            <i className="fa-solid fa-grip fa-2xs mr-4"></i>Show all photos
          </button>
        </div>
      </div>
      <h1 className="2xl">Cave in Wadi Rum Village, Jordan</h1>
      <p>13 guests</p>
      <ul>
        <li>1 bedroom</li>
        <li>10 beds</li>
        <li>Toilet with sink</li>
      </ul>
    </div>
  );
};

export default Details;
