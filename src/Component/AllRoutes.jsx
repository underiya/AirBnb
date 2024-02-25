import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import CardCarousel from "./CardCarousel";
import WildCard from "./WildCard";
import Dashboard from "../Admin/Dashboard";
import SideNavbar from "../Admin/SideNavbar";
import ConfirmPage from "../payment/ConfirmPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<CardCarousel />} />
      <Route path={"/details/:id"} element={<Details />} />
      <Route path={"/admin"} element={<SideNavbar />} />
      <Route path={"/payment"} element={<ConfirmPage/>} />
      <Route path="*" element={<WildCard />} />
    </Routes>
  );
};

export default AllRoutes;
