import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/api/admin/findUsers');
        setUserDetails(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError('Error fetching user details: ' + error.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Add User</Button> &nbsp;&nbsp;
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Delete User</Button>
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
            <th className="col-md-3 col-sm-3 col-xs-3">email</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Registration No</th>
            <th className="col-md-3 col-sm-3 col-xs-3">Location</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusPassNo</th>
            <th className="col-md-3 col-sm-3 col-xs-3">BusNo</th>
          </tr>
        </thead>
        <tbody>
        {userDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.registrationNo}</td>
            <td>{item.location}</td>
            <td>{item.busPassNo}</td>
            <td>{item.busInfo.busNo}</td>
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

export default UserDetails