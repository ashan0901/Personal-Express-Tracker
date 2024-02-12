import React from 'react';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div classname ='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser classname ='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required />
                <FaLock  classname ='icon'/>
            </div>

            <div className="remember-forgot"> 
              <label><input type ="checkbox"/> Remember me</label>
              <a href="#default">Fogot password?</a>
            </div>

            <button type="submit">Login</button>

            <div clasname="register-link">
                <p>Don't have an account?<a href="#default">Register</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;