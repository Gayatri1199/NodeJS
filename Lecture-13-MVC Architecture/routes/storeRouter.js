//Core Module
const path = require('path');

// External Module
const express = require('express');
const homesController= require('../controllers/storeController')


const storeRouter = express.Router();

storeRouter.get("/",homesController.getHomes);
storeRouter.get("/bookings",homesController.getBookings);
storeRouter.get("/favlist",homesController.getFavList);

module.exports = storeRouter;