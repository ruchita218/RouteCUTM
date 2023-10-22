import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const BusDetails = () => {
  const [busDetails, setBusDetails] = useState([]);

  useEffect(() => {
    // Fetch bus details from the server
    axios.get('/api/admin/findBuses')
      .then((response) => {
        setBusDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bus details:', error);
      });
  }, []);

  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Add Bus</Button> &nbsp;&nbsp;
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Delete Bus</Button>
            </div>
        </div>
        </div>

        <div className="container">
        <div className="row">
            <div className="col">
            <Table responsive="sm" className='mb-5'>
        <thead>
          <tr >
            <th className="col-md-3 col-sm-3 col-xs-3">BussNo</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Location</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Driver's Name</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Total Registered User</th>
          </tr>
        </thead>
        <tbody>
        {busDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.busNo}</td>
            <td>{item.location}</td>
            <td>{item.driverInfo ? item.driverInfo.name : 'No Driver'}</td>
            {/* <td>{item.busInfo.name }</td> */}
            <td>{item.registeredUsers}</td>
          </tr>
          ))}
        </tbody>
      </Table>
            </div>
        </div>
      </div>
    </>
  )
}

export default BusDetails