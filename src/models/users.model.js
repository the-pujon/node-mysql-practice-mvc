const db = require("../config/db.config")

const User = {
    getAllUsers: (callback)=>{
        const sql = 'SELECT * FROM users'
        db.query(sql, callback)
    },
    createUser: (newUser, callback)=>{
        const sql = 'INSERT INTO users SET ?'
        db.query(sql, newUser ,callback)
    }
}

module.exports = User