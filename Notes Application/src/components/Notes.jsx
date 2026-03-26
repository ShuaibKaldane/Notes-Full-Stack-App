import { useState } from "react";
function Notes(){
    let [input , setinput] = useState("");
    let [task , settask] = useState([]);
    function Add(){
        settask([...task , input]);
        setinput("");

    }
    function remove(index){
        const newtask = task.filter((element , current)=> current!==index);
        settask(newtask);

    }
    return (
        <div>
            <h1>Notes Application</h1>
            <input type="text" placeholder="Enter your task" value={input} onChange={(e)=>(setinput(e.target.value))}/> <br /><br />
            <button onClick={Add}>Add Task</button>
            <ul>
                {
                    task.map((element , index)=>(
                        <li key={index}>{element}
                        <button onClick={()=>remove(index)}>Delete</button>
                        </li>

                    ))
                }
            </ul>


        </div>
    )


}
export default Notes;
