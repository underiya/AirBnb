import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Component/AllRoutes";
// import Details from "./Component/Details";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Details /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
