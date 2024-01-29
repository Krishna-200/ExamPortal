import '../App.css';
import Assesmemt_box from './Assesment_box';
import data from './Assesment_desc.json';
import React, { useState } from 'react';
import UserNav from './UserNav';
import { BrowserRouter,Router,Route, Routes,Link } from 'react-router-dom';
function Assesment() {
  const [showData, setShowData] = useState(false);

  function toggleData() {
    setShowData(!showData);
  }
  return (
    <div>
      <UserNav/>
      <div id='ast-page'>
        <div id="main-txt">
          <h4>ASSESMENTS</h4>
          </div>
            <Assesmemt_box title={data[0].title} desc={data[0].desc} image={data[0].image}/>
            <Assesmemt_box title={data[1].title} desc={data[1].desc} image={data[1].image}/>
            <Assesmemt_box title={data[2].title} desc={data[2].desc} image={data[2].image}/>
            <Assesmemt_box title={data[3].title} desc={data[3].desc} image={data[3].image}/>
            {showData && (
            <div id='extra'>
              <Assesmemt_box title={data[4].title} desc={data[4].desc} image={data[4].image}/>
              <Assesmemt_box title={data[5].title} desc={data[5].desc} image={data[5].image}/>
            </div>
            )}
            <button id='readmore-btn' onClick={toggleData}><h4>{showData ? 'SHOW LESS' : 'SHOW MORE'}</h4></button>
        </div>
    </div>
    );
  }
  
  export default Assesment;