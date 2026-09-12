const path = require("path");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/home-list", { registeredHome }),
  );
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/booking", { registeredHome }),
  );
};

exports.getFavList = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/fav", { registeredHome }),
  );
};


exports.getHomeDetails = (req, res, next) => {
  const homeID = req.params.homeId;
  Home.findById(homeID,home=>{
    if(!home){
      console.log("Home not found");
      res.redirect("/homes")
    }
    console.log("Home Details Found==>",home);
    res.render("store/home-details")
  })
  console.log("HomeID==>",homeID)
   
};
