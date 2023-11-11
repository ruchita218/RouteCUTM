import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const BusDetails = ({selectedComponent}) => {
  const [busDetails, setBusDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [busIdToDelete, setBusIdToDelete] = useState(null);

  const fetchBusDetails = async () => {
    try {
      const response = await axios.get('/api/admin/findBuses');
      setBusDetails(response.data);
    } catch (error) {
      console.error('Error fetching bus details:', error);
    }
  };

  useEffect(() => {
    if (selectedComponent === 'busdetails') {
      fetchBusDetails();
    }
  }, [selectedComponent]);

  const handleDeleteBus = (busId) => {
    setBusIdToDelete(busId);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`/api/admin/deleteBus/${busIdToDelete}`);
      if (response.status === 200) {
        setShowModal(false);
        fetchBusDetails();
      } else {
        setShowModal(false);
      }
    } catch (error) {
      setShowModal(false);
    }
  };

  

  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
            <Link to='/addBus'><Button variant="dark" type='submit'className='mb-5 custom-button' >Add Bus</Button></Link> &nbsp;&nbsp;
              {/* <Button variant="dark" type='submit'className='mb-5 custom-button' >Delete Bus</Button> */}
            </div>
        </div>
        </div>

        <div className="container">
        <div className="row">
            <div className="col">
            <Table responsive="sm" className='mb-5'>
        <thead>
          <tr >
            <th className="col-md-3 col-sm-3 col-xs-3">Bus No</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Location</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Driver's Email</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Total Registered User</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {busDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.busNo}</td>
            <td>{item.location}</td>
            <td>{item.driverEmail ? item.driverEmail : ''}</td>
            <td>{item.registeredUsers}</td>
            <td><Button variant="dark" type='submit'className='mb-5 custom-button' onClick={() => handleDeleteBus(item.id)}>Delete</Button></td>
            <td><Button variant="dark" type='submit'className='mb-5 custom-button'>Edit</Button></td>
            {/* onClick={() => handleDriverEmail(item.id)}             */}
          </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this Bus?</Modal.Title>
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
  )
}

export default BusDetails