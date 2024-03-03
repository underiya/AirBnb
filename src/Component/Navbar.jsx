import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar w-[62%] mx-auto mb-[10px] rounded-[40px] flex justify-center justify-items-center items-center border-2 gap-[10px] shadow-md">
      <div className="relative cursor-pointer hover:bg-slate-100 p-[12px] rounded-[30px]">
        <p>Where</p>
        <input
          type="text"
          className=" border-0 bg-transparent rounded focus:outline-none"
          placeholder="Search destinations"
        />
      </div>

      <div className="relative  cursor-pointer hover:bg-slate-100 p-[10px] rounded-[30px]">
        <p>Check In</p>
        <input
          type="text"
          placeholder="Add dates"
          className=" border-0 bg-transparent rounded focus:outline-none"
        />
      </div>

      <div className="relative cursor-pointer hover:bg-slate-100 p-[12px] rounded-[30px]">
        <p>Checkout</p>
        <input
          type="text"
          className=" border-0 bg-transparent rounded focus:outline-none "
          placeholder="Add dates"
        />
      </div>

      <div className="relative cursor-pointer hover:bg-slate-100 p-[12px] rounded-[30px]">
        <a href="/">
          {" "}
          <p>Who</p>
          <input
            type="text"
            className=" border-0 bg-transparent rounded focus:outline-none"
            placeholder="Add guests"
          />
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
