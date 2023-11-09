import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const AddUserForm = () => {

    const [busLocations, setBusLocations] = useState([]);
    useEffect(() => {
        async function fetchBusLocations() {
          try {
            const response = await axios.get('/api/admin/findBuses');
            setBusLocations(response.data);
          } catch (error) {
            console.error('Error fetching bus locations:', error);
          }
        }
        fetchBusLocations();
      }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
        registrationNo: '',
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
          const response = await axios.post('/api/admin/addUser', formData);
          if (response.status === 200) {
            // User added successfully, clear the form and notify the parent component
            setFormData({
              name: '',
              email: '',
              password: '',
              location: '',
              registrationNo: '',
            });
            
          }
        } catch (error) {
          
          console.log(error);
        }
    };

  return (
    <>
      <Form onSubmit={handleSubmit} method='POST'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email Name</Form.Label>
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

        <Form.Select aria-label="Default select example" name="location" value={formData.location}
          onChange={handleChange}>
            <option>Select Location</option>
            {busLocations.map((location) => (
              <option key={location.id} value={location.location}>
                {location.location}
              </option>
            ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Enter Registration No</Form.Label>
          <Form.Control type="number" placeholder="RegistrationNo" name="registrationNo"
          value={formData.name}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </Form.Group>
      
    
    </Form>
    </>
  )
}

export default AddUserForm