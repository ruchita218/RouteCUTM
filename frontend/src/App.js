import './App.css';
import {Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Termsofuses from "./components/Termsofuses.jsx";
import Blog from "./components/Blog.jsx";
import Profile from "./components/Profile.jsx";
import Attendance from './components/Attendance.jsx';
import TransportationInfo from './components/TransportationInfo.jsx'
import AddUserForm from './components/AddUserForm.jsx';
import AddDriverForm from './components/AddDriverForm.jsx';
import AddBusForm from './components/AddBusForm.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/imagegallery" element={<ImageGallery/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsofuses" element={<Termsofuses/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/transportationinfo' element={<TransportationInfo/>}/>
        <Route path='/addUser' element={<AddUserForm/>}/>
        <Route path='/addDriver' element={<AddDriverForm/>}/>
        <Route path='/addBus' element={<AddBusForm/>}/>
        
      </Routes>

      
    </div>
  );
}

export default App;
