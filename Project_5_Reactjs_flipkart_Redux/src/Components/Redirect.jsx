import { auth,db } from "./Firebase";
import React from "react";
import Navbar from "../Components/Navbar"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Products from "../Components/Products"
import Product from "../Components/Product"
import Home from "../Components/Home"
import Cart from "../Components/Cart"
const Direct =({presentUser})=> {
  return (
    <>
    <Router>
      <Navbar presentUser = {presentUser}/>
         <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/products" element={<Products/>}></Route>
               <Route path="/products/:id" element={<Product/>}></Route>
               <Route path="/cart" element={<Cart/>}></Route>
         </Routes>
         
      </Router>
    
    </>
  )
}
export default Direct
