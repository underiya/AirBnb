/* eslint-disable max-len */

const SearchBar = () => {
  return (
    <div className="search-bar w-[70%] mx-auto mb-[10px] rounded-[40px] flex justify-between items-center justify-items-center   border-2  shadow-md overflow-hidden">
      <div className="relative cursor-pointer hover:bg-slate-100  p-[14px] rounded-[42px]">
        <p className="ml-[24px]">Where</p>
        <input
          type="text"
          className=" border-0 bg-transparent text-center  focus:outline-none"
          placeholder="Search destinations"
        />
      </div>

      <div className="relative  cursor-pointer hover:bg-slate-100 p-[14px] rounded-[42px]">
        <p className="ml-[54px]">Check In</p>
        <input
          type="text"
          placeholder="Add dates"
          className="text-center border-0 bg-transparent  focus:outline-none"
        />
      </div>

      <div className="relative cursor-pointer hover:bg-slate-100 p-[14px] rounded-[42px]">
        <p className="ml-[54px]">Checkout</p>
        <input
          type="text"
          className="text-center border-0 bg-transparent  focus:outline-none "
          placeholder="Add dates"
        />
      </div>

      <div className="relative cursor-pointer hover:bg-slate-100 p-[14px] rounded-[42px]">
        {/* <a href=""> */} <p className="ml-[52px]">Who</p>
        <input
          type="text"
          className=" text-center border-0 bg-transparent  focus:outline-none"
          placeholder="Add guests"
        />
        {/* </a> */}
      </div>
    </div>
  );
};

export default SearchBar;
