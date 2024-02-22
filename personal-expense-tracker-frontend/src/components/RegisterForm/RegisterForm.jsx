import React from 'react'
import './Register.css';


function Signup() {
  return (
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          
          <div className="input-box">
            <input type="text" placeholder="First Name" required />
          </div>
          
          <div className="input-box">
            <input type="text" placeholder="Last Name" required/>
          </div>
    
          <div className="input-box">
            <input type="text" placeholder="Email" required/>
          </div>
          

          <div className="input-box">
            <input type="text" placeholder="Phone number" required/>
          </div>
         
          <div className="input-box">
            <input type="date" id="Birth Day" name="birthday" required/>
          </div>
          
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
    
          <div className="input-box">
          <input type="text" placeholder="Password" required />
          </div>
          
          <div className="input-box">
          <input type="text" placeholder="Confirm Password" required/>
          </div>
          
          <button type="submit">Sign Up</button>

          <div className="login-link">
            <p>Already Registered?<a href="C:\Users\USER\Desktop\Project\PET\personal-expense-tracker-frontend\src\Components">Login</a></p>
          </div>

        </form>
    </div>
  )
}

export default Signup