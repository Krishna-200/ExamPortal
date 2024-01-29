import React from "react";
function Studentdetails() {
    let users = [
        {
            sid: "1235353",
            name: "abc",
            email: "abc@gmail.com",
            course: "fsd",
            mobile: "1234567891"

        },
        {
            sid: "1235345",
            name: "abc",
            email: "abc@gmail.com",
            course: "fsd",
            mobile: "1234567891"
        },
        {
            sid: "1235345",
            name: "abc",
            email: "abc@gmail.com",
            course: "fsd",
            mobile: "1234567891"
        }
    ];

    return (
        <div>

            <div className="ad_back_gd">
                <div className="ad_dash_bd">
                    <div className="cmp1">
                        <b id="cmp1-1">Dash board</b>
                    </div>
                    <br></br>
                    <div className="cmp2">
                        <b id="cmp2-2">Dash board</b>
                    </div>
                    <br></br>
                    <div className="cmp3">
                        <b id="cmp3-3">Dash board</b>
                    </div>
                    <br></br>
                    <div className="cmp4">
                        <b id="cmp4-4">Dash board</b>
                    </div>
                    <br></br>
                    <div className="cmp5">
                        <b id="cmp5-5">contact</b>
                    </div>
                    <div className="cmp6">
                        <b id="cmp6-6">sign out</b>
                    </div>
                </div>
                <div className="Examresult">
                    <div className="examheading">
                        <h1>STUDENT DETAILS</h1>
                    </div>
                    <div className="exambody">
                        <div className="tablecontent" style={{marginTop:"20px"}}>
                            <center>
                            <table style={{border:"2px solid black", width:"100%",marginLeft:"35px",paddingTop:"20px"}}>
                               
                                <thead >
                                    <tr>
                                        <th >S ID</th>
                                        <th >FULL NAME</th>
                                        <th >Email</th>
                                        <th>COURSES NAME</th>
                                        <th>Mobile No</th>
                                        
                                    </tr>

                                    <div className="headingborder">
                                    </div>
                                
                                </thead>
                                
                                
                                <div className="headline">
                                    
                                </div>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td  style={{textAlign:"center"}}>{user.sid}</td>
                                            <td  style={{textAlign:"center"}}>{user.name}</td>
                                            <td  style={{textAlign:"center"}}>{user.email}</td>
                                            <td  style={{textAlign:"center"}}>{user.course}</td>
                                            <td  style={{textAlign:"center"}}>{user.mobile}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </center>



                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Studentdetails 