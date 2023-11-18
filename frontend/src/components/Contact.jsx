import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="contact-us-container" style={{marginTop:'120px',marginBottom:'100px'}}>

      <div className="contact-info">
        <h2 >Contact Information</h2>
        <ul>
          <li><b>Email</b>:<br/> 210301120218@cutm.ac.in</li>
          <li><b>Phone</b>: +91 620-936-7890</li>
          <li><b>Address</b>:&nbsp;&nbsp;CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM), Bhubaneswar, Dist: Khurda, Odisha, India.</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <Prefooter/>
    <Footer/>
    </>
  );
};

export default Contact;