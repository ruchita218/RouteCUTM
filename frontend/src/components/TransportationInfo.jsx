import React,{useState} from 'react';
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import Nav from 'react-bootstrap/Nav';
import UserDetails from './UserDetails.jsx';
import DriverDetails from './DriverDetails.jsx';
import BusDetails from './BusDetails.jsx';
import AttendanceDetails from './AttendanceDetails.jsx';
import './TransportationInfo.css';
import { loginStorage } from './LoginStorage.js';


const TransportationInfo = () => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const [selectedComponent, setSelectedComponent] = useState('userdetails');

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
                {/* {isLoggedIn===true && ( */}
                  <Nav variant="tabs" defaultActiveKey="/studentdetails" >
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3 ">
                    <Nav.Link  to="#" onClick={() => handleNavClick('userdetails')} className={`${selectedComponent === 'userdetails' ? 'selected-tab' : 'non-selected-tab'}`}>User's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3 ">
                    <Nav.Link  to="#" onClick={() => handleNavClick('driverdetails')} className={`${selectedComponent === 'driverdetails' ? 'selected-tab' : 'non-selected-tab'}`}>Driver's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3 ">
                    <Nav.Link  to="#" onClick={() => handleNavClick('busdetails')} className={`${selectedComponent === 'busdetails' ? 'selected-tab' : 'non-selected-tab'}`}>Bus's Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{overflowY:'hidden'}} className="col-md-3 col-sm-3 col-xs-3 ">
                    <Nav.Link  to="#" onClick={() => handleNavClick('attendancedetails')} className={`${selectedComponent === 'attendancedetails' ? 'selected-tab' : 'non-selected-tab'}`}>Attendance's Details</Nav.Link>
                  </Nav.Item>
                </Nav>
                {/* )} */}
                </div>
            </div>
        </div>

        {selectedComponent === 'userdetails' && <UserDetails selectedComponent={selectedComponent}/>}
        {selectedComponent === 'driverdetails' && <DriverDetails selectedComponent={selectedComponent}/>}
        {selectedComponent === 'busdetails' && <BusDetails selectedComponent={selectedComponent}/>}
        {selectedComponent === 'attendancedetails' && <AttendanceDetails selectedComponent={selectedComponent}/>}

        <div >
          <Prefooter/>
          <Footer/>
        </div>
    </>
  )
}

export default TransportationInfo