
import "boxicons/css/boxicons.min.css";
import Login from "./Login";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center w-[90%] m-auto my-[20px]">
          <div>
            <a href="/">
              {" "}
              <img src="airbnb.png" alt="logo-bnb" className="w-[120px] " />
            </a>
          </div>
          <div className="flex justify-between  gap-4 font-semibold border-4 px-[40px] py-[16px] rounded-[50px]">
            <a href="/">Anywhere |</a>
            <a href="/">Anyweek |</a>
            <a href="/">Any guests</a>
          </div>
          <div className="flex items-center gap-1 ">
            <a
              href="/"
              className=" font-semibold p-[16px]  hover:bg-slate-200  hover:rounded-[50px] "
            >
              Airbnb Your Home
            </a>
            <a
              href=""
              className="text-[36px] px-[16px]  hover:bg-slate-200  hover:rounded-[50px]"
            >
              <box-icon name="globe" color="#afabab" size="32px"></box-icon>
            </a>
            <div className="flex justify-between border-2 gap-4 rounded-[50px] p-[10px] align-middle hover:shadow-md">
              <box-icon name="menu" size="42px"></box-icon>
              <box-icon name="user-circle" size="42px" type="solid"></box-icon>
              <Login />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-4" />

      <div>
        <div className="flex items-center space-x-4">
          <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 flex items-center space-x-2 px-4 py-2 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span>Filters</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">
              Display total before taxes
            </span>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="display-total"
            >
              <span
                data-state="unchecked"
                className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
