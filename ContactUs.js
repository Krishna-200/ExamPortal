import React from "react";

export default function ContactUs(){
    return(
        <div id="contactTitle">

        <div id="texts">
            <h1>contact us</h1>
            <p>for any queries please feel free to contact our team <br/>we are always there for you to help</p>
        </div>

        <div id="contact">
            
            <div id="contactImg">
                <img src="contact.jpg" alt="" />
            </div>

            <div id="form">
                <input type="text" placeholder="your name"/>
                <input type="text" placeholder="your email"/>
                <textarea  />
            </div>
        </div>

        </div>
    )
}