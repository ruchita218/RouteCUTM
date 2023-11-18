import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Prefooter from './Prefooter';
import Footer from './Footer';
import { loginStorage } from './LoginStorage';

const AddDriverForm = () => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const navigate = useNavigate();
  const [addStatus, setAddStatus] = useState('');

  useEffect(() => {
    if (isLoggedIn!==true) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contactNo:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/admin/addDriver', formData);
            if (typeof response.data === 'string') {
              setAddStatus(response.data);
              setFormData({
                name: '',
                email: '',
                password: '',
                contactNo:''
              });
              if (addStatus==='Driver added successfully.') {
                setTimeout(() => {
                  navigate('/transportationinfo');
                }, 3000);
              }
            }
        } catch (error) {  
          console.log(error);
          setAddStatus('Something went wrong');
        }
    };

  return (
    <>
      <Header/>
      <div className="container" style={{marginTop:'140px',marginBottom:'20px',backgroundColor:'#F7F7F7'}}>
        <div className="row">
          <div className="offset-md-3 col-md-6">
          <h2 style={{textAlign:'center',overflowY:'hidden',color:'brown'}}>Add Driver</h2>
          <Form onSubmit={handleSubmit} method='POST'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={formData.email}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formData.password}
          onChange={handleChange}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className='mt-2'>Contact No</Form.Label>
          <Form.Control type="number" placeholder="Contact No" name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form.Group>
      
        <p>{addStatus}</p>
    
    </Form>
          </div>
        </div>
      </div>
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default AddDriverForm