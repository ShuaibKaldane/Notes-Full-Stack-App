const Task = require("../models/taskModel");

// Get all tasks
exports.getTasks = async(req, res) => {
 try{
   const data = await Task.getAll();
   res.json(data); 
 }catch (err) {
    console.log("Error:", err);
    res.status(500).send("Server Error");
  }
    
}

//  Add a new task
exports.addTask = async(req, res) => {
  try{
     const title = req.body.title;
     await Task.create(title);
      res.json({ message: "Task added successfully" });

  }catch (err) {
    console.log("Error:", err);
    res.status(500).send("Server Error");
  }
};

//  Delete a task
exports.deleteTask = async (req, res) => {
  try{
      const id = req.params.id;
       await Task.delete(id); 
       res.json({ message: "Task deleted successfully" });
  }catch (err) {
    console.log("Error:", err);
    res.status(500).send("Server Error");
  }
};