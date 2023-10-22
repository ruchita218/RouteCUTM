import React, { useState } from 'react';
import Bus1 from '../images/CenturionBus1.jpg';
import Bus2 from '../images/CenturionBus2.jpg';
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  
  return (
    <>
    <Header/>
        <div className="container" style={{marginTop:'120px',marginBottom:'20px'}}>
          <div className="row row1">
            <div className="col">
              <img src={Bus1} alt="about1" className='about1'/>
            </div>
            <div className="col">
              <h2 style={{overflowY:'hidden'}}><br></br>Who we are</h2>
              <p style={{textAlign:'left'}}><b>RouteCUTM</b> is a web application which facilitates our university to
                manage the <b>transport facility</b>. Here Students who want to avail
                transport facility can avail that. They can check what are the various
                <b> transport facility</b> is available in our university.The best part they can do is that they can also pay
                their transport fee there.Transport drivers can register their
                vehicles there. <br /><br />Admin can keep a track of how many students are there
                for a particular vehicle.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <h2 style={{overflowY:'hidden'}}><br></br>What we do</h2>
              <p style={{textAlign:'left'}}>Here we provide daily <b>attendance facility</b> , a <b>unique busPassNo</b> for each student so that no students can cheat.<br></br><br></br> It is specially useful for unique busPassNo <b>unique busPassNo</b> , where drivers can takes daily attendance and admin can keep a <b>track of all the drivers and users</b>. <br></br> <br></br>  <Link to="https://cutm.ac.in/overview-of-cutm/" className="read-more">
          Read More
        </Link>  </p>
            </div>
            <div className="col">
            <img src={Bus2} alt="about2" className='about2'/>
            </div>
          </div>
        </div>

  <Prefooter/>
  <Footer/>
</>
  )
}

export default About