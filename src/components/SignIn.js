import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Login from './Login';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();

    const [send,setData] = useState({
        username:"",
        password:""
    })
    
    
    const postSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:3333/register',{send}).then(
            (res)=>{
                if(res.data.msg ==="username already exists"){
                    alert(res.data.msg)
 
                }else{
                    alert('user created')
                    console.log(res.data.msg)
                    navigate("/login")
                }
            }
        )
    }

    const handleChange = (e)=>{
        setData((PrevState)=>({
            ...PrevState,
            [e.target.name]:e.target.value
        })

        )
    }

    return (
        
        <div id="main-box2">
            <div>
                <h2>SIgn up</h2>
                <h3>Register Here</h3>
            </div>

            <div className="form2">
                <form method="POST" action="/">
                    {/* <input type="text" placeholder="first name" onChange={handleChange}/>
                    <input type="text" placeholder="lastname"/> */}
                    {/* <input type="text" placeholder="email"/> */}
                    <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                    {/* <input type="text" placeholder="confirm password"/> */}
                    <input type="submit" className="login-button" value="submit" onClick={postSubmit}/>
                </form>
                <h4>forgot password?</h4>
            </div>

            <div className="buttons">
                <button className="login-button">Register</button>
            </div>
            <h3>Already have an account?<Link to="/Login">Login</Link></h3>
            
        </div>
    )
}
