import React, { useState } from 'react';
import './Register.css';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../shared/Nav';



function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation checks here (e.g., password match)

    try {

      if (formData.password === formData.confirmPassword) {
      const response = await axios.post('http://localhost:8080/account/save', formData);
      console.log(response.data);
      navigate("/");
      }else{
        alert("Passwords do not match");
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    
    <div>
      <Nav />
    <div className='bodyclass1'>
      
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          
          <div className="input-box">
            <input type="text" placeholder="First Name" required onChange={handleChange} name="firstname"/>
          </div>
          
          <div className="input-box">
            <input type="text" placeholder="Last Name" required onChange={handleChange} name="lastname"/>
          </div>
    
          <div className="input-box">
            <input type="email" placeholder="Email" required onChange={handleChange} name="email"/>
          </div>
          
          
          <div className="input-box">
            <input type="text" placeholder="Username" required onChange={handleChange} name="username"/>
          </div>
    
          <div className="input-box">
          <input type="password" placeholder="Password" required onChange={handleChange} name="password"/>
          </div>
          
          <div className="input-box">
          <input type="password" placeholder="Confirm Password" required onChange={handleChange} name="confirmPassword"/>
          </div>
          
          <button type="submit">Sign Up</button>

          <div className="login-link">
            <p>Already Registered?<Link to="/login">Login</Link></p>
          </div>

        </form>
    </div>
    </div>
    </div>
  )
}

export default Signup