const mySQL = require('mysql');

const db = mySQL.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Pujonja143@?',
    database: 'node_mysql'
})

db.connect((err)=>{
    if(err) {
        console.log("Error connecting to database: ", err)
        return;
    }
    console.log('Connected to the MySQL database');
})

module.exports = db