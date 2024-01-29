import UserNav from "./UserNav";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import React, { useState } from 'react';

export default function DropDown(props){
    return(
        <div class=" dropdown">
            <ol>
                <Link to="/user" style={{ textDecoration: 'none'}}><li>{props.title1}</li></Link>
                <li>{props.title2}</li>
                <li>{props.title3}</li>
            </ol>
        </div>
    )
}