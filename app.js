const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
require("./src/config/db.config")



app.use(express.json())
app.use(cors)



app.get("/", (req,res)=>{
    res.send("Welcome to the API");
})


module.exports = app
