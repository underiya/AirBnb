import { useState } from "react";
import Dashboard from "./Dashboard";

const SideNavbar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard"); // Default to Dashboard

  const Menus = [
    { title: "Dashboard", src: "Chart_fill", component: <Dashboard /> },
    { title: "Inbox", src: "Chat", component: <Inbox /> },
    { title: "Accounts", src: "User", gap: true, component: <Accounts /> },
    { title: "Schedule ", src: "Calendar", component: <Schedule /> },
    { title: "Search", src: "Search", component: <Search /> },
    { title: "Analytics", src: "Chart", component: <Analytics /> },
    { title: "Files ", src: "Folder", gap: true, component: <Files /> },
    { title: "Setting", src: "Setting", component: <Setting /> },
  ];

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                Menu.title === selectedMenu && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(Menu.title)}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {Menus.find((item) => item.title === selectedMenu)?.component}
      </div>
    </div>
  );
};


const Inbox = () => <h1>Inbox Component</h1>;
const Accounts = () => <h1>Accounts Component</h1>;
const Schedule = () => <h1>Schedule Component</h1>;
const Search = () => <h1>Search Component</h1>;
const Analytics = () => <h1>Analytics Component</h1>;
const Files = () => <h1>Files Component</h1>;
const Setting = () => <h1>Setting Component</h1>;

export default SideNavbar;
