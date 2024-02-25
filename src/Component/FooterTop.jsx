import { useState } from "react";

export default function FooterTop() {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Popular");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="w-[90%] ml-[50px] mt-[70px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] font-semibold leading-tight pt-6 sm:pt-12">
          Inspiration for future getaways
        </h2>
        <div className="mt-6 flex flex-wrap space-x-4 border-b-2 overflow-x-auto">
          {categories.map((category) => (
            <a
              key={category}
              className={`text-[20px] font-medium ${
                activeCategory === category
                  ? "text-gray-900 pb-2 border-b-2 active:underline active:border-gray-900"
                  : "text-gray-500 hover:text-gray-900 pb-2"
              }`}
              href="#det"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </a>
          ))}
        </div>
        <div
          id="det"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {(showMore ? allLocations : allLocations.slice(0, 16)).map(
            (location, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-[18px] font-semibold">{location.name}</h3>
                <p className="text-[20px] text-gray-600">
                  {location.description}
                </p>
              </div>
            )
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <a
            className="text-base font-medium text-gray-900 flex items-center space-x-1 cursor-pointer"
            onClick={handleShowMore}
          >
            <span>{showMore ? "Show less" : "Show more"}</span>
            <svg
              className={`h-5 w-5 transform ${
                showMore ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

const categories = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
];

const allLocations = [
  { name: "Canmore", description: "Apartment rentals" },
  { name: "Benalmádena", description: "Beach house rentals" },
  { name: "Marbella", description: "Holiday rentals" },
  { name: "Mijas", description: "House rentals" },
  { name: "Prescott", description: "Pet-friendly rentals" },
  { name: "Scottsdale", description: "Rentals with pools" },
  { name: "Tucson", description: "House rentals" },
  { name: "Jasper", description: "Holiday rentals" },
  { name: "Mountain View", description: "House rentals" },
  { name: "Devonport", description: "Holiday rentals" },
  { name: "Mallacoota", description: "Holiday rentals" },
  { name: "Ibiza", description: "Holiday rentals" },
  { name: "Anaheim", description: "Beach house rentals" },
  { name: "Monterey", description: "Cottage rentals" },
  { name: "Paso Robles", description: "Cottage rentals" },
  { name: "Santa Barbara", description: "Cottage rentals" },
  { name: "Sonoma", description: "Rentals with pools" },
  { name: "La Serena", description: "Beachfront rentals" },
  { name: "Dubai", description: "Beach house rentals" },
  { name: "Birmingham", description: "Flat rentals" },
  { name: "Brighton", description: "Cottage rentals" },
  { name: "Bude", description: "Holiday rentals" },
  { name: "Newcastle upon Tyne", description: "Holiday rentals" },
  { name: "Padstow", description: "Holiday rentals" },
  { name: "South West England", description: "Holiday rentals" },
  { name: "Whitby", description: "Flat rentals" },
  { name: "Fort Myers", description: "Apartment rentals" },
  { name: "Jacksonville", description: "Holiday rentals" },
  { name: "Kissimmee", description: "House rentals" },
  { name: "Longboat Key", description: "Beach apartment rentals" },
  { name: "Orlando", description: "Mansion rentals" },
  { name: "St Petersburg", description: "Pet-friendly rentals" },
  { name: "St. Augustine", description: "Holiday rentals" },
  { name: "The Villages", description: "Holiday rentals" },
  { name: "Dahlonega", description: "Cabin rentals" },
  { name: "Crete", description: "Beachfront rentals" },
  { name: "Mykonos", description: "Beach house rentals" },
  { name: "Santorini", description: "Villa rentals" },
  { name: "O‘ahu", description: "Beachfront rentals" },
  { name: "Capri", description: "Villa rentals" },
  { name: "Bar Harbor", description: "Pet-friendly rentals" },
  { name: "Mackinac Island", description: "Holiday rentals" },
  { name: "St. Joseph", description: "Holiday rentals" },
  { name: "Larsmont", description: "Holiday rentals" },
  { name: "Las Vegas", description: "Holiday rentals" },
  { name: "Madrid", description: "Holiday rentals" },
  { name: "Santa Fe", description: "Ski-in/ski-out rentals" },
  { name: "Bermagui", description: "Holiday rentals" },
  { name: "Evans Head", description: "Holiday rentals" },
  { name: "Sawtell", description: "Holiday rentals" },
  { name: "Young", description: "Holiday rentals" },
  { name: "Ocracoke", description: "Cottage rentals" },
  { name: "Florence", description: "Cabin rentals" },
  { name: "Lakeside", description: "Lakehouse rentals" },
  { name: "Lincoln City", description: "Holiday rentals" },
  { name: "Paphos", description: "Holiday rentals" },
  { name: "Maleny", description: "Holiday rentals" },
  { name: "Stanthorpe", description: "House rentals" },
  { name: "Newport", description: "House rentals" },
  { name: "Glasgow", description: "House rentals" },
  { name: "Scottish Highlands", description: "Holiday rentals" },
  { name: "St Andrews", description: "Family-friendly rentals" },
  { name: "McLaren Vale", description: "House rentals" },
  { name: "Wallaroo", description: "Beachfront rentals" },
  { name: "Charleston", description: "Rentals with pools" },
  { name: "Hvar", description: "Flat rentals" },
  { name: "Saint John", description: "Holiday rentals" },
  { name: "Chattanooga", description: "Holiday rentals" },
  { name: "Concan", description: "Rentals with pools" },
  { name: "Fredericksburg", description: "House rentals" },
  { name: "New Braunfels", description: "Cabin rentals" },
  { name: "Rockport", description: "Beach apartment rentals" },
  { name: "Waco", description: "Holiday rentals" },
  { name: "Forest of Dean District", description: "Holiday rentals" },
  { name: "Jersey", description: "Beach house rentals" },
  { name: "Lyme Regis", description: "Cottage rentals" },
  { name: "Manchester", description: "House rentals" },
  { name: "Seaview", description: "Holiday rentals" },
  { name: "Southwold", description: "Holiday rentals" },
  { name: "Staithes", description: "Holiday rentals" },
  { name: "Wells-next-the-Sea", description: "Holiday rentals" },
  { name: "St. George", description: "House rentals" },
  { name: "Benidorm", description: "Holiday rentals" },
  { name: "Barwon Heads", description: "Pet-friendly rentals" },
  { name: "Castlemaine", description: "Holiday rentals" },
  { name: "Healesville", description: "Holiday rentals" },
  { name: "Marysville", description: "Holiday rentals" },
  { name: "Sorrento", description: "Holiday rentals" },
  { name: "Chincoteague", description: "Pet-friendly rentals" },
  { name: "Williamsburg", description: "Holiday rentals" },
  { name: "Hay-on-Wye", description: "Cottage rentals" },
  { name: "Llandudno", description: "Flat rentals" },
  { name: "Tenby", description: "Flat rentals" },
];
