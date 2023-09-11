import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bus1 from "../images/CenturionBus1.jpg";
import Bus2 from "../images/CenturionBus2.jpg";
import Bus4 from "../images/CenturionBus4.jpg";


const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" style={{ marginTop: '0'}} >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Bus1}
        alt="First slide"
        style={{ backgroundSize: 'cover', height: '80vh' }}
       
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Bus2}
        alt="Second slide"
        style={{ backgroundSize: 'cover', height: '80vh' }}
      />
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Bus4}
        alt="Third slide"
        style={{ backgroundSize: 'cover', height: '80vh' }}
      />
    </Carousel.Item>
  </Carousel>
 
  )
}

export default Slider