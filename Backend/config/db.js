const mysql = require("mysql2");
const database = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "SafShu@12345",
    database : "todo"
})

database.connect((err)=>{
    if(err){
        console.log("Database connection failed")
    }else{
        console.log("Database Connected");
    }

})
module.exports = database;