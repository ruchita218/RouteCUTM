import React,{useState,useEffect} from 'react';
import Prefooter from './Prefooter';
import Footer from './Footer';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Attendance.css";
import { loginStorage } from './LoginStorage';
import axios from 'axios';

const Attendance = () => {


  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '';
  const code = isLoggedIn ? loginStorage.details.code : '';
  const id=isLoggedIn ? loginStorage.details.id : '';
  const busNo=isLoggedIn?loginStorage.details.busInfo?loginStorage.details.busInfo.busNo:'':''
  const driverEmail=isLoggedIn?loginStorage.details.email:'';

  

  // console.log(loginStorage);
  // console.log(id);
  // console.log(busNo);
  // console.log(driverEmail);

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const[attendanceMsg,setAttMsg]=useState('');
  const [selectedStatus, setSelectedStatus] = useState({});
  const [attendance, setAttendance] = useState([]);
  
  let uniqueAttendance;

  useEffect(() => {
    //console.log(attendance);
    // Create a set to store unique keys
    const uniqueKeysMap = new Map();

    attendance.forEach((obj) => {
      const key = `${obj.date}-${obj.busNo}-${obj.driverEmail}-${obj.userEmail}`;
      uniqueKeysMap.set(key, obj);
    });
    
    // Convert the map values back to an array
     uniqueAttendance = Array.from(uniqueKeysMap.values());

    // console.log(uniqueAttendance);
        //now here i want to check if the attendance contains the duplicate object i.e one with present and one with absent then it removes the earlier one from the attendance and keeps the newer one using some kind of filter method of array or any other
  }, [attendance]);


  const handleSubmit=async(e)=>{
    e.preventDefault();

    // Check if uniqueAttendance is empty
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

  

  const getCurrentDate = () => {
    const now = new Date();
    //return now.toISOString().split('T')[0];
    const year = now.getFullYear();
    const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${now.getDate().toString().padStart(2, '0')}`;
    return `${year}-${month}-${day}`;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/driver/getUsersByDriver/${id}`);
      if (typeof response.data === 'string') {
        setErrorMessage(response.data);
      } else {
        // setAttendance(response.data);
        setUsers(response.data);
        //console.log(users[0]);
        // const today = getCurrentDate();
        // document.getElementById('start').value = today;
        // document.getElementById('start').min = today;
        // document.getElementById('start').max = today;
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      setErrorMessage('Something went wrong ,please contact to transportation cell.');
    }
  };


  useEffect(() => {
    //const today = getCurrentDate();
    //document.getElementById('start').value = today;
    //document.getElementById('start').min = today;
    //document.getElementById('start').max = today;
    fetchData();
  },[],[id]);
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5 style={{marginTop:'140px',overflowY:'hidden'}}>Select Date</h5> &nbsp;&nbsp;
            <input type="date" id="start" required name="date" min={getCurrentDate()} max={getCurrentDate()} value={getCurrentDate()} style={{marginTop:'130px',
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
                //name="status"
                // value="present"
                //checked={item.status === 'present'}
                checked={selectedStatus[item.id] === 'present'}
                onChange={() => handleStatusChange(item.id,item.email, 'present',getCurrentDate(),busNo,driverEmail)}
              />
            </td>
            <td>
              
              <input
                type="checkbox"
                name={`status-${item.id}`}
                //name="status"
                // value="absent"
                //checked={item.status === 'absent'}
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
          <Button variant="dark" type='submit'className='mb-5 custom-button' >Edit</Button>
        </div>
        {attendanceMsg && (<p>{attendanceMsg}</p>)}
      </div>
    </div>
    </>
      )}
      {/* <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Button variant="dark" type='submit'className='mb-5 custom-button' onClick={handleSubmit}>Submit</Button>&nbsp;&nbsp;
            <Button variant="dark" type='submit'className='mb-5 custom-button' >Edit</Button>
          </div>
        </div>
      </div> */}
     
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default Attendance



  // const getCurrentDate = () => {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  //   const day = `${now.getDate().toString().padStart(2, '0')}`;
  //   return `${year}-${month}-${day}`;
  // };

  // useEffect(() => {
  //   const today = getCurrentDate();
  //   document.getElementById('start').min = today;
  //   document.getElementById('start').max = today;
  // }, []);