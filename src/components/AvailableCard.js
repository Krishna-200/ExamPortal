import React from "react";

export default function AvailableCard(props){
    return(
          <div className="card">
            <div className="imgTitle">
              <img src={props.img} alt="" />
              <p>{props.title}</p>
            </div>
            <div className="desc">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam perferendis ipsa molestias, eaque a. Dolor, facere voluptatum delectus harum sequi deleniti officiis vitae. Laudantium id fuga hic laborum? Est.</p>
            </div>
          </div>
    )
}