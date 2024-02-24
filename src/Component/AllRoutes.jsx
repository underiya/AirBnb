import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import CardCarousel from "./CardCarousel";
import ConfirmPage from "../payment/ConfirmPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<CardCarousel />} />
      <Route path={"/details"} element={<Details />} />
      <Route path={"/payment"} element={<ConfirmPage/>} />
    </Routes>
  );
};

export default AllRoutes;
