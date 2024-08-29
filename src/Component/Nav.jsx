import React from 'react'
import "./Nav.css";
function Nav() {
  return (
    <>
    <div className='main'>
      <h1 className='logo'><span style={{color:'black',fontSize:'9vh'}}> E</span>comApplication</h1>
    <nav>
  <ul>
    <li>Cart </li>
    <li>Wishlist </li>
    <li>Login</li>
  </ul>
</nav>
    </div>
    </>
  )
}

export default Nav