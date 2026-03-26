const Task = require("../models/taskModel");

// Get all tasks
exports.getTasks = (req, res) => {
  Task.getAll((err, data) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).send("Server Error");
    }

    res.json(data); // send tasks to frontend
  });
};

//  Add a new task
exports.addTask = (req, res) => {
  const title = req.body.title;

  Task.create(title, (err, data) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).send("Server Error");
    }

    res.json({ message: "Task added successfully" });
  });
};

//  Delete a task
exports.deleteTask = (req, res) => {
  const id = req.params.id;

  Task.delete(id, (err, data) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).send("Server Error");
    }

    res.json({ message: "Task deleted successfully" });
  });
};