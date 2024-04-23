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
    const {name, email} = req.query;
    const newUser = {name, email}
    User.createUser(newUser, (err, result)=>{
        if(err){
            res.status(500).json({error: err.message});
            return
        }
        res.status(200).json({status: 'ok', message: "User created successfully", data: result});

    })
}

module.exports = {getAllUsers, createUser}