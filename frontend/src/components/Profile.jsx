import React,{useState,useEffect} from 'react';
import Header from './Header';
import "./Profile.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Button } from 'bootstrap';
import Prefooter from './Prefooter';
import axios from 'axios';


const Profile = () => {
  const [adminData, setAdminData] = useState(null);
  const code = 'admin';

  const handleLogout=()=>{

  }

  useEffect(() => {
    const fetchData = async () => {
      if (code === 'admin') {
        try {
          const response = await axios.get('/api/admin/getadmin');
          setAdminData(response.data);
        } catch (error) {
          console.error('Error fetching admin data: ', error);
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
            
            {code==='user' && (
              <>
              <h3 style={{textAlign:'center',overflowY:"hidden"}}>Hello User</h3>
              <div className="col profileCol">
                <div>Name: users.name</div>
                <div>Email: users.email</div>
                <div>Location: users.location</div>
                <div>Registration No: users.email</div>
                <div>Bus No: 12345</div>
                <div>Bus Pass No: 12345</div>
                <div>Driver's Name: abcd</div>
                <div>Driver's Contact No: 1234567890</div>
                <div>Code: 'user'</div>
                <button onClick={handleLogout}>Logout</button>
              </div>
              </>
            )}

            {code==='driver' && (
              <>
              <h3 style={{textAlign:'center',overflowY:"hidden"}}>Hello Driver</h3>
              <div className="col profileCol">
                <div>Name: driver.name</div>
                <div>Email: driver.email</div>
                <div>Bus No: 12345</div>
                <div>Your Contact No: 1234567890</div>
                <div>Total Registered User: 26</div>
                <div>Code: 'driver'</div>
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