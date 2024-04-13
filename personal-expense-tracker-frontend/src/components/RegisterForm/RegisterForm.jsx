import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../shared/Nav';
import backgroundImage from './image10.jpg';
import './Register.css';
import Swal from'sweetalert2';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.password === formData.confirmPassword) {
        const response = await axios.post('http://localhost:8080/account/save', formData);
        console.log(response);
        setTimeout(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Signup Successful',
            icon: 'success',
            confirmButtonText: 'Great!',
            timer: 3000,
            timerProgressBar: true,
            didClose: () => navigate("/")
          });
        }, 2000);
      } else {
        setLoading(false);
        Swal.fire({
          title: 'Error!',
          text: 'Passwords do not match',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: 'Signup failed. Please check your input and try again.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  return (
    <div>
      <Nav />
      <div className='bodyclass1' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input type="text" placeholder="First Name" required name="firstname" onChange={handleChange}/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Last Name" required name="lastname" onChange={handleChange}/>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required name="email" onChange={handleChange}/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Username" required name="username" onChange={handleChange}/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" required name="confirmPassword" onChange={handleChange}/>
            </div>
            <button type="submit">Sign Up</button>
            <div className="login-link">
              <p>Already Registered?<Link to="/login">Login</Link></p>
            </div>
          </form>
         
        </div>
      </div>
      {loading &&
            <div className="loading-screen">
              <div className="spinner"></div>
            </div>
          }
    </div>
  );
}

export default Signup;
