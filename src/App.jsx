import './App.css';
import Footer from './Component/Footer';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import AllRoutes from './Component/AllRoutes';
import Header from './Component/Header';
import {useSelector} from 'react-redux';

function App() {
  const Admin = useSelector((state) => state.auth.user);
  console.log(Admin);
  return (
    <>
      {Admin[0]?.email != 'admin@admin.com' ? <Header /> : <div></div>}
      <AllRoutes />
      {Admin[0]?.email != 'admin@admin.com' ? <Footer /> : <div></div>}
    </>
  );
}

export default App;
