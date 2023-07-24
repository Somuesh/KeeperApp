import React, { useState } from "react";
import Note from "./Note";


function CreateArea() {

    const [createnote, setNote] = useState({
        title:"",
        content:""
    });

    const [noteList, setNoteList] = useState([]);

/*---------------------Handle Change in Input function----------------*/

    function handleChange(e){
        var newValue = e.target.value;
        var cellChange = e.target.name;
        setNote((prev)=>{
            return {...prev,
                [cellChange]: newValue}
        })

        console.log(createnote);
    }

/*---------------------Handle Add Item Click function----------------*/

    function handleClick(event){
        if(createnote.title && !createnote.content){
            alert("Content is mandatory")
        }
        else if(!createnote.title && createnote.content){
            alert("Title is mandotory");
        }
        if( createnote.title && createnote.content ){ setNoteList((prev)=>{
            return [...prev, createnote]
        })
    }
        
        setNote(()=>{
            return {title: "",
            content: ""}
        })
        event.preventDefault();
    }

/*---------------------Delete Item function----------------*/

    function deleteItem(id){
       // console.log(id+" deleting");
        setNoteList(prevList => {
         return prevList.filter((tingdipungdi,index)=>{
            return index !==id;
          })
        })
      }
    

  return (
    <div>
    <div>
    <form onSubmit={handleClick}>
      {/* {console.log(noteList)} */}
        <input name="title" onChange={handleChange} placeholder="Title" value={createnote.title} /><hr />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={createnote.content} />
        <button onChecked={deleteItem}>Add</button>
        </form>
    </div>
    {noteList.map((item,index)=>{
        return (<Note 
        key={index}
        id={index}
        onChecked={deleteItem}
        notetitle={item.title}
        notecontent={item.content}
        number={index+1}
      />
    );
    })}
    </div>
  );
}

export default CreateArea;