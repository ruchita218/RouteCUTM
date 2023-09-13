import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import FAQ from './FAQ.jsx';
import Prefooter from './Prefooter.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <>
        <Header/>
        <Slider/>
        
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Transportation Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Online Payments</td>
                    </tr>
                    <tr>
                      <td>Google Map</td>
                    </tr>
                    <tr>
                      <td>Internal & External Sanitation</td>
                    </tr>
                    <tr>
                      <td>Friendly Environment</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="col-md-8">
                <h5 style={{overflowY:"hidden"}}>Transportation</h5>
                <p>Centurion provides the best transportation facility.</p>
                <p>Our campus consist of 20 buses which provides comfortable and smooth journey for staff and students commuting from nearby areas such as Bhubneswar ,Jatni,Khandigiri and many more.</p>
                <p>Our institute provides transportation facilities for day scholar students and staff members.</p>
              </div>
            </div>
          </div>

          <div className="container mt-2">
            <div className="row">
              <div className="col-md">
                <h4 >Make Your transport Payments easier with RouteCUTM which provides you excellent security.   <Link to="/payments"><Button variant='dark' className='paynow'>Pay Now</Button></Link> </h4>
              </div>
            </div>
          </div>

          <div className="container mt-2">
          <div className="row">
            <div className="col">
              <h4 className='container3'>Getting late? Want to know the location of your Bus? <Link to="/tracklocation" className='findlocation'>Track the location of your bus. Click here.</Link></h4>
            </div>
          </div>
        </div>

        
        <FAQ/>
        <Prefooter/>
        <Footer/>
    </>
  )
}

export default Home