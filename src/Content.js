import React from "react";
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";
import LandingPage from './components/LandingPage';
import AvailableCourses from './components/AvailableCourses';
import Certifications from './components/Certifications';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default function Content(){
    return(
        <div>
            <Navbar/>

            <LandingPage/>

            <Certifications/>

            <AvailableCourses/>

            <AboutUs/>
            
            <ContactUs/>
        </div>
    )
}