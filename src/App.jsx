import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";
import AllRoutes from "./Component/AllRoutes";
import Header from "./Component/Header";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
