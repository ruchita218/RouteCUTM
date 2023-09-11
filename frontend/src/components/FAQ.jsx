import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className="container-lg-10">
        <div className="row">
            <div className="col">
            <Accordion className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can I pay my transport fee Online?</Accordion.Header>
        <Accordion.Body>
          <h6>You need to just go to the Home tab of your RouteCUTM and there you can find the option of "Pay Now".From there you will be redirected to the "Payment" Page or you can simply visit Payment Tab.</h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is the online payment secure here?</Accordion.Header>
        <Accordion.Body>
          <h6>Yes. RouteCUTM concerns about your security and you can feel safe to pay your transport payments online here.Instantly you will be getting receipts of your payments after doing your payment.</h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How can I track the location of my Bus?</Accordion.Header>
        <Accordion.Body>
          <h6>You can track it through "Track Location" tab from RouteCUTM NavBar.</h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
    </div>
    
  )
}

export default FAQ