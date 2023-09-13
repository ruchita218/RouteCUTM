import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer" >
        <div className="row">
            <div className="col-12">
            © 2023 Centurion University | <Link to="/disclaimer" className='link'>Disclaimer</Link> | <Link to="/privacypolicy" className='link'>Privacy Policy</Link> | <Link to="/termsofuses" className='link'>Terms of Uses</Link> 
            </div>
        </div>
    </div>
  )
}

export default Footer