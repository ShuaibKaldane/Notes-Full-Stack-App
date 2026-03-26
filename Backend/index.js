const express = require ("express");
const app = express();
const db = require("./config/db")
app.listen(8080 , ()=>{
    console.log("Server is started")
})