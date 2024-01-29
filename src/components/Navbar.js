// import React from "react";
import { ReactDOM } from 'react';
import { BrowserRouter,Router,Route, Routes,useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
  const [openProfile , setOpenProfile] = useState(false);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
    return(
        <div id="navbar">
 
          <ul>
            <li><a href="#landingPage">Home</a></li>
            <li><a href="#certifications">certifications</a></li>
            <li><a href="#AboutUs">about</a></li>
            <li><a href="#contactTitle">contact</a></li>
            <li><button onClick={()=>setOpenProfile((prev)=>!prev)}>login</button></li>
          </ul>
          {
            openProfile &&
            <div class=" dropdown">
            <ol class="">
                <Link to="/login"><li>Student Login</li></Link>
                <li>Admin Login</li>
            </ol>
        </div>
          }

      </div>
    );
}