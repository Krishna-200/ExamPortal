// import React from "react";
import UserNav from "./UserNav";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AvailableCard from "./AvailableCard";
import React, { useState } from 'react';
import {setShowData,showData} from "react";
export default function UserPage(){
    // const [showData, setShowData] = useState(false);

    
  function toggleData() {
    setShowData(!showData);
  }
    return(
        <div>
            <UserNav />
            <div className="certifications">
                <div id="userCertificationsCard">
                    <div className="heading">
                        <h2>CERTIFICATIONS  </h2>
                        <h3>Invest in your future with our certifications. Our certifications are designed to provide you with the skills and knowledge you need to succeed in your industry, and can help you unlock new job opportunities, increase your earning potential, and achieve your professional goals.</h3>
                        <h3>Our certifications are more than just a piece of paper – they're a testament to your hard work and dedication. Our certifications are designed to be challenging, so when you earn one, you know you've truly earned it. Explore our certification options today and take the first step towards achieving your career goals.</h3>
                    </div>
                    <div id="cards">
                        <AvailableCard title="html" img="/html5-logo-31813.png" />
                        <AvailableCard />
                        <AvailableCard />
                        {/* <div id="more"> */}
                        {showData && (
                            <div id="ex-hide">
                        <AvailableCard />
                        <AvailableCard />
                        </div>
                        )}
                        <div>
                        <button onClick={toggleData}>{showData ? 'LESS' : 'MORE'}</button>
                        </div>
                    </div>
                </div>

                <div id="userCertificationsCard">
                    <div className="heading">
                        <h2>POPULAR CERTIFICATIONS</h2>
                        <h3>Get ahead of the curve with our popular certificates section. These certifications are not only popular in your industry but also cover the latest and most important topics. Earn one of these certifications and you'll be on the cutting edge of your field.</h3>
                        <h3>Our popular certificates section is where you'll find the certifications that can open doors for you. These certifications are in high demand among employers and can help you stand out from the competition. Explore our selection today and see what's possible for your career.</h3>
                    </div>
                    <div id="cards">
                        <AvailableCard title="html" img="/html5-logo-31813.png" />
                        <AvailableCard />
                        <AvailableCard />
                        <button>more</button>
                    </div>
                </div>

                <div id="userCertificationsCard">
                    <div className="heading">
                        <h2>BROWSE CERTIFICATIONS BY CATEGORY</h2>
                        <h3>Discover the certifications that are making waves in your industry with our popular certificates section. We've curated a list of certifications that are gaining traction among employers and can help you take your career to new heights.</h3>
                        <h4>FULL STACK DEVELOPMENT</h4>
                        <h3>Ready to become a Full Stack Developer? Our Full Stack Development certification program can help you gain the skills and knowledge you need to become a well-rounded and versatile developer. With our program, you'll learn everything from front-end development to server-side programming, and be able to build complex, full-scale applications.</h3>
                    </div> 
                    <div id="cards">
                        <AvailableCard title="html" img="/html5-logo-31813.png" />
                        <AvailableCard />
                        <AvailableCard />
                        <button>more</button>
                    </div>
                    <div className="heading">
                        {/* <h2>BROWSE CERTIFICATIONS BY CATEGORY</h2> */}
                        <h4>CLOUD ENGNIEERING</h4>
                        <h3>The cloud is the future of technology, and our cloud engineering certifications can help you stay ahead of the curve. These certifications cover everything from cloud infrastructure to DevOps and are designed to help you become a top-performing cloud engineer</h3>
                        <h3>Elevate your cloud engineering career with our certifications. Our cloud engineering certification section is where you'll find the certifications you need to stay competitive in a rapidly evolving field. With our flexible study options, you can earn your certification on your own schedule and at your own pace.</h3>
                    </div>
                    <div id="cards">
                        <AvailableCard title="html" img="/html5-logo-31813.png" />
                        <AvailableCard />
                        <AvailableCard />
                        <button>more</button>
                    </div>
                    <div className="heading">
                        {/* <h2>BROWSE CERTIFICATIONS BY CATEGORY</h2> */}
                        <h4>ARTIFICAL INTELLIGENCE AND MACHINE LEARNING</h4>
                        <h3>AI and ML are transforming industries across the board. Stay competitive and relevant with our AI/ML certification section, where you can find certifications tailored to your level of expertise and career goals.</h3>
                    </div>
                    <div id="cards">
                        <AvailableCard title="html" img="/html5-logo-31813.png" />
                        <AvailableCard />
                        <AvailableCard />
                        <button>more</button>
                    </div>
                </div>
            </div>
        </div>


    )
}