import React from 'react'
import Header from './Header'
import Prefooter from './Prefooter'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us Page</title> */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
      integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="ContactCUTM.css" />
    <section className="contact" style={{marginTop:"100px"}}>
      <div className="content">
        <h2>Contact Us</h2>
        <p>We Are Here For You</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                CENTURION UNIVERSITY OF TECHNOLOGY &amp; MANAGEMENT (CUTM) <br />
                HIG-4, Floor 1&amp;2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar,
                Dist: Khurda, Odisha, India.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p> +91 82600 77222</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p> arjitsahu26@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required" defaultValue={""} />
              <span>Type Your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" defaultValue="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        @import url('https://fonts.googleapis.com/css2?family=Poppins::wght@200;300;400;500;600;700;800;900&display=swap');\n*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n.contact{\n    position: relative;\n    min-height: 100vh;\n    padding: 50px 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: url(BUS .jpg);\n    background-size: cover;\n}\n.contact .content{\n    max-width: 800px;\n    text-align: center;\n}\n.contact .content h2{\n    font-size: 36px;\n    font-weight: 500;\n    color: #fff;\n}\n.contact .content p{\n    font-weight: 300;\n    color: #fff;\n}\n.container{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n}\n.container .contactInfo{\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n}\n.container .contactInfo .box{\n    position: relative;\n    padding: 20px 0;\n    display: flex;\n}\n.container .contactInfo .box .icon{\n    min-width: 60px;\n    height: 60px;\n    background: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    font-size: 22px;\n}\n.container .contactInfo .box .text{\n    display: flex;\n    margin-left: 20px;\n    font-size: 16px;\n    color: #fff;\n    flex-direction: column;\n    font-weight: 300;\n}\n.container .contactInfo .box .text h3{\n    font-weight: 500;\n    color: #00bcd4;\n}\n.contactForm{\n    width: 40%;\n    padding: 40px;\n    background: #fff;\n}\n.contactForm h2{\n    font-size: 30px;\n    color: #333;\n    font-weight: 500;\n}\n.contactForm .inputBox{\n    position: relative;\n    width: 100%;\n    margin-top: 10px;\n}\n.contactForm .inputBox input, \n.contactForm .inputBox textarea{\n    width: 100%;\n    padding: 5px 0;\n    font-size: 16px;\n    margin: 10px 0;\n    border: none;\n    border-bottom: 2px solid #333;\n    outline: none;\n    resize: none;\n}\n.contactForm .inputBox span{\n    position: absolute;\n    left: 0;\n    padding: 5px 0;\n    font-size: 16px;\n    margin: 10px 0;\n    pointer-events: none;\n    transition: 0.5s;\n    color: #666;\n}\n.contactForm .inputBox input:focus ~ span, \n.contactForm .inputBox input:valid ~ span,\n.contactForm .inputBox textarea:focus ~ span,\n.contactForm .inputBox textarea:valid ~ span\n{\n    color: #e91e63;\n    font-size: 16px;\n    transform: translateY(-20px);\n}\n.contactForm .inputBox input[type=\"submit\"]{\n    width: 100px;\n    background: #00bcd4;\n    color: #fff;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    font-size: 18px;\n}\n@media (max-width:991px){\n    .contact{\n        padding: 50px;\n    }\n    .container{\n        flex-direction: column;\n    }\n    .container .contactInfo{\n        margin-bottom: 40px;\n    }\n    .container .contactInfo{\n        width: 100%;\n    }\n}\n    "
      }}
    />
    <Prefooter/>
    <Footer/>
  </>
  )
}

export default Contact