import "./App.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import CardCarousel from "./Component/CardCarousel";
import AllRoutes from "./Component/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
