import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bus1 from "../images/CenturionBus1.jpg";
import Bus2 from "../images/CenturionBus2.jpg";
import Bus4 from "../images/CenturionBus3.jpg";


const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" style={{ marginTop: '0',marginTop: '100px'}} >
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={Bus2}
        alt="First slide"
        style={{ backgroundSize:'contain',height:"85vh"}}
       
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={Bus4}
        alt="Second slide"
        style={{ backgroundSize: 'contain', height: '85vh' }}
      />
    </Carousel.Item>
    
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={Bus1}
        alt="Third slide"
        style={{ backgroundSize: 'contain', height: '85vh' }}
      />
    </Carousel.Item>
  </Carousel>
 
  )
}

export default Slider