import React from "react";

function Input(props){
    return (
       <input className="input" placeholder={props.placeholder} type={props.type} />
    );
}

export default Input;