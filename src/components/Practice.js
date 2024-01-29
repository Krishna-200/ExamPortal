import React from "react";
import '../App.css';
import Practice_card from "./components/Practise_card";
function Practice(){
    return(
        <div>
            <div id="ast-heading">
                <h1>PRACTICE ASSESMENTS</h1>
            </div>
            <div class="ast-module">
                <h2>FULL STACK DEVELOPMENT</h2>
                <Practice_card image='ccna_600.png'/>
            </div>
        </div>
    )
}
export default Practice