const db = require("../config/db");
const Task = {};
// Get All Task
Task.getAll = async ()=>{
    try{
        const [rows] = await db.query("SELECT * FROM task");
        return rows;
    }catch(err){
        console.log(err)

    }
}

// Create a Task
Task.create = async(title)=>{
    try{
        const result = await db.query("INSERT INTO task (title) VALUES (?)" , [title]);
        return result

    }catch(err){
        console.log(errr);
    }
}

// Delete Task 
Task.delete = async (id)=>{
    try{
        const [result] = await db.query("DELETE FROM task WHERE id = ? ", [id]);
        return result ;
    }catch(err){
        console.log(err)
    }
}
module.exports = Task;