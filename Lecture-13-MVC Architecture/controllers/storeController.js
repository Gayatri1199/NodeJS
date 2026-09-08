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
