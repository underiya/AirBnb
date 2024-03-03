// import FooterTop from "./FooterTop";
import Footerbottom from "./Footerbottom";
import { useState } from "react";
export default function Footer() {
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
      {" "}
      <div className="bg-[#f1efef] mt-[14px]">
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
        {/* <FooterTop /> */}

        <hr className=" border-t-[1px] border-gray-400 my-4" />

        <div className=" flex flex-col text-[18px] ml-[50px] md:flex-row justify-between w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto my-[20px] py-[30px]  ">
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Support</li>
              <li className="hover:underline">
                <a href="/">Help Centre</a>
              </li>
              <li className="hover:underline">
                <a href="/">AirCover</a>
              </li>
              <li className="hover:underline">
                <a href="/">Anti-discrimination</a>
              </li>
              <li className="hover:underline">
                <a href="/">Disability</a>
              </li>
              <li className="hover:underline">
                <a href="/">Cancellation options</a>
              </li>
              <li className="hover:underline">
                <a href="/">Report neighbourhood concern</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Hosting</li>
              <li className="hover:underline">
                <a href="/">Airbnb your home</a>
              </li>
              <li className="hover:underline">
                <a href="/">AirCover for Hosts</a>
              </li>
              <li className="hover:underline">
                <a href="/">Hosting resources</a>
              </li>
              <li className="hover:underline">
                <a href="/">Community forum</a>
              </li>
              <li className="hover:underline">
                <a href="/">Hosting responsibly</a>
              </li>
              <li className="hover:underline">
                <a href="/">Join a free Hosting class</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Airbnb</li>
              <li className="hover:underline">
                <a href="/">Newsroom</a>
              </li>
              <li className="hover:underline">
                <a href="/">New features</a>
              </li>
              <li className="hover:underline">
                <a href="/">Careers</a>
              </li>
              <li className="hover:underline">
                <a href="/">Investors</a>
              </li>
              <li className="hover:underline">
                <a href="/">Airbnb.org emergency stays</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className=" border-t-[1px] border-gray-400 my-4 w-[90%] m-auto" />
        {/* <Footerbottom /> */}

        <div className="flex text-[18px] flex-col ml-[50px] pb-[30px] md:flex-row justify-between w-[90%] md:w-[90%] lg:[90%] xl:[90%]">
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col md:flex-row justify-between gap-2 text-gray-600 text-[16px]">
              <li>&copy; {new Date().getFullYear()} Airbnb Inc,.</li>
              <li className="hover:underline">
                <a
                  href="https://www.airbnb.co.in/help/article/2855"
                  target="_blank"
                >
                  Privacy
                </a>
              </li>
              <li className="hover:underline">
                <a
                  href="https://www.airbnb.co.in/help/article/2908"
                  target="_blank"
                >
                  Terms
                </a>
              </li>
              <li className="hover:underline">
                <a href="https://www.airbnb.co.in/sitemaps/v2" target="_blank">
                  Sitemap
                </a>
              </li>
              <li className="hover:underline">
                <a
                  href="https://www.airbnb.co.in/about/company-details"
                  target="_blank"
                >
                  Company Details
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="social flex gap-2 text-gray-500 text-sm">
              <a
                href="https://www.facebook.com/AirbnbIndia"
                className="hover:underline"
              >
                <box-icon type="logo" name="facebook-square"></box-icon>
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fairbnb_in"
                className="hover:underline"
              >
                <box-icon type="logo" name="twitter"></box-icon>
              </a>
              <a
                href="https://www.instagram.com/airbnb/"
                className="hover:underline"
              >
                <box-icon name="instagram" type="logo"></box-icon>
              </a>
            </div>
          </div>
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
