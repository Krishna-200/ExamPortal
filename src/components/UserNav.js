import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";

export default function UserNav(){
    const [openProfile , setOpenProfile] = useState(false);
    
    return(
        <div>
        <div className="nav">
                    <ul>
                        <Link to="/user/certifications" style={{ textDecoration: 'none'}}><li><p>certifications</p></li></Link>
                        <Link to="/user/UpComingCertifications" style={{ textDecoration: 'none' }}><li><p>upcoming certifications</p></li></Link>
                        <Link to="/user/Assesment" style={{ textDecoration: 'none' }}><li><p>assesments</p></li></Link>
                        {/* <Link to="/user/resources" style={{ textDecoration: 'none' }}><li><p>resources</p></li></Link> */}
                    </ul>
                <div className="profile" onClick={()=>setOpenProfile((prev)=>!prev)}>
                    <img src="css.png" alt="" />
                </div>
        </div>
        {
            openProfile && <DropDown title1="Profile" title2="Contact us" title3="Sign out"/>
        }
            
        </div>
    )
}