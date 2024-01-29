import React from "react";
import AdminDashboard from "./AdminDashboard";
export default function AdminPortal(){
    return(
        <div id="admin">
            <AdminDashboard/>

            <div id="adminContent">
                <div id="adminData">
                    <div id="welcome">
                        <h3>welcome admin</h3>
                        <img src="" alt="" />
                    </div>

                    <div id="data">
                        <div id="profilePic"></div>
                        <div id="profileDetails">
                            <ul>
                                <li>admin details</li><br/>
                                <li>name:</li>
                                <li>email:</li>
                                <li>phone no:</li>
                                <li>admin id:</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div id="adminCards">
                    <div className="adminCard"></div>
                    <div className="adminCard"></div>
                    <div className="adminCard"></div>
                </div> */}
        </div>
        </div>
    )
}