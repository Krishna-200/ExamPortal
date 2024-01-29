import React from 'react';
import '../App.css';
import UserNav from './UserNav';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function User() {
  return (
    <div>
        <UserNav/>
        
      <div class="left-frame">
          <div class='card1'>
            <button>DASHBOARD</button>  
          </div>  
        <div class='card1'>
            <button>CERTIFICATES</button>  
        </div>
        <div class='card1'>
            <button>ASSESMENTS</button> 
        </div>
        <div class='card1'>
            <button>MORE</button>  
        </div>
      <div id='bottom-card'>
      <div >
          <button id="button" >SIGN OUT</button>
        </div>
      </div>
    </div>
    <div id='user-page'>
    <div id="main-txt">
    <h2>WELCOME USER</h2>
    <h3>DASHBOARD</h3>
    </div>
    <div id="profile">
    </div>
    <div id="profile-content">
    </div>
    <div id="badges">
      <div class="badge"></div>
      <div class="badge"></div>
      <div class="badge"></div>
    </div>
    </div>
    </div>
    );
  }
  
  export default User;