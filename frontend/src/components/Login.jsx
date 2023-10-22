import React from 'react';
import "./Login.css";
import logo from '../images/CenturionLogo.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Footer from './Footer';

const Login = () => {
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
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                   We'll never share your credentials with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Login
              </Button>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to="/register" className='Link'>New User? Click to Register here</Link>
              </Form.Group>
           </Form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login