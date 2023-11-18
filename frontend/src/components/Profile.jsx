import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from './Header';
import "./Profile.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Prefooter from './Prefooter';
import axios from 'axios';
import { loginStorage } from './LoginStorage';


const Profile = () => {

  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const id=isLoggedIn ? loginStorage.details.id : '';

  // console.log(isLoggedIn);
  // console.log(id);

  const navigate=useNavigate();

  const [adminData, setAdminData] = useState(null);
  const [driverData, setDriverData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [show, setShow] = useState(false);
  const [busLocations, setBusLocations] = useState([]);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const[editLocationStatus,setEditLocationStatus]=useState(null);
  //const[showEditMsg,setShowEditMsg]=useState('');

  const [formData, setFormData] = useState({
    newLocation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const code = 'admin';

  const handleLogout=()=>{
    loginStorage.details={};
    //console.log(loginStorage);
    //console.log(loginStorage.details);
    navigate('/');
  }

  const fetchBusLocations=async()=> {
    try {
      const response = await axios.get('/api/users/findBuses');
      setBusLocations(response.data);
      // if (typeof response.data === 'string') {
        
      // }
    } catch (error) {
      console.error('Error fetching bus locations:', error);
    }
  }

  useEffect(() => {
    fetchBusLocations();
  },[]);
  
  const fetchData = async () => {
    if (code === 'admin') {
      try {
        const response = await axios.get('/api/admin/getAdmin');
        setAdminData(response.data);
      } catch (error) {
        console.error('Error fetching admin data: ', error);
        //setError('Error fetching data. Please try again.');
      }
    }
    else if (code === 'driver') {
      try {
        const response = await axios.get(`/api/driver/getDriver/${id}`);
        setDriverData(response.data);
      } catch (error) {
        console.error('Error fetching driver data: ', error);
        //setError('Error fetching data. Please try again.');
      }
    }
    else if (code === 'user') {
      try {
        const response = await axios.get(`/api/users/getUser/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data: ', error);
        //setError('Error fetching data. Please try again.');
      }
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    if (editLocationStatus === 'Location changed successfully.') {
      setTimeout(() => {
        setEditLocationStatus(null);
        setShowLocationModal(false);
        setShow(false);
        fetchData();
      }, 3000);
    }
  }, [editLocationStatus]);

  const handleLocationConfirm=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.put(`/api/users/changeLocation/${id}`, formData);
      if (typeof response.data === 'string') {
        setEditLocationStatus(response.data);
          setFormData({           
            newLocation: '',
          });
          if (editLocationStatus==='Location changed successfully.') {
            setTimeout(() => {
              setEditLocationStatus(null);
              setShowLocationModal(false);
              navigate('/profile');
            }, 3000);
          }
      }
    } catch (error) {  
      console.log(error);
      setEditLocationStatus('Something went wrong');
    }
  }

  return (
    <>
    {/* {isLoggedIn===true?( */}
    <>
    <Header/>
    <div className="container profile" style={{marginTop: '150px'}}>
        <div className="row">
            {code==='user' && userData &&(
              <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <div style={{textAlign:'right'}}>
                    <Button variant="dark" onClick={handleShow}>
                      <FontAwesomeIcon icon={faCog} /> Settings
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} placement='end' style={{ maxWidth: '200px' }}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Settings</Offcanvas.Title>
                      </Offcanvas.Header>

                      <Offcanvas.Body>
                        <div style={{textAlign:'center'}}>
                          <Button variant='dark' onClick={() => setShowLocationModal(true)}>Change Location</Button>
                          <hr/>
                          <Button variant='dark'>Change Password</Button>
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>

                    <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Change Your Location</Modal.Title>
                      </Modal.Header>
                      <Form method='POST'>
                      <Modal.Body>
                        <Form.Select aria-label="Default select example" name="newLocation" value={formData.newLocation} onChange={handleChange}>
                          <option>Select Location</option>
                            {busLocations.map((location) => (
                            <option key={location.id} value={location.location}>
                              {location.location}
                            </option>
                          ))}
                        </Form.Select>
                        <p>{editLocationStatus}</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowLocationModal(false)}>
                          Close
                        </Button>
                        <Button variant="dark" onClick={handleLocationConfirm}>
                          Change
                        </Button>
                      </Modal.Footer>
                      </Form>
                    </Modal>
                    </div>
                  </div>
                </div>
              </div>
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
    {/* ):(navigate('/'))} */}
    
    </>
  )
}
export default Profile