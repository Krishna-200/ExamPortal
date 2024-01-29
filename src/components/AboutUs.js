import React from "react";

export default function AboutUs(){
    return(
        <div id="AboutUs">

            <img src="590.jpg" alt="" id="illus"/>

            <div id="AboutUsDesc">
                <h1>About us</h1>
                <p>
                    we provide valid certifications  and valuable for various courses. 
                    earning a certificate include gaining a competitive advantage over peers in your field, obtaining new skills to leverage in your current role, increasing your earning potential and demonstrating to your bosses a passion for and commitment to your craft. 
                    we have collaborated with various mnc’s which provide certifications for aspiring learner who are willing to continue thier career in various fields.
                </p>

                <p>companies collaborating with us</p>
                
                <div id="companies">
                    <img src="microsoft.png" alt="" id="cmp"/>
                    <img src="google.png" alt="" id="cmp"/>
                    <img src="pngegg.png" alt="" id="cmp"/>
                    <img src="ibm.png" alt="" id="cmp"/>
                </div>
            </div>
        </div>
    )
}