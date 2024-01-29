import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login(){

    const navigate = useNavigate();
    const[id,setId]=useState('');
    const postSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:3333/login',{send}).then(
            (res)=>{
                if(res.data.msg==="login accepted"){
                    alert(res.data.msg)
                    navigate("/user/certifications")
                }
                else if(res.data.msg==="password didnt match"){
                    alert(res.data.msg)
                }
                else{
                    alert(res.data.msg)
                }
            }
            )

    }

    const [send,setData] = useState({
        username:'',
        password:''
    })

    const handleChange = (e)=>{
        setData((PrevState)=>({
            ...PrevState,
            [e.target.name]:e.target.value
        })
        )
    }
  
    return (
            <div id="main-box">
                <div>
                    <h2>LOGIN</h2>
                    <h3>WElcome back</h3>
                </div>
                <div className="form" >
                    <form method="POST" onSubmit={postSubmit}>
                        <input type="text" placeholder="username" onChange={handleChange} name="username" />
                        <input type="text" placeholder="password" onChange={handleChange} name="password" />
                        <input type="button" className="login-button" value={'login'} onClick={postSubmit}/>
                    </form>
                    <h4>forgot password?</h4>
                </div>

                {/* <div className="buttons">
                    <button class="login-button" onClick={postSubmit}>login</button>
                    <Link to="/signIn" style={{ textDecoration: 'none' }}><h1>or Sign in</h1></Link>
                </div> */}
            </div>
    )
}
export default Login;