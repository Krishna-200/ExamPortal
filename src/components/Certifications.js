import React from "react";
import CertificationCards from "./CertificationCard";

export default function certifications(){
    return(
        <div id="certifications">
          <h1>certifications</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, error cupiditate? Maxime molestiae labore eligendi tenetur voluptatem! Ad quam, rerum dolore numquam eaque enim, molestiae vitae fuga quibusdam placeat nisi.</h2>

          <div id="certificationCard">

            <CertificationCards  src="html5-logo-31813.png"   title="html" description="html is hyper text markup language html is hyper text markup language"/>
            <CertificationCards  src="css.png"   title="css" description="html is hyper text markup language" />
            <CertificationCards  src="js.png"   title="javascript" description="html is hyper text markup language" />
            <CertificationCards  src="logo192.png"   title="react js" description="html is hyper text markup language" />
            <CertificationCards  src="logo192.png"   title="react js" description="html is hyper text markup language" />

          </div>

        </div>
    )
}