import React,{useState} from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const AttendanceDetails = ({selectedComponent}) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedBusNo, setSelectedBusNo] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [attendance, setAttendance] = useState([]);
    const [result, setResult] = useState(null);

    const handleCheckAttendance = async(e) => {
    e.preventDefault();
    
    if (selectedDate && selectedBusNo) {
      try {
        // Make a POST request using Axios to fetch attendance data
        const response = await axios.post('/api/admin/attendanceDetails', {
          date: selectedDate,
          busNo: selectedBusNo,
        });

        // Assuming the response data is an array of attendance data
        //setAttendance(response.data);
        console.log('Response:', response);
        if (Array.isArray(response.data)) {
          // If the response is an array, it's attendance data
          setAttendance(response.data);
          setResult(null); 
          setShowTable(true);
        } else {
          setAttendance([]); 
          setResult(response.data);
          console.log(result);
          setShowTable(true);
        }

        //setShowTable(true);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setResult('Error fetching attendance data.');
      }
    } else {
      alert('Please select both date and bus number.');
    }
  
  };

  const handleCloseTable = () => {
    setShowTable(false);
    setSelectedDate('');
    setSelectedBusNo('');
    setResult(null); // Clear the result
    setAttendance([]);
  };

  return (
    <>
       <Header/>
       {showTable ? (
          <>
            {result!==null  && result !== ""?(
            // Display the result if it exists
            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <p>{result}</p>
                  
                </div>
              </div>
            </div>
          ) : (
               <div className="container mt-5">
        <div className="row">
          <div className="col">
          <Table responsive="sm" className='mb-5'>
        <thead>
          <tr>
            <th>User Email</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
        {attendance.map((item) => (
          <tr key={item.id}>
            <td>{item.userEmail}</td>
            <td> 
                <input type='checkbox'
                  checked={item.status === 'present'}
                  readOnly
                />
            </td>
            <td>
              
              <input
                type="checkbox"
                  checked={item.status === 'absent'}
                  readOnly
              />

            </td>
          </tr>
          ))}
        </tbody>
      </Table>
          </div>
        </div>
      </div>
          )}
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Button variant="dark" type='submit'className='mb-5 custom-button' onClick={handleCloseTable}>Close</Button> &nbsp; &nbsp;
            {/* <Button variant="dark" type='submit'className='mb-5 custom-button' >Edit</Button> */}
          </div>
        </div>
      </div>
          </>
       ):(
       <form onSubmit={handleCheckAttendance} method='POST'>
        <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5 style={{marginTop:'8px',overflowY:'hidden'}}>Select Date</h5> &nbsp;&nbsp;
            <input type="date" id="start" required name="date" min="#" max="#" value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)} style={{
              padding: '10px',   // Add padding to the input element
              border: '1px solid #ccc', // Add a border
              borderRadius: '5px',      // Apply rounded corners
              fontSize: '16px',       // Set font size
              backgroundColor: '#f5f5f5', // Background color
              color: '#333',     
            }}/>
            
          </div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center mb-2 mt-3">
                <h5 style={{overflowY:'hidden'}}>Select Bus No</h5> &nbsp;&nbsp;
                <input type='text' required name='busNo' value={selectedBusNo}
                  onChange={(e) => setSelectedBusNo(e.target.value)} style={{textAlign:'center'}}></input>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
              <Button variant="dark" type='submit'className='mb-5 custom-button' >Check Attendance</Button> &nbsp;&nbsp;
            </div>
        </div>
        </div>
        </form>
       )}
    </>
  )
}

export default AttendanceDetails