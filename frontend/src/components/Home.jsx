import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import FAQ from './FAQ.jsx';
import Prefooter from './Prefooter.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <>
        <Header/>
        <Slider/>
        
          <div className="container-fluid">
             <div className="row">
               <div className="col-4">
                <table>
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
                      <td>Internal & External Sanitisation</td>
                    </tr>
                    <tr className='tfooter'>
                      <td>Friendly Environment</td>
                    </tr>
                  </tbody>
                </table>
               </div>

               <div className="col-8">
                <div className="row">
                  <div className="col-12">
                    <h4>Transportation</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                  <p>Our campus consists of 20 buses which provides comfortable and smooth journey for staff and students commuting from nearby areas such as Bhubneswar , Jatni, Khandigiri .</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                  <p>Bus facility available from campus to Bhubaneswar via Palasa , Berhampur , Khurda. Bus service from CUTM campus to Indrabati via Gunupur , Rayagada , Koraput , Jeypore , Nawrangpur.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                  <p>The institute provides transportation facilities for days scholar students and staff members.</p>
                  </div>
                </div>
               </div>
             </div>
          </div>

        <div className="container-fluid container2">
          <div className="row">
            <div className="col-12">
              <h4>Make Your transport Payments easier with RouteCUTM which provides you excellent security.   <Link to="/payments"><Button variant='dark'>Pay Now</Button></Link> </h4>
            </div>
          </div>
          
        </div>
        <div className="container-fluid container3">
          <div className="row">
            <div className="col">
              <h4>Getting late? Want to know the location of your Bus? <Link to="/tracklocation" className='findlocation'>Track the location of your bus</Link></h4>
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