import React from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import image1 from '../images/CenturionBus1.jpg';
import image2 from '../images/CenturionBus2.jpg';
import image3 from '../images/CenturionBus3.jpg';
import image4 from '../images/CenturionBus4.jpg';
import Prefooter from './Prefooter';
import Footer from './Footer';
import './ImageGallery.css'

const ImageGallery = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{marginTop: '120px'}}>
      <div className="row">
        <div className="col" style={{textAlign:'center'}}>
          <div style={{overflowY:'hidden',color:'brown',fontFamily:'cursive',fontSize:'30px'}}>Transportation at a glance</div>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 col-sm-10 col-xs-12 text-center"style={{display:'flex',flexWrap:'wrap',justifyContent: 'space-between'}}>
          <Card style={{ width: '18rem',height:'24rem'}} className="mb-5 custom-card">
            <Card.Img variant="top" src={image1} style={{height:'17rem'}}/>
            <Card.Body>
              
              <Card.Text>
                See our vehicles in action with our transportation gallery.
              </Card.Text>
              
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',height:'24rem' }} className="mb-3 custom-card">
            <Card.Img variant="top" src={image2} style={{height:'17rem'}}/>
            <Card.Body>
              <Card.Text>
                Experience the journey with our stunning image gallery.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', height:'24rem' }} className="mb-3 custom-card">
            <Card.Img variant="top" src={image3} style={{height:'17rem'}}/>
            <Card.Body>
              <Card.Text>
                From luxury to efficiency, our gallery showcases it all.
              </Card.Text>
              
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' ,height:'24rem' }} className="mb-3 custom-card">
            <Card.Img variant="top" src={image4} style={{height:'17rem'}}/>
            <Card.Body>
              <Card.Text>
                Every image tells a story of seamless transportation.
              </Card.Text>
              
            </Card.Body>
          </Card>
          
          
        </div>
      </div>
    </div>
    <Prefooter/>
    <Footer/>
    </>
  )
}

export default ImageGallery