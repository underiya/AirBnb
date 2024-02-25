import React, { useState } from "react";

export default function HomeR() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="flex gap-[4px] items-center px-[16px] py-[14px] rounded-[18px] border-[2px] ">
        <div className="">
          <p className="text-[14px] font-semibold">
            Display Total Before Taxes
          </p>
        </div>

        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleToggle}
              className="hidden"
            />
            <div className="toggle__line w-[46px] h-[24px] bg-gray-400 rounded-full shadow-inner"></div>
            <div
              className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow top-0 left-0 ${
                isToggled ? "transform translate-x-full" : ""
              } transition-transform`}
            >
              {isToggled && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
