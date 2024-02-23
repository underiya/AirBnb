import "./App.css";
import Footer from "./Component/Footer";
import "boxicons";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Component/Navbar";
import Details from "./Component/Details";
import Login from "./Component/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;
