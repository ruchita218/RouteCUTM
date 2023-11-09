import React,{useState,useEffect} from 'react';
import "./Login.css";
import logo from '../images/CenturionLogo.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import Footer from './Footer';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [codeType, setCodeType] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const[loginDetails,setLoginDetails]=useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log('loginStatus has been updated:', loginStatus);
    //console.log('loginDetails has been updated:', loginDetails);
  }, [loginStatus, loginDetails]);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
        let apiEndpoint = '';
        if (codeType === 'admin') {
          apiEndpoint = 'http://localhost:8080/api/admin/login';
        } else if (codeType === 'user') {
          apiEndpoint = 'http://localhost:8080/api/users/login';
        } else if (codeType === 'driver') {
          apiEndpoint = 'http://localhost:8080/api/driver/login';
        }
        const response = await axios.post(apiEndpoint, {
        email,
        password,
      });
      // setLoginStatus(response.data);

      console.log('Response from server:', response.data);
      //if (typeof response.data === 'string') {
        if (response.status == 404) {
        setLoginStatus(response.data);
      } else {
        setLoginStatus('Logged in successfully');
        setLoginDetails(response.data);        
        setTimeout(() => {
          navigate('/', { state: { isLoggedIn: true, code: codeType } });
        }, 5000);
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus(error.response.data);  
    }
  };


  return (
    <>
    
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-8 col-sm-5 background">
            <em >Powering a safe and secure transport services in our college&universities.</em>
            <em>We help students and faculties with a very comfortable transport facility.</em>
        </div>
        <div className="col d-flex form">
            <Link to="/" className='link'><img src={logo} alt="logo" className='img' /></Link>
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                   We'll never share your credentials with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>

              <Form.Select aria-label="Default select example" className="mb-3" name='code' value={codeType}
                onChange={(e) => setCodeType(e.target.value)} required>
                <option>Log in as</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
                <option value="driver">driver</option>
              </Form.Select>

              <Button variant="primary" type="submit" className="mb-3">
                Login
              </Button>
             
              <p>{loginStatus}</p>
              {/* {loginStatus && <p>{loginStatus}</p>} */}

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to="/register" className='Link'>New User? Click to Register here</Link>
              </Form.Group>
           </Form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login