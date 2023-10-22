import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./Login.css";
import logo from '../images/CenturionLogo.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Footer from './Footer';

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        location: formData.location,
      });
  
      if (response.status === 201) {
        setRegistrationStatus(response.data);
        //setRegistrationStatus("Registration successful.");
        //  redirect the user to a different page here if needed.

        setFormData({
          name: "",
          email: "",
          password: "",
          location: "",
        });

        setTimeout(() => {
          setRegistrationStatus(null);
        }, 5000);
      } else {
        setRegistrationStatus(response.data);
        //setRegistrationStatus("Registration failed.");
        setTimeout(() => {
          setRegistrationStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      //setRegistrationStatus(response.data);
      setRegistrationStatus("Registration failed.");
      setTimeout(() => {
        setRegistrationStatus(null);
      }, 5000);
    }
  };

  // Effect to clear the form data when the component mounts
  useEffect(() => {
    // Clear the form data
    setFormData({
      name: "",
      email: "",
      password: "",
      location: "",
    });
  }, []);


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
          <Form method='POST' >

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name' value={formData.name} onChange={handleChange} required/> 
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} required
                
                />
                <Form.Text className="text-muted">
                  We'll never share your credentials with anyone else.
                </Form.Text>
                
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} required/>
            </Form.Group>


            <Form.Select aria-label="Default select example" className="mb-3" name='location' value={formData.location} onChange={handleChange} required>
                <option>Select Location</option>
                <option value="Bhubaneswar"> Bhubaneswar</option>
                <option value="Patia">Patia</option>
                <option value="Khandigiri">Khandigiri</option>
            </Form.Select>


            <Button variant="primary" type="submit" className="mb-3" onClick={handleRegistration}>
              Register
            </Button>


            {registrationStatus && (
              <div style={{ color: registrationStatus === 'Registered successfully.' ? 'green' : 'red' }}>
                <b>{registrationStatus}</b>
              </div>
            )}
      
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