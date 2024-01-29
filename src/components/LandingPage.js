import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
  const navigate = useNavigate();
  
  const navigateSignin = () =>{
    navigate('/signIn')
  }
    return(
        <div id="landingPage">
          <div className="heading">
            <div id="text">
              <h1 id='get'>get</h1>
              <h1 id='certify'>Certified  </h1>
              <h1 id='andGetNoticed'>and get noticed</h1>
              <button id="get-started" onClick={navigateSignin}>get started</button>
              <p>OUR CERTIFICATION EXAMS ARE RIGOROUS AND DESIGNED TO TEST YOUR KNOWLEDGE AND SKILLS IN SPECIFIC AREAS OF CONTENT MARKETING, COPYWRITING, SOCIAL MEDIA MARKETING, AND MORE. ONCE YOU PASS THE EXAM, YOU WILL RECEIVE A GLOBALLY RECOGNIZED CERTIFICATION THAT WILL DEMONSTRATE YOUR EXPERTISE AND COMMITMENT TO DELIVERING HIGH-QUALITY CONTENT.</p>
            </div>
            <img src="vecteezy_man-in-front-of-computer-monitor-flat-vector-illustraiton_7686736.jpg" alt=""/>
          </div>
          <div className="footer">
            <div className="footer-box">
              
            </div>
          </div>
        </div>
    )
}