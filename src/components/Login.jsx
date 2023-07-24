import React from "react";
import Input from "./Input";

function Login(){
    return (
        <div className="login">
        <h4 className="login-head">Login to add notes</h4>
        <form className="login-form">
            {/* <input type="text" placeholder="Username" value={props.username}></input>
            <input type="password" placeholder="Password" value={props.pass}></input> */}
            
            <Input type="text" placeholder="Enter Username"/>
            <Input type="password" placeholder="Enter Password" />
            <Input type="submit" />
            
        </form>
        </div>
    );
}

export default Login;