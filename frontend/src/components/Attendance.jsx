import React,{useState,useEffect} from 'react';
import Prefooter from './Prefooter';
import Footer from './Footer';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Attendance.css";

const Attendance = () => {

  const [attendance, setAttendance] = useState([
    { id: 1, regNo: 218, status: null },
    { id: 2, regNo: 236, status: null },
    { id: 3, regNo: 215, status: null },
    { id: 4, regNo: 290, status: null },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedAttendance = attendance.map((item) => {
      if (item.id === id) {
        item.status = newStatus;
      }
      else if (item.regNo === attendance.find((a) => a.id === id).regNo) {
        // Uncheck other checkboxes with the same registration number
        item.status = null;
      }
      return item;
    });
    setAttendance(updatedAttendance);
  };
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${now.getDate().toString().padStart(2, '0')}`;
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const today = getCurrentDate();
    document.getElementById('start').min = today;
    document.getElementById('start').max = today;
  }, []);
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5 style={{marginTop:'140px',overflowY:'hidden'}}>Select Today's Date</h5> &nbsp;&nbsp;
            <input type="date" id="start" required name="date" min="#" max="#" style={{marginTop:'130px',
              padding: '10px',   // Add padding to the input element
              border: '1px solid #ccc', // Add a border
              borderRadius: '5px',      // Apply rounded corners
              fontSize: '16px',       // Set font size
              backgroundColor: '#f5f5f5', // Background color
              color: '#333',     
            }}/>
          </div>
        </div>
      </div>
      

      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <Table responsive="sm" className='mb-5'>
        <thead>
          <tr>
            <th></th>
            <th>Registration No</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
        {attendance.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.regNo}</td>
            <td> 
              <input
                type="checkbox"
                name={`status-${item.id}`}
                // value="present"
                checked={item.status === 'present'}
                onChange={() => handleStatusChange(item.id, 'present')}
              />
            </td>
            <td>
              
              <input
                type="checkbox"
                name={`status-${item.id}`}
                // value="absent"
                checked={item.status === 'absent'}
                onChange={() => handleStatusChange(item.id, 'absent')}
              />

            </td>
          </tr>
          ))}
        </tbody>
      </Table>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Button variant="dark" type='submit'className='mb-5 custom-button' >Submit</Button>
          </div>
        </div>
      </div>
     
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default Attendance