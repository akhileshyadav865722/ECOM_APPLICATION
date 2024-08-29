import React from "react";
import Nav from "./Component/Nav";
import Home from "./container/home";
import Login from "./login/Login";


function App(){
  return(
    <>
   <Nav/>
   <Home/>
   <Login/>
    </>
  )
}

export default App