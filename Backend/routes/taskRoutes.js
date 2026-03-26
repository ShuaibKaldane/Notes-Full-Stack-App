const express = require("express");

// Create router object
const router = express.Router();

// Import controller functions
const taskController = require("../controllers/taskController");


// ================= ROUTES =================

//  Get all tasks
router.get("/tasks", (req, res) => {
  taskController.getTasks(req, res);
});

// 👉 Add new task
router.post("/add", (req, res) => {
  taskController.addTask(req, res);
});

// 👉 Delete task by ID
router.delete("/tasks/:id", (req, res) => {
  taskController.deleteTask(req, res);
});


// 👉 Export router
module.exports = router;