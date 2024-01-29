import React from "react";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";
import { useState,useEffect } from "react";
export default function GetAllstudents(){

    let[students,setStudents] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:3333/getAlldata').then((res)=>{
        setStudents(res.data.allusers);
    })
    },[])

    // console.log(students.username)

    return(
        <div id="admin">
            <AdminDashboard />

            <div id="adminContent">  
                <p>hello</p>
                {students.map((user) => (
                    <div className="user">{user.username}</div>
                ))}
            </div>
        </div>
    )
}

