const mySQL = require('mysql');
require('dotenv').config();

const db = mySQL.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err) {
        console.log("Error connecting to database: ", err)
        return;
    }
    console.log('Connected to the MySQL database');
})

module.exports = db