import React,{useState} from "react"
import Axios from "axios"
import "./App.css"


function App(){
  const[sname,setStudentName]=useState("")
  const[tech,setTechnology]=useState("")
  const[section,setSection]=useState("")
  const submitReview=()=>{
    Axios.post('http://localhost:9000/student',{
      name:sname,
      tech:tech,
      section:section
    }).then(()=>{
      alert("success");
    })
  }
  return(
    <div className="App"><h1> Crud Operations </h1>
    <div className="info">
      <label><b>Student name</b></label>
    <input type="text" name="sname" onChange={(e)=>
    setStudentName(e.target.value)}    required/>
    <label><b>Technology</b></label>
    <input type="text" name="tech" onChange={(e)=>
    setTechnology(e.target.value)} required/>
    <label><b>Section</b></label>
    <input type="text" name="section" onChange={(e)=>
    setSection(e.target.value)} required/>

    <button onClick={submitReview}><b/>Submit</button>
    </div> 
    </div>
  );
}
export default App;