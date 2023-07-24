import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
// import Note from "./Note";
// import notesdata from "../notesdata";
import Login from "./Login";
import CreateArea from "./CreateArea";

/*---------------------Logged-In Check function----------------*/

var islogged = true;
function isLoggedIn(){
  return (islogged) ? (<div><div><CreateArea /></div><div>{/*notesdata.map(Card)*/}  </div></div>) :  <div><Login /></div>
  }


// function Card(notedata){
//   return <Note 
//     key={notedata.id}
//     notetitle={notedata.title}
//     notecontent={notedata.para}
//     number={notedata.id}
//   />
// }

function App(){

  return (<div>
    <Heading islogged={islogged} name="Somesh"/>
    {isLoggedIn()}
    
    {/* <Note notetitle={notesdata[0].title} notecontent={notesdata[0].para} number={notesdata[0].id}/>
    <Note notetitle={notesdata[1].title} notecontent={notesdata[1].para} number={notesdata[1].id}/>
    <Note notetitle={notesdata[2].title} notecontent={notesdata[2].para} number={notesdata[2].id}/>
    <Note notetitle={notesdata[3].title} notecontent={notesdata[3].para} number={notesdata[3].id}/> */}
    
    <Footer />
    </div>);
}

export default App;