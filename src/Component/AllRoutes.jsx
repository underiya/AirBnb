import { Routes, Route } from "react-router-dom";
import Details from "./Details";
const AllRoutes = () => {
  return (
    <Routes>
      {/* <Router path={"/"} /> */}
      <Route path={"/details"} element={<Details />} />
    </Routes>
  );
};

export default AllRoutes;
