import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getWallets } from '../../actions/projectActions';
import Nav from '../shared/Nav';
import backgroundImage from './image10.jpg';
import './Login.css';
import Swal from'sweetalert2';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/login', { username, password });
      const accountId = response.data.id;
      dispatch(getWallets(accountId));

      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Great!',
          timer: 3000,
          timerProgressBar: true,
          didClose: () => navigate(`/${accountId}`)
        });
        
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed. Please check your input and try again.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  return (
    <div>
      <Nav />
      <div className='loginbody' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="loginbtn" type="submit">Login</button>
            <div className="login-link">
              <p>Not Registered?<Link to="/register">register</Link></p>
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

export default Login;
