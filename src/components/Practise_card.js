import React from "react";
import '../App.css';

function Practice_card(props){
    return(
        <div class="pcard">
        <div id="pimg">
            <img src={props.image}/>
        </div>
         <div id='assesment-txt'>
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
        </div>
        <div id='assesment-button'>
            <button>VIEW MORE</button>
        </div>
    </div>
    )
}
export default Practice_card;