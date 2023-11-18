import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Prefooter from './Prefooter';
import Footer from './Footer';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import "./Attendance.css";
import { loginStorage } from './LoginStorage';
import axios from 'axios';

const Attendance = () => {


  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const id=isLoggedIn ? loginStorage.details.id : '';
  const busNo=isLoggedIn?loginStorage.details.busInfo?loginStorage.details.busInfo.busNo:'':''
  const driverEmail=isLoggedIn?loginStorage.details.email:'';

  const navigate=useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${now.getDate().toString().padStart(2, '0')}`;
    return `${year}-${month}-${day}`;
  };

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const[attendanceMsg,setAttMsg]=useState('');
  const [selectedStatus, setSelectedStatus] = useState({});
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
  let uniqueAttendance;

  useEffect(() => {
    if (isLoggedIn!==true) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    //console.log(attendance);
    const uniqueKeysMap = new Map();

    attendance.forEach((obj) => {
      const key = `${obj.date}-${obj.busNo}-${obj.driverEmail}-${obj.userEmail}`;
      uniqueKeysMap.set(key, obj);
    });
    
    uniqueAttendance = Array.from(uniqueKeysMap.values());
    // console.log(uniqueAttendance);
  }, [attendance]);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!uniqueAttendance || uniqueAttendance.length === 0) {
      setAttMsg('Please select attendance for all users.');
      setTimeout(() => setAttMsg(''), 5000);
      return;
    }
    //console.log(uniqueAttendance);
    // Check if uniqueAttendance contains all users
    const usersWithEmail = users.map((user) => user.email);
    const attendanceEmails = uniqueAttendance.map((entry) => entry.userEmail);

    if (usersWithEmail.length !== attendanceEmails.length || !usersWithEmail.every((email) => attendanceEmails.includes(email))) {
      setAttMsg('Please select attendance for all users.');
      setTimeout(() => setAttMsg(''), 5000);
      return;
    }
    try {
      const response = await axios.post('/api/driver/addAttendance', uniqueAttendance);
      if (typeof response.data === 'string') {
        setAttMsg(response.data);
        setTimeout(() => setAttMsg(''), 5000);
      }
    } catch (error) {
      console.error('Error submitting attendance: ', error);
      setAttMsg('Something went wrong, please try again.');
      setTimeout(() => setAttMsg(''), 5000);
    }
  }
  

  const handleStatusChange = (userId,userEmail, newStatus,date,busNo,driverEmail) => {

    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [userId]: newStatus,
    }));

    const newAttendanceObject = {
      date: date,
      status: newStatus,
      busNo: busNo,
      driverEmail: driverEmail,
      userEmail: userEmail,
    };


    setAttendance((prevAttendance) => [...prevAttendance, newAttendanceObject]);
    //console.log(newAttendanceObject);
    //console.log(attendance);
    // console.log(userId);
    // console.log(newStatus);
    // console.log(date);
    // console.log(busNo);
    // console.log(driverEmail);
  };


  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/driver/getUsersByDriver/${id}`);
      if (typeof response.data === 'string') {
        setErrorMessage(response.data);
      } else {
        // setAttendance(response.data);
        setUsers(response.data);
      }
    } catch (error) {
      //console.error('Error fetching data: ', error);
      setErrorMessage('Something went wrong ,please contact to transportation cell.');
    }
  };


  useEffect(() => {
    fetchData();
  },[],[id]);
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5 style={{marginTop:'140px',overflowY:'hidden'}}>Select Date</h5> &nbsp;&nbsp;
            <input type="date" id="start" required name="date" min={getCurrentDate()} max={getCurrentDate()} value={getCurrentDate()} onChange={handleDateChange} style={{marginTop:'130px',
              padding: '10px',   
              border: '1px solid #ccc', 
              borderRadius: '5px',      
              fontSize: '16px',       
              backgroundColor: '#f5f5f5', 
              color: '#333',     
            }}/>
          </div>
        </div>
      </div>
      


      {errorMessage ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <p>{errorMessage}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <Table responsive="sm" className='mb-5'>
        <thead>
          <tr>
            
            <th>Email</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
        {users.map((item) => (
          <tr key={item.id}>
            
            <td>{item.email}</td>
            <td> 
              <input
                type="checkbox"
                name={`status-${item.id}`}
                checked={selectedStatus[item.id] === 'present'}
                onChange={() => handleStatusChange(item.id,item.email, 'present',getCurrentDate(),busNo,driverEmail)}
              />
            </td>
            <td>
              
              <input
                type="checkbox"
                name={`status-${item.id}`}
                checked={selectedStatus[item.id] === 'absent'}
                onChange={() => handleStatusChange(item.id, item.email,'absent',getCurrentDate(),busNo,driverEmail)}
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
          <Button variant="dark" type='submit'className='mb-5 custom-button' onClick={handleSubmit}>Submit</Button>&nbsp;&nbsp;
        </div>
        
        {attendanceMsg && (<p>{attendanceMsg}</p>)}
      </div>
    </div>
    </>
      )}
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default Attendance
