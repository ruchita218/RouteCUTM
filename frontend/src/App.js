import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Payment from "./components/Payment.jsx";
import TrackLocation from "./components/TrackLocation.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Termsofuses from "./components/Termsofuses.jsx";
import Blog from "./components/Blog.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/tracklocation" element={<TrackLocation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/imagegallery" element={<ImageGallery/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsofuses" element={<Termsofuses/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
