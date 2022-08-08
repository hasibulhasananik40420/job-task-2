import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
