import React, { useState } from "react";
import "./Login.css/";
import { Link } from 'react-router-dom';

function Login() {
    const[a,setA]=
     useState('')
    function signLink(){
      setA('active')
      
    };
    function loginLink(){
      setA('')
    };
  return (
    
     <>
      

      <div className={`container ${a}`}>
        <div className="wraper">
          
        <div className="card">
         <button className='cross'><Link to="/"><i className="fa-solid fa-xmark"> </i></Link> </button>
          <div className="card-body">
            <div className="card-title">
             <h2>Login Page</h2>
            </div>
            <form className='form'>
              <div className="input-groups">
                <input type="email" name="email" id="email" className='input'required />
                <label className='label1'>email</label>
              </div>
              <div className="input-groups">
                <input type="password" name="password" id="password" className='input'required/>
                <label className='label1'>password</label>
              </div>
                 <div className="login-options">
                  <div>
                    <input type="checkbox" name='rememberme'id='rememberme' className='rememberme' />
                    <label htmlFor='rememberme-label'>Remember me?</label>
                  </div>
                  <div> 
                    <a href="#" className='forgot_password'>forgot password?</a>
                  </div>
                 </div>
                 <button type='submit'>sign in</button>
                 </form>
                 <div>
                  <p>
                    Don't have a account? <a href="#" onClick={signLink}>sign up</a>
                  </p>
                 </div>
              </div>
            </div>

            <div className="registration-form">
        <div className="cross-main">
      <button className='cross1'><Link to="/"><i className="fa-solid fa-xmark"> </i></Link> </button>
        <h2>Registration</h2></div>
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
        <p>already have an account? <a href="#" onClick={loginLink}>Login</a></p>
      </div>
      </div>    
      </div>
      
       
     </>
  )
}

export default Login