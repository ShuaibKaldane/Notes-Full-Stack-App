const mysql = require("mysql2/promise");
const database = mysql.createPool({
    host: "localhost",
    user : "root",
    password: "SafShu@12345",
    database : "todo"
})

module.exports = database;