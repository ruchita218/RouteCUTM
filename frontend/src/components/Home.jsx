import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import './Home.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import FAQ from './FAQ.jsx';
import Prefooter from './Prefooter.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <>
        <Header />
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
                      <td>Every users will be getting a bus pass</td>
                    </tr>
                    <tr>
                      <td>Daily Attendance</td>
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

          <div className="container mt-3 mb-3">
            <div className="row">
              <div className="col-md payment d-flex">  
                  <h5 style={{overflowY: 'hidden'}}>Make your daily transport easier with <b>RouteCUTM</b> which provides you excellent security ,sanitation and payments facilities.</h5>
              </div>
              <div className="col location pl-5 d-flex">
                  <h5 className='container3'>Get your transport details on your finger tips with just one click to <b>RouteCUTM </b></h5>
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