import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import { loginStorage } from './LoginStorage';
import BusDetails from './BusDetails';

const AddBusForm = () => {
  const navigate = useNavigate();
  const [addStatus, setAddStatus] = useState('');

  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;

  useEffect(() => {
    if (isLoggedIn!==true) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

    const [formData, setFormData] = useState({
        busNo: '',
        location: '',
        driverEmail: ''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    useEffect(() => {
      if (addStatus === 'Bus added successfully.') {
        setTimeout(() => {
          navigate('/transportationinfo');
        }, 2000);
      }
    }, [addStatus, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/admin/addBus', formData);
            if (typeof response.data === 'string') {
              setAddStatus(response.data);
              setFormData({
                busNo: '',
                location: '',
                driverEmail: ''
              });
              // if (addStatus==='Bus added successfully.') {
              //   setTimeout(() => {
              //     navigate('/transportationinfo');
              //   }, 3000);
              // }
            }
        } catch (error) {  
          console.log(error);
          setAddStatus('Something went wrong');
        }
    };

  return (
    <>
      <Header/>
      <div className="container col-md-6" style={{marginTop:'140px',marginBottom:'20px',backgroundColor:'#F7F7F7',boxShadow: '4px 4px 2px rgba(0, 0, 0, 0.5)',borderRadius:'14px'}}>
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <h2 style={{textAlign:'center',overflowY:'hidden',color:'brown',marginTop:'8px'}}>Add Bus</h2>
          <Form onSubmit={handleSubmit} method='POST'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Bus No</Form.Label>
          <Form.Control type="number" placeholder="Enter Bus No" name="busNo" value={formData.busNo}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" name="location" value={formData.location}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Driver Email</Form.Label>
          <Form.Control type="email" placeholder="Driver Email" name="driverEmail" value={formData.driverEmail}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form.Group>
      
        <p>{addStatus}</p>
    
    </Form>
          </div>
        </div>
      </div>
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default AddBusForm