import React,{useState,useEffect} from 'react';
import Header from './Header';
import "./Profile.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Button } from 'bootstrap';
import Prefooter from './Prefooter';
import axios from 'axios';
import { loginStorage } from './LoginStorage';


const Profile = () => {

  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '';
  const code = isLoggedIn ? loginStorage.details.code : '';
  const id=isLoggedIn ? loginStorage.details.id : '';

  const [adminData, setAdminData] = useState(null);
  const [driverData, setDriverData] = useState(null);
  const [userData, setUserData] = useState(null);
  //const code = 'admin';

  const handleLogout=()=>{

  }
  

  useEffect(() => {
    const fetchData = async () => {
      if (code === 'admin') {
        try {
          const response = await axios.get('/api/admin/getAdmin');
          setAdminData(response.data);
        } catch (error) {
          console.error('Error fetching admin data: ', error);
          // Handle the error as needed, e.g., set error state or show an error message.
        }
      }
      else if (code === 'driver') {
        try {
          const response = await axios.get(`/api/driver/getDriver/${id}`);
          setDriverData(response.data);
        } catch (error) {
          console.error('Error fetching driver data: ', error);
          // Handle the error as needed, e.g., set error state or show an error message.
        }
      }
      else if (code === 'user') {
        try {
          const response = await axios.get(`/api/users/getUser/${id}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data: ', error);
          // Handle the error as needed, e.g., set error state or show an error message.
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Header/>
    <div className="container profile" style={{marginTop: '150px'}}>
        <div className="row">
            
            {code==='user' && userData &&(
              <>
              <h3 style={{textAlign:'center',overflowY:"hidden"}}>Hello User</h3>
              <div className="col profileCol">
                <div>Name: {userData.name}</div>
                <div>Email: {userData.email}</div>
                <div>Location: {userData.location}</div>
                <div>Bus Pass No: {userData.busPassNo}</div>
                <div>Registration No: {userData.registrationNo}</div>
                <div>Bus No: {userData.busInfo?userData.busInfo.busNo: ''}</div>
                <div>Driver's Name: {userData.driverInfo?userData.driverInfo.name: ''}</div>
                <div>Driver's Contact No: {userData.driverInfo?userData.driverInfo.contactNo: ''}</div>
                <div>Code: {userData.code}</div>
                <button onClick={handleLogout}>Logout</button>
              </div>
              </>
            )}

            {code==='driver' && driverData &&(
              <>
              <h3 style={{textAlign:'center',overflowY:"hidden"}}>Hello Driver</h3>
              <div className="col profileCol">
                <div>Name: {driverData.name}</div>
                <div>Email: {driverData.email}</div>
                <div>Contact No: {driverData.contactNo}</div>
                <div>Bus No: {driverData.busInfo?driverData.busInfo.busNo: ''}</div>
                <div>Total Registered User in your bus: {driverData.busInfo?driverData.busInfo.registeredUsers:''}</div>
                <div>Code: {driverData.code}</div>
                <button onClick={handleLogout}>Logout</button>
              </div>
              </>
            )}

            {code==='admin' && adminData && (
              <>
              <h3 style={{textAlign:'center',overflowY:"hidden"}}>Hello Admin</h3>
              <div className="col profileCol">
                <div>Name: {adminData.name}</div>
                <div>Email: {adminData.email}</div>
                <div>Code: {adminData.code}</div>
                <button onClick={handleLogout}>Logout</button>
              </div>
              </>
            )}
        </div>
    </div>
    <Prefooter/>
    <Footer/>
    </>
  )
}

export default Profile