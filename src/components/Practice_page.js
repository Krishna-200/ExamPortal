import React from "react";
import '../App.css';

function Practice_page(){
    return(
        <div>
            <div id="pp-main">
                <div>
                <h2>HTML BEGGINERS PRACTICE ASSESMENTS</h2>
                <div id="pp-about">
                <img src="No-more-guessing.svg"/>
                <h3>About this Assesmemt</h3>
                <p>This test can help you identify individuals that have prior experience with developing Full Stack solutions including Frontend, Backend, Testing, and Deployment all by themselves.</p>
                <p>Full Stack Development is a field of software development that involves the development of web and mobile applications that involve both the front-end (client-side) and back-end (server-side) of the application. Full Stack Developers are responsible for designing and developing the user interface, implementing business logic, and integrating with back-end systems and services.</p>
                <p>Full Stack Development involves the use of a variety of technologies and frameworks, including HTML, CSS, JavaScript, React, Angular, Java, Python, Node.js, Spring, and Express, among others. Full Stack Developers need to be proficient in a range of skills, including programming, database design, security, and testing. Full Stack Developers may work in a variety of industries, including tech, e-commerce, finance, and healthcare, among others.</p>
                
                </div>
                <div id="pp-skills">
                <h3>SKILLS MEASEURD</h3>
                <ul>
                    <li>HTML BASIC SKILLS</li>
                    <li>HTML FORMS</li>
                    <li>HTML TAGS</li>
                    <li>HTML COMMENTS</li>
                </ul>
                </div>
                <div id="pp-about">
                <h3>The test is created by a subject-matter expert</h3>
                <p>Testlify's skill tests are designed by experienced SMEs (subject matter experts). We evaluate these experts based on specific metrics such as expertise, capability, and their market reputation. Prior to being published, each skill test is peer-reviewed by other experts and then calibrated based on insights derived from a significant number of test-takers who are well-versed in that skill area. Our inherent feedback systems and built-in algorithms enable our SMEs to refine our tests continually.</p>
                <button>Start Assesmemt</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Practice_page;