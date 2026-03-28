import './App.css'
import Notes from './components/Notes'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  let [input , setinput] = useState("");
  let [task , settask] = useState([]);
  const API = "http://localhost:8080"
  // Get All task
  const getTask = async ()=>{
    try{
      const res = await axios.get(`${API}/tasks`);
      settask(res.data);

    }catch(err){
      console.log(err);

    }
  }
  // Add Task
  const add = async ()=>{
    try{
      await axios.post(`${API}/add`, {
        title : input
      })
      setinput("");
      getTask();
    }catch(err){
      console.log(err);

    }
  }
    // Delete
    const remove = async (id)=>{
      try{
        await axios.delete(`${API}/tasks/${id}`);
        getTask();
      }catch(err){
        console.log(err);
      }

    }
    useEffect(()=>{
      getTask();
    }, [])
  return(
   <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Notes Application</h1>
    <input type="text" placeholder='Enter the task' value={input} onChange={(e)=>setinput(e.target.value)} />
    <button onClick={add}>Add Task</button>
    <ul>
      {
        task.map((element)=>(
          <li key={element.id}>{element.title}
          <button onClick={()=>remove(element.id)}>❌</button>
          </li>

        ))
      }
    </ul>

   </div>
   
  )
}

export default App
