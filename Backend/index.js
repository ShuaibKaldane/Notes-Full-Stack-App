const express = require ("express");
const app = express();
const db = require("./config/db")
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json()); // to read JSON data from frontend

app.use(taskRoutes);

app.listen(8080 , ()=>{
    console.log("Server is started")
})