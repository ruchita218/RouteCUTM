import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className="container mt-4 mb-4">
        <div className="row">
            <div className="col">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is the need of this Attendance System here?</Accordion.Header>
                <Accordion.Body>
                 <h6 style={{overflowY:"hidden"}}>It will keep the track of absenties on a particular day of a particular bus.This will not lead to any misconception as currently anyone can enter into any bus.</h6>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is this BusPass No doing here?</Accordion.Header>
                <Accordion.Body>
                  <h6 style={{overflowY:"hidden"}}>EveryDay you can enter to the bus by showing the BusPassNo to the driver. Every users will have a unique BusPassNo so that no two users can take cheat anyone by taking other's BusPassNo</h6>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I pay my transport fee Online?</Accordion.Header>
                <Accordion.Body>
                  <h6 style={{overflowY:"hidden"}}>You need to just go to the Home tab of your RouteCUTM and there you can find the option of "Payment".From there you will be redirected to the "Payment" Page and from there you can proceed.</h6>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
        </div>
    </div>
    
  )
}

export default FAQ