import React, { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getWallets } from '../../actions/projectActions';
import { useDispatch } from 'react-redux';
import Nav from '../shared/Nav';
import backgroundImage from './image10.jpg';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Replace with your backend's endpoint
      const response = await axios.post('http://localhost:8080/login', { username, password });
      
      // Assuming the response data includes the account object with an ID
      const accountId = response.data.id;
      //console.log(response.data);
      console.log(accountId);
      dispatch(getWallets(accountId));

      navigate(`/${accountId}`);
      
      
       // Redirect to the account page upon successful login, using the ID from the response
    } catch (error) {
      console.error('Login error:', error);
      // Optionally, handle login failure (e.g., showing an error message)
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div><Nav />
    <div className='loginbody' style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Username" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
  
          <div className="input-box">
            <input 
              type="password" // Change type to password for security
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="loginbtn" type="submit">Login</button>
          <div className="login-link">
            <p>Not Registered?<Link to="/register">register</Link></p>
          </div> 

        </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
