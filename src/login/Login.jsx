import React from 'react'
import "./Login.css/";
function Login() {
  return (
    
     <>
       <div className='login-page'>
            <div className='login-main'>
                <h1 className='login-heading'>Login</h1>
                <div className='login-sec'>
                    <label className='login-label'>Username</label>
                    <input type="text" required className='login-input'/>
                </div>
                <div className='login-sec'>
                    <label className='login-label'>Password</label>
                    <input type="password" required  className='login-input'/>
                </div>
                <div className="pass">Forgot password?</div>
                <div className='login-buttons'>
                    <a href=""> <div className="buttoni">Login</div></a>
                </div>
                <div className="sign">Not a member <a href="#">Sign up?</a></div>
                
            </div>
       </div>
     </>
  )
}

export default Login