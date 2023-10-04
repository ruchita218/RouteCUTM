import React from 'react';
import Header from './Header';
import "./Profile.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Profile = () => {
    const handleLogout=()=>{

    }
  return (
    <>
    <Header/>
    <div className="container profile">
        <div className="row">
            <div className="col profileCol">
                <div>Name: users.name</div>
                <div>Email: users.email</div>
                <div>Bus No: 12345</div>
                <div>Your Location: users.location</div>
                <Link to="#"><button>Edit Profile</button></Link>
                <Link to="/payments"><button>Pay your transport fee</button></Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile