import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import Nav from 'react-bootstrap/Nav';
import UserDetails from './UserDetails.jsx';
import DriverDetails from './DriverDetails.jsx';
import BusDetails from './BusDetails.jsx';
import AttendanceDetails from './AttendanceDetails.jsx';


const TransportationInfo = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNavClick = (componentName) => {
    // Update the selected component based on the clicked link
    setSelectedComponent(componentName);
  };
  return (
    <>
        <Header/>
        <div className="container" style={{marginTop:'130px' ,marginBottom:'40px'}}>
            <div className="row" >
                <div className="col">
                <Nav variant="tabs" defaultActiveKey="/studentdetails" >
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3">
                    <Nav.Link  to="/studentdetails" onClick={() => handleNavClick('userdetails')}>User's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3">
                    <Nav.Link  to="driverdetails" onClick={() => handleNavClick('driverdetails')}>Driver's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3">
                    <Nav.Link  to="busdetails" onClick={() => handleNavClick('busdetails')}>Bus's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3">
                    <Nav.Link  to="attendancedetails" onClick={() => handleNavClick('attendancedetails')}>Attendance's Details</Nav.Link>
                  </Nav.Item>
                </Nav>
                </div>
            </div>
        </div>
        {selectedComponent === 'userdetails' && <UserDetails />}
        {selectedComponent === 'driverdetails' && <DriverDetails />}
        {selectedComponent === 'busdetails' && <BusDetails />}
        {selectedComponent === 'attendancedetails' && <AttendanceDetails />}

        <Prefooter/>
        <Footer/>
    </>
  )
}

export default TransportationInfo