import React from "react";
import Number from "./Number";


function Note(props){
    return (<div className="noteBox">
    <Number num={props.number} />
    <h1 className="noteHead">{props.notetitle}</h1>
    
    <p>{props.notecontent}</p>
    <button onClick={()=>{
        props.onChecked(props.id);
    }}>Delete</button>
    </div>);
}

export default Note;