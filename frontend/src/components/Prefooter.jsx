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
        <div className="container">
        <div className="row m-3">
          <div className="col">
            <div><Link to="/"><img src={logo} className="logo" alt="Centurion Logo" /></Link></div>
            <div><Link to="/register" className='footerToggle'>Register Your Bus</Link></div>
          </div>
          <div className="col">
            <div><Link to="/about" className='footerToggle'>About Us</Link></div>
            <div><Link to="/imagegallery" className='footerToggle'>Image Gallery</Link></div>
          </div>
          <div className="col">
            <div ><p>Contact Us</p></div>
            <div ><p>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</p></div>
            <div>
              <span><FontAwesomeIcon icon={faLocationDot} style={{ color: 'rgb(202, 159, 31)' }}/> HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha, India.</span>
            </div>
            <div>
              <Link to="https://www.facebook.com/centurionuniversity/" className='footerToggle'><FontAwesomeIcon icon={faFacebook} className='icon facebook'/></Link>
              <Link to="https://twitter.com/CUTMIndia" className='footerToggle'><FontAwesomeIcon icon={faTwitter} style={{ color: 'rgb(26, 169, 226)' }} className='icon twitter'/></Link>
              <Link to="https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA" className='footerToggle'><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }} className='icon youtube'/></Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Prefooter