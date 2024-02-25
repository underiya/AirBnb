// import React, { useState } from "react";
// import Login from "./Login";
// import Signup from "./Signup";
// import Home from "./Home";
// import HomeR from "./HomeR";
// import SearchBar from "./Navbar";
// function Header() {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isUserMenuOpen, setUserMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const toggleUserMenu = () => {
//     setUserMenuOpen(!isUserMenuOpen);
//   };

//   return (
//     <>
//       <div className="fixed w-full bg-white z-[1] shadow-md">
//         <div className="flex w-[90%] m-auto justify-between justify-item-center items-center py-[18px]">
//           <div className="w-[120px]">
//             <a href="airbnb.com">
//               {" "}
//               <img src="/airbnb.png" alt="Log" />
//             </a>{" "}
//           </div>

//           <div className="flex justify-between gap-[24px] text-[22px] text-slate-400">
//             <a
//               href="/"
//               className="active:font-semibold active:text-black active:underline"
//             >
//               Stays
//             </a>
//             <a href="#">Experince</a>
//             <a href="#">Online Experinces</a>
//           </div>

//           {/* HAMBURGER  */}
//           <div className="flex gap-[4px] items-center">
//             <div className="flex justify-center items-center">
//               <a
//                 href="/"
//                 className="font-semibold p-[16px] hover:bg-slate-200 hover:rounded-[50px]"
//               >
//                 Become a Host
//               </a>
//               <a
//                 href="#"
//                 className="text-[36px] px-[16px] hover:bg-slate-200 hover:rounded-[50px]"
//               >
//                 <box-icon name="globe" color="#afabab" size="32px"></box-icon>
//               </a>
//             </div>
//             <div className="flex justify-between pt-[8px] px-[8px]  relative hover:bg-slate-200 hover:rounded-[22px]">
//               <a href="#" onClick={toggleMenu}>
//                 <box-icon name="menu" size="42px"></box-icon>
//               </a>
//               {isMenuOpen && (
//                 <div className=" flex flex-col justify-between items-center absolute top-full right-2   bg-white border rounded mt-[4px] p-[18px] z-10 ">
//                   <p className="px-[20px]  text-gray-800">
//                     <Login />
//                   </p>
//                   <p className="px-[20px]  text-gray-800">
//                     <Signup />
//                   </p>
//                   <a
//                     href="https://www.airbnb.co.in/help"
//                     className="px-[20px] text-[16px] text-gray-800"
//                   >
//                     Help
//                   </a>
//                   <a href="/" className="px-[20px] text-[16px] text-gray-800">
//                     Contact
//                   </a>
//                 </div>
//               )}

//               <box-icon name="user-circle" size="42px" type="solid"></box-icon>
//             </div>
//           </div>
//         </div>
//         <div>
//           <SearchBar />
//         </div>

//         <hr className="border-t-3" />
//         <div className=" w-[90%] flex justify-between justify-items-center  gap-[10px] items-center mx-auto my-[14px] pb-[20px]">
//           <Home />
//           <div className="px-[16px] py-[12px] rounded-[18px] border-[2px] ">
//             <a href="/">
//               <img
//                 src="filter.jpg"
//                 alt="fil"
//                 className="w-[28px]  inline-block font-light mr-[4px]"
//               />
//               Filters
//             </a>
//           </div>
//           <a href="/">
//             {" "}
//             <HomeR />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import HomeR from "./HomeR";
import SearchBar from "./Navbar";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <div className="fixed w-full bg-white z-[1] shadow-md">
        <div className="flex w-[90%] m-auto justify-between justify-item-center items-center py-[18px]">
          <div className="w-[120px]">
            <a href="airbnb.com">
              <img src="/airbnb.png" alt="Log" />
            </a>
          </div>

          <div className="flex justify-between gap-[24px] text-[22px] text-slate-400">
            <a
              href="/"
              className="active:font-semibold active:text-black active:underline"
            >
              Stays
            </a>
            <a href="#">Experince</a>
            <a href="#">Online Experinces</a>
          </div>

          {/* HAMBURGER  */}
          <div className="lg:flex hidden gap-[4px] items-center">
            <div className="flex justify-center items-center">
              <a
                href="/"
                className="font-semibold p-[16px] hover:bg-slate-200 hover:rounded-[50px]"
              >
                Become a Host
              </a>
              <a
                href="#"
                className="text-[36px] px-[16px] hover:bg-slate-200 hover:rounded-[50px]"
              >
                <box-icon name="globe" color="#afabab" size="32px"></box-icon>
              </a>
            </div>
          </div>

          {/* HAMBURGER ICON AND MENU */}
          <div className="flex gap-[4px] items-center">
            <div className="flex justify-between pt-[8px] px-[8px]  relative hover:bg-slate-200 hover:rounded-[22px]">
              <a href="#" onClick={toggleMenu}>
                <box-icon name="menu" size="42px"></box-icon>
              </a>
              {isMenuOpen && (
                <div className=" flex flex-col justify-between items-center absolute top-full right-2   bg-white border rounded mt-[4px] p-[18px] z-10 ">
                  <p className="px-[20px]  text-gray-800">
                    <Login />
                  </p>
                  <p className="px-[20px]  text-gray-800">
                    <Signup />
                  </p>
                  <a
                    href="https://www.airbnb.co.in/help"
                    className="px-[20px] text-[16px] text-gray-800"
                  >
                    Help
                  </a>
                  <a href="/" className="px-[20px] text-[16px] text-gray-800">
                    Contact
                  </a>
                </div>
              )}

              <box-icon name="user-circle" size="42px" type="solid"></box-icon>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <SearchBar />
        </div>

        <hr className="border-t-3" />
        <div className=" w-[90%] flex justify-between justify-items-center  gap-[10px] items-center mx-auto my-[14px] pb-[20px]">
          <Home />
          <div className="px-[16px] py-[12px] rounded-[18px] border-[2px] lg:block hidden">
            <a href="/">
              <img
                src="filter.jpg"
                alt="fil"
                className="w-[28px]  inline-block font-light mr-[4px]"
              />
              Filters
            </a>
          </div>
          <a href="/" className="lg:block hidden">
            {" "}
            <HomeR />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
