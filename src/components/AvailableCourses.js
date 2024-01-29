import React from "react";
import AvailableCard from "./AvailableCard";
export default function availableCourses(){


  
    return(

      <div id="available">
        <h1>Available courses</h1>
        <h4>we’ve put together seven valuable web design certifications to keep your freelance business competitive. These certifications cover a range of web design and digital marketing skills, from web analytics to inbound marketing and paid social advertising, so you can find at least one certification that’s relevant to your niche and valuable for showing off your expertise.</h4>
        <div id="cards">
          <AvailableCard img="html5-logo-31813.png" title="Html"/>

          <AvailableCard img="html5-logo-31813.png" title="Html"/>
          <AvailableCard img="html5-logo-31813.png" title="Html"/>
          {/* <AvailableCard img="html5-logo-31813.png" title="Html"/> */}
          {/* <AvailableCard img="html5-logo-31813.png" title="Html"/> */}
        </div>
        <h5><br />
        Certificates serve a multitude of purposes for different students: they are sometimes used to bridge the gap between different phases of academic study, or to provide additional professional training and qualifications.
        </h5>
      </div>
    )
}