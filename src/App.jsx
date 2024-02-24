import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";

function App() {
  return (
    <>
      <Navbar />
      <CardCarousel />
      <Footer />
    </>
  );
}

export default App;
