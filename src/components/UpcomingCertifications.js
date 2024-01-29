
import React from "react";
import UserNav from "./UserNav";
import AvailableCard from "./AvailableCard";

export default function UpComingCertifications(){
    return(
        
        <div>
            <UserNav />
            <div className="UpcmgCertifications">
            <h2>UPCOMING CERTIFICATIONS</h2>
            <h3>Stay ahead of the curve with our upcoming certifications. Our experts are constantly updating our list of available certifications to keep you up-to-date with the latest industry trends.</h3>
            <h3>Looking to enhance your skills and knowledge in your industry? Check out our upcoming certifications. We offer a variety of certifications that are designed to help you take your career to the next level.</h3>
            <div id="cards" class="upcmg-cards" >
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            </div>
            <div id="cards" class="upcmg-cards" >
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            </div>
            <h2>RECOMENDED CERTIFICATIONS</h2>
            <h3>Investing in your education is one of the best investments you can make for your career. Our recommended certifications are the perfect way to do just that. Our certifications are designed to help you gain the skills and knowledge you need to succeed, and demonstrate your expertise to employers."</h3>
            <h3>With so many certifications to choose from, it can be hard to know where to start. That's where our recommended certifications come in. We've done the research and identified the certifications that are most valuable in your industry. Get started today and take the first step towards achieving your career goals."</h3>
            <div id="cards" class="upcmg-cards" >
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            </div>
            <div id="cards" class="upcmg-cards" >
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            <AvailableCard title="html" img="/html5-logo-31813.png" />
            </div>
            </div>


        </div>
    )
}