import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";
import AllRoutes from "./Component/AllRoutes";
import SideNavbar from "./Admin/SideNavbar";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes />
      <Footer /> */}
      <SideNavbar/>
    </div>
  );
}

export default App;
