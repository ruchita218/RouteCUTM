import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/CenturionLogo.webp';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Header = () => {

    const navigate = useNavigate();

    const BusInfo=[
        {Location:"Bhubneswar",Busno:"1"},
        {Location:"Cuttack",Busno:"2"},
        {Location:"Khandigiri",Busno:"3"},
    ]
    const [location,setLocation]=useState("");
    const handleClick=(e)=>{
        e.preventDefault();
        BusInfo.map((element)=>{
          if(element.Location===location){
            console.log(element.Busno);
            return true;
          }
          
        })
    }
  return (
    <Navbar  expand="lg" className="bg-body-tertiary pt-0 pb-0 sticky-top"  >
      <Container fluid className='headerContainer'style={{backgroundColor:"brown"}}>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="CenturionLogo" style={{width:"60px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav  className=" m-auto">
            <Nav.Link as={Link} to="/" style={{color:"white"}} >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color:"white"}}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/payments" style={{color:"white"}}>Payment</Nav.Link>
            <Nav.Link as={Link} to="/tracklocation" style={{color:"white"}}>Track Location</Nav.Link>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Your Location"
              className="me-2"
              aria-label="Search"
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button onClick={handleClick} variant="dark">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/login" style={{color:"white"}}>Log In</Nav.Link> */}
            
          </Nav>
          <Form className=" d-flex ml-auto">
          <Form.Control
            type="search"
            placeholder="Search Your Location"
            className="me-2"
            aria-label="Search"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button onClick={handleClick} variant="dark">
            Search
          </Button>
        </Form>
         <Nav> 
          <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
            Log In
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default Header