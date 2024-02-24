import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
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
      <div className="fixed w-full bg-white z-[1] mb-[500px]">
        <div className="flex w-[90%] m-auto justify-between items-center py-[18px]">
          <div className="w-[120px]">
            <a href="airbnb.com">
              {" "}
              <img src="/airbnb.png" alt="Log" />
            </a>{" "}
          </div>

          {/* HAMBURGER  */}
          <div className="flex gap-[8px]">
            <div className="flex items-center">
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
            <div className="flex justify-between gap-3 relative">
              <a href="#" onClick={toggleMenu}>
                <box-icon name="menu" size="42px"></box-icon>
              </a>
              {isMenuOpen && (
                <div className="absolute top-full left-0 bg-white border rounded mt-2 p-2">
                  <p className="block text-gray-800">
                    <Login />
                  </p>
                  <p className="block text-gray-800">
                    <Signup />
                  </p>
                  <a href="/" className="block text-gray-800">
                    Help
                  </a>
                  <a href="/" className="block text-gray-800">
                    Contact
                  </a>
                </div>
              )}
              <a href="#" onClick={toggleUserMenu}>
                <box-icon
                  name="user-circle"
                  size="42px"
                  type="solid"
                ></box-icon>
              </a>
              {isUserMenuOpen && (
                <div className="absolute top-full right-0 bg-white border rounded mt-2 p-2">
                  <a href="/" className="block text-gray-800">
                    Login
                  </a>
                  <a href="/" className="block text-gray-800">
                    Signup
                  </a>
                  <a href="/" className="block text-gray-800">
                    Help
                  </a>
                  <a href="/" className="block text-gray-800">
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t-3" />
      </div>
    </>
  );
}

export default Header;
