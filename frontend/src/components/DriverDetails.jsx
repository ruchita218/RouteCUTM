import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const DriverDetails = ({selectedComponent}) => {
  const [driverDetails, setDriverDetails] = useState([]);

  useEffect(() => {
    if (selectedComponent === 'driverdetails') {
    const fetchDriverDetails = async () => {
      try {
        const response = await axios.get('/api/admin/findDrivers');
        setDriverDetails(response.data);
      } catch (error) {
        console.error('Error fetching driver details:', error);
      }
    };

    fetchDriverDetails();
  }
  }, [selectedComponent]);

  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Add Driver</Button> &nbsp;&nbsp;
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Delete Driver</Button>
            </div>
        </div>
        </div>

      <div className="container">
        <div className="row">
            <div className="col">
            <Table responsive="sm" className='mb-5'>
        <thead>
          <tr >
            <th className="col-md-3 col-sm-3 col-xs-3">Name</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Email</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Contact No</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusNo</th>
          </tr>
        </thead>
        <tbody>
        {driverDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contactNo}</td>
            <td>{item.busInfo?item.busInfo.busNo:''}</td>
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

export default DriverDetails