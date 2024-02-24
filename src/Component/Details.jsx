const Details = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="font-bold text-2xl text-center md:text-start ml-48 mb-4">
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

      <div className="grid grid-cols-2 mt-8">
        <div className="">
          <div className="text-start ml-48 ">
            <h1 className="text-2xl">Cave in Wadi Rum Village, Jordan</h1>
            <ul className="flex gap-5 list-disc ">
              <p>13 guests</p>
              <li> 1 bedroom</li>
              <li>10 beds</li>
              <li>Toilet with sink</li>
            </ul>
          </div>
          <div className="">
            {" "}
            <div className="flex h-16 border-2 border-3-black rounded-lg mt-4 text-center gap-2 ml-44">
              <img src="https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg" />
              <p className="text-s font-bold">
                Guest<br></br>favourite
              </p>
              <img src="https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg" />
              <p className="text-xs font-bold pt-4">
                One of the most loved homes on Airbnb based on ratings, reviews
                and reliability
              </p>
              <div className="flex flex-col gap-3">
                <h1>4.97</h1>
                <div className="flex">
                  <i className="fa-solid fa-star fa-2xs"></i>
                  <i className="fa-solid fa-star fa-2xs"></i>
                  <i className="fa-solid fa-star fa-2xs"></i>
                  <i className="fa-solid fa-star fa-2xs"></i>
                  <i className="fa-solid fa-star fa-2xs"></i>
                </div>
              </div>
              <div>
                <h1>274</h1>
                <a href="" className="underline">
                  Reviews
                </a>
              </div>
            </div>
            <hr />
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
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 w-3/4 ">
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold ">
                  <i className="fa-solid fa-key fa-flip-horizontal "></i>
                </span>
              </div>
              <div className="">
                <p>
                  Great Check-in Experience ,90% of recent guests gave the
                  check-in process a 5-star rating.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold ">
                  <img className="h-6 w-6" src="./detailsIMG/circleP.png" />
                </span>
              </div>
              <div className="">
                <p>
                  Park for free This is one of the few places in the area with
                  free parking.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold ">
                  <span className="material-symbols-outlined">
                    edit_calendar
                  </span>
                </span>
              </div>
              <div className="">
                <p>
                  Free cancellation before 5 March Guests can cancel their
                  reservation for free before March 5th.
                </p>
              </div>
            </div>
            <hr />
            <p className="ml-28">
              This is a large self-standing, studio-bedroom with a dome shaped
              roof and excellent natural ventilation on all four sides. Set in a
              beautiful garden with a large fish pond, it provides a tranquil,
              rejuvenating getaway from busy city life. A private place to spend
              quality time with family and friends. (Free for accompanying child
              under 10 years.) Skandavan's micro climate is always a few degrees
              cooler than Pondicherry.
            </p>
          </div>
        </div>


      
      </div>

    </div>
  );
};

export default Details;




