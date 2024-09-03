import React from "react";
import Nav from "./Component/Nav/Nav";
import Home from "./container/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";




function App(){
  return(
    <>
   <Nav/>
   <Routes>
    <Route
     path="/"
     element=<Home/>
    />
    <Route
     path="login"
     element=<Login/>
    />
    <Route
    path="/Signup"
    element=<Signup/>
    />
   </Routes>
  
  
  
    </>
  )
}

export default App