import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { loginStorage } from './LoginStorage';

const DriverDetails = ({selectedComponent}) => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const [driverDetails, setDriverDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [driverIdToDelete, setDriverIdToDelete] = useState(null);

  const navigate=useNavigate();

  const fetchDriverDetails = async () => {
    try {
      const response = await axios.get('/api/admin/findDrivers');
      setDriverDetails(response.data);
    } catch (error) {
      console.error('Error fetching driver details:', error);
    }
  };


  useEffect(() => {
    if (selectedComponent === 'driverdetails') {
    fetchDriverDetails();
  }
  }, [selectedComponent]);

  const handleDeleteDriver = (driverId) => {
    setDriverIdToDelete(driverId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`/api/admin/deleteDriver/${driverIdToDelete}`);
      if (response.status === 200) {
        setShowModal(false);
        fetchDriverDetails();
      } else {
        setShowModal(false);
      }
    } catch (error) {
      setShowModal(false);
    }
  };

  return (
    <>
      {isLoggedIn===true?(
        <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
            <Link to='/addDriver'><Button variant="dark" type='submit'className='mb-5 custom-button' >Add Driver</Button></Link> &nbsp;&nbsp;
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
            <th className="col-md-3 col-sm-3 col-xs-3">Contact No</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusNo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {driverDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contactNo}</td>
            <td>{item.busInfo?item.busInfo.busNo:''}</td>
            <td><Button variant="dark" type='submit'className='mb-5 custom-button' onClick={() => handleDeleteDriver(item.id)} >Delete</Button></td>
          </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this driver?</Modal.Title>
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
            </div>
        </div>
      </div>
     </>
      ):(navigate('/'))}
    </>
  )
}

export default DriverDetails