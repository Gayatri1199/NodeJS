const path = require("path");
const Home = require("../models/home");
const rootDir = require("../utils/pathUtil");



const getAddHome = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add.html"));
  res.sendFile(path.join(rootDir, "views", "host", "add.html"));
};

exports.getAddHome = getAddHome;

exports.postAddHome = (req, res, next) => {
  const home = new Home(req.body.houseName);
  home.save();

  // registeredHome.push({houseName:req.body.houseName})
  // res.sendFile(path.join(__dirname, "../", "views", "home-Added.html"));
};


exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("host/host-home-list", { registeredHome }),
  );
};


