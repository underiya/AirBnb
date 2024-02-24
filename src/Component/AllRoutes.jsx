import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import CardCarousel from "./CardCarousel";
import WildCard from "./WildCard";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<CardCarousel />} />
      <Route path={"/details/:id"} element={<Details />} />
      <Route path="*" element={<WildCard />} />
    </Routes>
  );
};

export default AllRoutes;
