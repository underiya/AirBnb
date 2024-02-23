import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CardCarousel />
      <Footer />
    </div>
  );
}

export default App;
