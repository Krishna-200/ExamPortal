import React from "react";
import "../App.css";
import { BrowserRouter,Router,Route, Routes,Link } from 'react-router-dom';
function Assesmemt_box(props){
    return (
        <div class="assesmet-card">
        <div id="assesment-img">
            <img src={props.image}/>
        </div>
         <div id='assesment-txt'>
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
        </div>
        <div id='assesment-button'>
            <Link to="/Booking"><button>VIEW MORE</button></Link>
        </div>
    </div>
    )
}
export default Assesmemt_box;