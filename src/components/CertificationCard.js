import React from "react";
export default function CertificationCards(props){
    return(
       <div>
            <div className="card">
                <div className="logo">
                    <img src={props.src} alt="" />
                    <p>{props.title}</p>
                </div>

                <div className="desc">
                    <p>{props.description}</p>
                </div>

                <div className="getstarted">
                    <p>getstarted</p>
                </div>
            </div>
       </div>
    )
}