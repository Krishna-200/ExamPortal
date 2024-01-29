import React from "react";
import './App.css';
import Booking from './Booking.json';
import data1 from './Booking.json';

function Booking_exam(props){
    return (
        <div id="main-module">
            <div id="heading">
            <div id="exam-img">
                <img src={props.image}/>
            </div>
            <div id="exam-title">
                <h2>{props.title1}</h2>
                <h2>{props.title2}</h2>
            </div>
            </div>
            <div class="exam-desc">
                <h2>{props.desc1}</h2>
                <h2>{props.desc2}</h2>
                <h2>{props.desc3}</h2>
                <h2>{props.desc4}</h2>
                <h2>{props.desc5}</h2>
            </div>
        </div>
    )
}
export  default Booking_exam;