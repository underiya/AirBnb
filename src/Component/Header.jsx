import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import HomeR from "./HomeR";
import SearchBar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/action";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [showSearchBar, setShowSearchBar] = useState(true);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const userInitial = user[0]?.firstName.charAt(0).toUpperCase();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed w-full bg-white z-[1] shadow-md">
        <div className="flex w-[90%] m-auto justify-between justify-item-center items-center py-[10px]">
          <div className="w-[120px]">
            <a href="airbnb.com">
              <img src="/airbnb.png" alt="Log" />
            </a>
          </div>

          <div className="lg:flex hidden justify-between gap-[22px] ml-[50px] text-[22px] text-slate-400">
            <a
              href="/"
              className="active:font-semibold active:text-black active:underline"
            >
              Stays
            </a>
            <a href="#">Experince</a>
            <a href="#">Online Experinces</a>
          </div>

          <div className="flex">
            <div className="lg:flex hidden gap-[4px] items-center">
              <div className="flex justify-center items-center">
                <a
                  href="/"
                  className="font-semibold px-[10px] py-[10px] hover:bg-slate-100 hover:rounded-[50px]"
                >
                  Become a Host
                </a>
                <a
                  href="#"
                  className="text-[34px] px-[10px] hover:bg-slate-100 hover:rounded-[50px]"
                >
                  <box-icon name="globe" color="black" size="24px"></box-icon>
                </a>
              </div>
            </div>

            <div className="flex gap-[4px] items-center">
              <div className="flex justify-between pt-[8px] px-[6px] border-[1px] rounded-[18px] relative hover:bg-slate-100 hover:rounded-[22px]">
                <a href="#" onClick={toggleMenu}>
                  <box-icon name="menu" size="32px"></box-icon>
                </a>
                {isMenuOpen && (
                  <div className=" flex flex-col justify-between items-center absolute top-full right-2   bg-white border rounded mt-[4px] p-[18px] z-10 ">
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        className=" bg-[#FF5A5F]  text-white p-2  rounded-[8px] "
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <p className="px-[20px]  text-gray-800">
                          <Login />
                        </p>
                        <p className="px-[20px]  text-gray-800">
                          <Signup />
                        </p>
                      </>
                    )}
                    <a href="/" className="px-[20px] text-[16px] text-gray-800">
                      Help
                    </a>
                    <a href="/" className="px-[20px] text-[16px] text-gray-800">
                      Contact
                    </a>
                  </div>
                )}

                {isLoggedIn ? (
                  <>
                    <h1 className=" bg-black text-white w-10 h-10  text-center text-[25px] rounded-[50%]  font-bold">
                      {userInitial}
                    </h1>
                  </>
                ) : (
                  <box-icon
                    name="user-circle"
                    size="42px"
                    type="solid"
                    color="grey"
                  ></box-icon>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={showSearchBar ? "lg:block hidden" : "hidden"}>
          <SearchBar />
        </div>

        <hr className="border-t-3" />
        <div className=" w-[90%] flex justify-between justify-items-center  gap-[10px] items-center mx-auto my-[4px] py-[10px]">
          <Home />
          <div className="px-[16px] py-[12px] rounded-[22px] border-[2px] lg:block hidden">
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
