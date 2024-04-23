const User = require('../models/users.model')

const getAllUsers = (req, res) =>{
    User.getAllUsers((err, users)=>{
        if(err){
            res.status(500).json({error: err.message});
            return
        }
        res.json(users)
    })
}

const createUser = (req, res) => {
    console.log("query", req.body)
    const {name, email} = req.body;
    const newUser = {name, email}
    console.log("new user", newUser)
    User.createUser(newUser, (err, result)=>{
        if(err){
            res.status(500).json({error: err.message});
            return
        }
        res.status(200).json({status: 'ok', message: "User created successfully", data: result});

    })
}

module.exports = {getAllUsers, createUser}