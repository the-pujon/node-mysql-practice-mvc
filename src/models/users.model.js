const db = require("../config/db.config")

const User = {
    getAllUsers: (callback)=>{
        const sql = 'SELECT * FROM users'
        db.query(sql, callback)
    },
    createUser: (newUser, callback)=>{
        const sql = 'INSERT INTO users SET ?'
        db.query(sql, newUser ,callback)
    },
    updateUser: (userId, updatedUser, callback)=>{
        const sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql,[updatedUser, userId], callback)
    },
    deleteUser: (userId, callback)=>{
        const sql = 'DELETE FROM users WHERE id=?'
        db.query(sql, userId, callback)
    }
}

module.exports = User