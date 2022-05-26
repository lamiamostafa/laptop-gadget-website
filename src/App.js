
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
import Login from './Pages/Login/Login';
// import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './Pages/Home/AllProducts';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
        {/* <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>


      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
