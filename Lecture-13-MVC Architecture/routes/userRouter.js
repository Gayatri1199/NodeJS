//Core Module
const path = require('path');

// External Module
const express = require('express');
const homesController= require('../controllers/home')


const userRouter = express.Router();

userRouter.get("/",homesController.getHomes);

module.exports = userRouter;