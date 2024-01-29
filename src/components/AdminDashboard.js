import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard(){
    return(
        <div id="dashboard">
                <div id="dashboardCard">
                    <Link to='/admin/profile'><button>profile</button></Link>
                    <Link to='/admin/dashboard'><button>dashboard</button></Link>
                    <Link to='/admin/studentDetails'><button>student details</button></Link>
                    <button>add exam</button>
                </div>
                <div id="dashboardContact">
                    <button>contact us</button>
                </div>
            </div>
    )
}