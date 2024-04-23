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
    //console.log("query", req.body)
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

const updatedUser = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    User.updateUser(id, updateData, (err, userUpdated)=> {
        if(err){
            res.status(500).json({ error: err.message})
            return
        }
            res.status(200).json({ status:'ok', message:"User has been updated.", data:userUpdated})

    });
}

const deleteUser = (req, res) => {
    const id = req.params.id
    User.deleteUser(id ,(err, deletedUser)=>{
        if(err){
           res.status(500).json({error: err.message})
           return;
        }

            res.status(200).json({status:'ok', message:"The user was deleted succesfully."})

    })
}

module.exports = {getAllUsers, createUser, updatedUser, deleteUser}