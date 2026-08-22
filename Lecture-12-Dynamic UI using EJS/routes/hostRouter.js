//Core Module
const path = require('path');

// External Module
const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views","add.html"));
})

const registeredHome = [];

hostRouter.post("/add-home",(req,res,next)=>{
  console.log("Home registered successfully for :",req.body,req.body.houseName);
  registeredHome.push({houseName:req.body.houseName})
  res.sendFile(path.join(__dirname,"../","views","homeAdded.html"));
})

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome
