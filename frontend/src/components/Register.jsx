import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./Login.css";
import logo from '../images/CenturionLogo.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate} from "react-router-dom";
import Footer from './Footer';

const Register = () => {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    registrationNo: '',
  });

  const [busLocations, setBusLocations] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState(null);

    useEffect(() => {
        async function fetchBusLocations() {
          try {
            const response = await axios.get('/api/users/findBuses');
            setBusLocations(response.data);
          } catch (error) {
            console.error('Error fetching bus locations:', error);
          }
        }
        fetchBusLocations();
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/registerUser', formData);
      if (typeof response.data === 'string') {
        setRegistrationStatus(response.data);
          setFormData({
            name: '',
            email: '',
            password: '',
            location: '',
            registrationNo: '',
          });
          if (registrationStatus==='Registered successfully.') {
            setTimeout(() => {
              navigate('/');
            }, 3000);
          }
      }
    } catch (error) {  
      console.log(error);
      setRegistrationStatus('Something went wrong');
    }
};


  return (
    <>
    
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-8 col-sm-5 background">
            <em >Powering a safe and secure transport services in our college&universities.</em>
            <em>We help students and faculties with a very comfortable transport facility.</em>
        </div>
        <div className="col d-flex form">
          <Link to="/" className='link'><img src={logo} alt="logo" className='img' /></Link>
          <Form method='POST' onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Enter Name</Form.Label> */}
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} required className='mt-3'/> 
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} required
                />
                <Form.Text className="text-muted">
                  We'll never share your credentials with anyone else.
                </Form.Text>
                
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} required/>
            </Form.Group>


            <Form.Select aria-label="Default select example" name="location" value={formData.location} onChange={handleChange}>
              <option>Select Location</option>
              {busLocations.map((location) => (
              <option key={location.id} value={location.location}>
                {location.location}
              </option>
              ))}
            </Form.Select>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              {/* <Form.Label className='mt-2'>Enter Registration No</Form.Label> */}
              <Form.Control type="number" placeholder="Enter your RegistrationNo" name="registrationNo"
                value={formData.registrationNo} onChange={handleChange} className='mt-3'/>
            </Form.Group>


            <Button variant="dark" type="submit" className="mb-3">
              Register
            </Button>


            <p>{registrationStatus}</p>
      
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Link to="/login" className='Link'>Already have an account? Click to login</Link>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register