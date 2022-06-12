//taksRoute.js

const express = require("express");
const taskRoute = express.Router();

//import controller functions
const {getTasks} = require("../controllers/taskControll");

taskRoute.get("/",getTasks);

module.exports = taskRoute;