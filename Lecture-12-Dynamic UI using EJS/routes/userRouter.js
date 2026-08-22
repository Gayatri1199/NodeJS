//Core Module
const path = require('path');

// External Module
const express = require('express');


const userRouter = express.Router();
const {registeredHome} = require('./hostRouter') 
userRouter.get("/",(req,res,next)=>{
  console.log("registeredHomes==>",registeredHome)
  res.sendFile(path.join(__dirname,"../","views","home.html"));
})

module.exports = userRouter;