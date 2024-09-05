import React from "react";
import Nav from "./Component/Nav/Nav";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cart from "./Component/Cart/Cart";
import Products from "./pages/product/Products";





function App(){
  
  return(
    <>
   <Nav/>
   <Products/>
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
    path="/Cart"
    element=<Cart/>
    />
   </Routes>
  
  
  
    </>
  )
}

export default App