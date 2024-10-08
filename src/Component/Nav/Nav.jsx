import React from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
   <header>
    <div className="cantaint">
      <div className="hamburger">
      <button className='hamburger'><i class="fa-sharp fa-solid fa-bars"></i>
      </button>
      </div>
      <div className="logo">
     
      </div>
      <div className="search-box">
        <div className="glass"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></div>
        <input type="text" placeholder="Search the product"/>
      </div>
      <div className="nav-links">
       <Link to="/Cart"> <button><i className="fa-solid fa-cart-shopping"></i></button></Link>
        <button><i className="fa-regular fa-heart"></i></button>
        <Link to="login"><button> <i className="fa-solid fa-user-tie"></i></button></Link>
      </div>
    </div>
   </header>
    </>
  )
}

export default Nav