import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
// import Details from "./Component/Details";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      {/* <Details/> */}
    </div>
  );
}

export default App;
