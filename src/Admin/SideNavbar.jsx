import { useState } from "react";
import Dashboard from "./Dashboard";
import Inbox from "./Inbox";
import Analytics from "./Analytic";


const SideNavbar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard"); // Default to Dashboard

  const Menus = [
    { title: "Dashboard", src: "Chart_fill", component: <Dashboard /> },
    { title: "Add Data", src: "Chat", component: <Inbox /> },
    // { title: "Accounts", src: "User",  component: <Accounts /> },
    // { title: "Schedule ", src: "Calendar", component: <Schedule /> },
    // { title: "Search", src: "Search", component: <Search /> },
    { title: "Analytics", src: "Chart", component:<Analytics/>  },
    // { title: "Files ", src: "Folder",  component: <Files /> },
    // { title: "Setting", src: "Setting", component: <Setting /> },
  ];

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  return (
    <>
    {/* <div className="flex flex-col 	"> */}
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple p-5  pt-8 relative duration-300 w-full`}
      >
        
        <div className="flex gap-x-4 items-center justify-center">
          
         
        <ul className="pt-6 flex gap-8">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                Menu.title === selectedMenu && "bg-light-white"
              } `}
              onClick={() => handleMenuClick(Menu.title)}
            >
              
              <h1 className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </h1>
            </li>
          ))}
        </ul>
        </div>
      </div>
      
    {/* </div> */}
    <div className="h-screen flex-1 p-7">
    {Menus.find((item) => item.title === selectedMenu)?.component}
  </div>
  </>
  );
};


// const Inbox = () => <h1>Inbox Component</h1>;
// const Accounts = () => <h1>Accounts Component</h1>;
// const Schedule = () => <h1>Schedule Component</h1>;
// const Search = () => <h1>Search Component</h1>;
// const Analytics = () => <h1>Analytics Component</h1>;
// const Files = () => <h1>Files Component</h1>;
// const Setting = () => <h1>Setting Component</h1>;

export default SideNavbar;
