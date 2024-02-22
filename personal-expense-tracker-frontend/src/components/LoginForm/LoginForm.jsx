import React from 'react';
import './Login.css'


const LoginForm = () => {
  return (
    <div >
        <form action="">
            <h1 >Login</h1>
            <br>
</br>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                
            </div>
            <br></br>
            <div className="input-box" >
                <input type="password" placeholder='Password' required />
                
            </div>
<br/>
            <div className="remember-forgot"> 
              <label><input type ="checkbox"/> Remember me &nbsp; </label>
              <a href="#default">Fogot password?</a>
            </div>
            
            

            <button className='btn1' type="submit">Login</button>

            
           
            <div className="remember-forgot"> 
            <p>Don't have an account?&nbsp; <a href="C:\Users\USER\Desktop\Project\PET\personal-expense-tracker-frontend\src\Components\RegisterForm\RegisterForm.jsx">Register</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;



