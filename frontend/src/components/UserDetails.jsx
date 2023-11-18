import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { loginStorage } from './LoginStorage';
import { useNavigate } from 'react-router-dom';
// import AddUserForm from './AddUserForm.jsx';

const UserDetails = ({ selectedComponent }) => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  console.log(loginStorage.details);
  console.log(isLoggedIn);
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const navigate=useNavigate();

  useEffect(() => {
    if (isLoggedIn!==true) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  //const [showUserForm, setShowUserForm] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('/api/admin/findUsers');
      setUserDetails(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching user details: ' + error.message);
    }
  };

  useEffect(() => {
    // if(isLoggedIn===false){
    //   navigate('/');
    //   return;
    // }
    if (selectedComponent === 'userdetails') {
    fetchUserDetails();
  }
  }, [selectedComponent]);
 // [selectedComponent]

  const handleDeleteUser = (userId) => {
    setUserIdToDelete(userId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`/api/admin/deleteUser/${userIdToDelete}`);
      if (response.status === 200) {
        setShowModal(false);
        fetchUserDetails();
      } else {
        setShowModal(false);
      }
    } catch (error) {
      setShowModal(false);
    }
  };

  // const toggleUserForm = () => {
  //   setShowUserForm(!showUserForm);
  // };

  return (
    <>
      {/* {isLoggedIn===true?( */}
        <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
            
              <Link to='/addUser'><Button variant="dark" type='submit'className='mb-5 custom-button' >Add User</Button></Link>&nbsp;&nbsp;
              {/* <Button variant="dark" type='submit'className='mb-5 custom-button' >Delete User</Button> */}
            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
            <div className="col">
            <Table responsive="sm" className='mb-5'>
        <thead>
          <tr >
            <th className="col-md-3 col-sm-3 col-xs-3">Name</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Email</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Registration No</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Location</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusPassNo</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusNo</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Driver's Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {userDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.registrationNo}</td>
            <td>{item.location}</td>
            <td>{item.busPassNo}</td>
            <td>{item.busInfo ? item.busInfo.busNo : ''}</td>
            <td>{item.driverInfo ? item.driverInfo.name : ''}</td>
            <td><Button variant="dark" type='submit'className='mb-5 custom-button' onClick={() => handleDeleteUser(item.id)}>Delete</Button></td>
          </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this user?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {showUserForm && <AddUserForm/>} */}
      </div>
        </div>
      </div>
      </>
      {/* ):(navigate('/'))} */}
      
    </>
)}
export default UserDetails