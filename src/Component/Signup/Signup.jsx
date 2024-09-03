import React from 'react'
import "./Signup.css/"
import  { Link } from 'react-router-dom'

function Signup() {
  return (
    
    
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registration</h2>
        <form>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" id='Username' placeholder="username" required />
            </div>
            
            <div className="input-group">
              <label>Email:</label>
              <input type="email" id='email' placeholder="email" required />
              </div>
              <div className="input-group">
                <label>Password:</label>
                <input type="password" id='password' placeholder='password' required />
              </div>
              <div className="terms">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor='terms'>I agree to the terms and conditions</label>
              </div>
              <button type="submit" className='signup-btn'>Sign-up</button>
          
        </form>
        <p>already have an account? <Link to="/login"> <a href="#">Login</a></Link></p>
      </div>
    
    </div>
    
  )
}

export default Signup