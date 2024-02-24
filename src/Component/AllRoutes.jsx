import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import CardCarousel from "./CardCarousel";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<CardCarousel />} />
      <Route path={"/details"} element={<Details />} />
    </Routes>
  );
};

export default AllRoutes;
