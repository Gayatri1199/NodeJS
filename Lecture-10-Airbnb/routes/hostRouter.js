//Core Module
const path = require('path');

// External Module
const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views","add.html"));
})

hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views","homeAdded.html"));
})
module.exports = hostRouter;