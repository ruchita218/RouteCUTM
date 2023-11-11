import React,{useState,useContext,useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/CenturionLogo.webp';
import { Link } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { loginStorage } from './LoginStorage';



const Header = () => {

  //const loginDetails = useSelector((state) => state.loginDetails);
  //console.log(loginStorage.details);

  // useEffect(() => {
  //   console.log(loginStorage.details); // This will log when loginStorage.details gets updated
  // }, [loginStorage.details]);

  //console.log(loginDetails);

  // const handleLogout = () => {
  //   // Handle logout logic here
  // };

      // const code="admin";
      // const isLoggedIn=false;

    // const hasCodeProperty = 'code' in loginStorage.details;
    // const isLoggedIn = hasCodeProperty;
    // const code = hasCodeProperty ? loginStorage.details.code : '';

    const isLoggedIn = loginStorage.details && loginStorage.details.code !== '';
    const code = isLoggedIn ? loginStorage.details.code : '';

    // console.log(isLoggedIn);
    // console.log(code);

   const navigate = useNavigate();

  return (
    <>
    <Navbar  expand="lg" className="bg-body-primary pt-0 pb-0" style={{backgroundColor:"#F1EDED"}} fixed="top" >
      <Container fluid className='headerContainer'>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="CenturionLogo" style={{width:"60px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav  className=" m-auto">
            <Nav.Link as={Link} to="/" className='link' ><b>Home</b></Nav.Link>
            <Nav.Link as={Link} to="/about" className='link'><b>About</b></Nav.Link>
            <Nav.Link as={Link} to="/contact" className='link' ><b>Contact</b></Nav.Link>
            {code === "user" && (
              <Nav.Link as={Link} to="https://cutm.icloudems.com/corecampus/student/fees/common_transport_fees.php" className='link'>
                <b>Payment</b>
              </Nav.Link>
            )}
            {code === "driver" && (
              <Nav.Link as={Link} to="/attendance" className='link'>
                <b>Attendance</b>
              </Nav.Link>
            )}
            {code === "admin" && (
              <Nav.Link as={Link} to="/transportationinfo" className='link'>
                <b>Transportation Info</b>
              </Nav.Link>
            )}
          </Nav>
         <Nav> 
          {isLoggedIn?
           <Link to="/profile" className=' pl-0 pt-3 pb-2 mr-2' ><FontAwesomeIcon icon={faUser} style={{color:"black",fontSize:"23px"}}/></Link>
          :
          <Nav.Link as={Link} to="/login" className='link' style={{paddingRight:'10px'}}>
            <b>Log In</b>
          </Nav.Link>
          }
        </Nav>
        </Navbar.Collapse>
        
      </Container> 
    </Navbar>
    
    </>
  )
}
export default Header