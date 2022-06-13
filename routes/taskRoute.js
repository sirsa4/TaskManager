//taksRoute.js

const express = require("express");
const taskRoute = express.Router();

//import controller functions
const {getAllTasks, getTask, postTask, updateTask, deleteTask} = require("../controllers/taskControll");

//GET route
taskRoute.get("/",getAllTasks);

//POST route
taskRoute.post("/",postTask);

//GET single task
taskRoute.get("/:id", getTask);

//PATCH route single task
taskRoute.patch("/:id",updateTask);

//DELETE route single task
taskRoute.delete("/:id", deleteTask);


module.exports = taskRoute;