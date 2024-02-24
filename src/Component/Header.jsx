import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <>
      <div className="">
        <img
          className=" object-contain w-[100px] ml-[20px]"
          src="airbnb.png"
          alt="log"
        />

        <div className="">
          <input type="text" />
        </div>
      </div>
    </>
  );
}
export default Header;
