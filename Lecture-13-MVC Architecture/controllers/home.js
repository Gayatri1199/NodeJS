const path = require('path');
const Home = require('../models/home');
const registeredHome = [];
const getAddHome=(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views","add.html"));
};

exports.getAddHome = getAddHome;


exports.postAddHome =(req,res,next)=>{
  
  console.log("Home registered successfully for :",req.body,req.body.houseName);

  const home = new Home(req.body.houseName);
  home.save();
  
  registeredHome.push({houseName:req.body.houseName})
  res.sendFile(path.join(__dirname,"../","views","homeAdded.html"));
}

exports.getHomes=(req,res,next)=>{
  console.log("registeredHomes==>",registeredHome)
  res.render("home",{registeredHome});
}



