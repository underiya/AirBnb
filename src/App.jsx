import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";
import AllRoutes from "./Component/AllRoutes";
import SideNavbar from "./Admin/SideNavbar";
function App() {
  return (


    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
