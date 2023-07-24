import React from "react";


function welcome(check, name) {
    return (check ? "Welcome, " +name : "Login");
}

function Heading(props) {
    return <div> <header> 
    <h4 className = "welcome" >{welcome(props.islogged, props.name)} </h4>
    <h1> Keeper App </h1></header> </div>;
}

export default Heading;