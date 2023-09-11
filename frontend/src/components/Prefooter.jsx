import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/CenturionLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Prefooter.css';

const Prefooter = () => {
  return (
    <div className="container-fluid prefooter">
        <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-12">
                  <Link to='/' className='footerToggle'><img src={logo} alt="CenturionLogo" className='centurionlogo' style={{width:"50px"}} /></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Link to='/register' className='footerToggle link'>Register Your Bus</Link>
                </div>
              </div> 
            </div>

            <div className="col-4">
                  <div className="row">
                    <div className="col-12">
                      <Link to='/about' className='footerToggle link'>About Us</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <Link to='/imagegallery' className='footerToggle link'>Image Gallery</Link>
                    </div>
                  </div>
            </div>

            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                      <p className='footerToggle'>Contact Us</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                      <p className='footerToggle'>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                      <FontAwesomeIcon icon={faLocationDot} style={{ color: 'rgb(202, 159, 31)' }}/>
                      <p className='footerToggle'>HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha, India.</p>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-12">
                    <a href='https://www.facebook.com/centurionuniversity/' ><FontAwesomeIcon icon={faFacebook} style={{ color: 'navy' }}/></a>
                    <a href='https://twitter.com/CUTMIndia' ><FontAwesomeIcon icon={faTwitter} style={{ color: 'rgb(26, 169, 226)' }}/></a>
                    <a href='https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA' ><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prefooter