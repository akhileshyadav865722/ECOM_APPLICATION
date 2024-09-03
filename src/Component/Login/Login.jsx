import React from 'react'
import "./Login.css/";
import { Link } from 'react-router-dom';

function Login() {
  return (
    
     <>
      

      <div className="container">
        <div className="card">
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
                    Don't have a account? <a href="#"><Link to="/Signup">sign up</Link> </a>
                  </p>
                 </div>
          
          </div>
        </div>
      </div>
      
       
     </>
  )
}

export default Login