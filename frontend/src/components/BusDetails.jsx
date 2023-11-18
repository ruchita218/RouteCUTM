import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Link ,useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { loginStorage } from './LoginStorage';

const BusDetails = ({selectedComponent}) => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const [busDetails, setBusDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const[showEditMsg,setShowEditMsg]=useState('');
  const [busIdToDelete, setBusIdToDelete] = useState(null);
  const [email, setEmail] = useState('');
  const [busIdToEdit, setBusIdToEdit] = useState(null);

  const navigate=useNavigate();

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

  const handleEditBus = (busId) => {
    // Set the selected bus ID and open the edit modal
    setBusIdToEdit(busId);
    setShowEditModal(true);
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

  // useEffect(() => {
  //   console.log(showEditMsg);
  // }, [showEditMsg]);

  const handleEditConfirm = async () => {
    try {
      const response=await axios.put(`/api/admin/updateBus/${busIdToEdit}`,{email});
      if (typeof response.data === 'string') {
        setShowEditMsg(response.data);
        setTimeout(() => {
          setShowEditMsg('');
          setShowEditModal(false);
          fetchBusDetails();
        }, 5000);
      }
    } catch (error) {
      console.error('Error editing bus details:', error);
      setShowEditModal(false);
    }
  };

  

  return (
    <>  
      {isLoggedIn===true?(
        <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
            <Link to='/addBus'><Button variant="dark" type='submit'className='mb-5 custom-button' >Add Bus</Button></Link> &nbsp;&nbsp;
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
            <td><Button variant="dark" type='submit'className='mb-5 custom-button'onClick={()=>handleEditBus(item.id)}>Edit</Button></td>
          </tr>
          ))}
        </tbody>
      </Table>

      {/* modal for deleting bus */}
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

      {/* modal for editing bus */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Driver Email</Modal.Title>
        </Modal.Header>
        <Form method='POST'>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><b>Driver Email:</b></Form.Label>
            <Form.Control type="text"  name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          {showEditMsg!=='' && (<p>{showEditMsg}</p>)}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={handleEditConfirm}>
            Change
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>

            </div>
        </div>
      </div>
      </>
      ):(navigate('/'))}
    </>
  )
}

export default BusDetails