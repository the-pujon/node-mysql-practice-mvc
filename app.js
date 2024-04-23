const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
require("./src/config/db.config")
const userRoutes = require('./src/routes/users.routes')



app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)




//Home page
app.get("/", (req,res)=>{
    res.send("Welcome to the API");
})

  //route not found error
  app.use((req, res, next) => {
    res.status(404).json({
      message: "route not found",
    });
  });

  //handling server error
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something broke",
    });
  });


module.exports = app
