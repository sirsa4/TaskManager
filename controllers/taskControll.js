//taskController.js

//import modell
const {TaskSchema} = require("../models/tasksModel");

//GET method controller for All tasks
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await TaskSchema.find({}).exec();
        res.status(200).json({succes: true, tasks});
        console.log(req.body);
    } catch (error) {
        res.status(404).json({success: false, msg: error});
    }
}

//GET single
const getTask = async (req,res)=>{
    try {
        //get id params for url
        const {id} = req.params;
        
        //GET single task with mongoose function findOne(). _id: id. id in the database has key "_id"
        const task = await TaskSchema.findOne({_id: id});

        //404 error if task with id is not found
        if(!task)res.status(404).json({success: false, msg: `Task with id: ${id} does not exist`});

        //success response if task with id is found
        res.status(200).json({success: true, task});
    } catch (error) {
        res.status(500).json({success: false, msg: error})
    }
}

//POST method controller
const postTask = async (req,res)=>{
    try {
        /* .create() method is normal javascript. Object.create() */
        console.log(req.body);
        const task = await TaskSchema.create(req.body);
    
        res.status(200).json(task);
        
    } catch (error) {
        //status 500 = general server error
        res.status(500).json({msg: error})
    }
}

//update/patch a single task
const updateTask = (req,res)=>{
    res.status(200).json({update: true, id: req.params});
}

//DELETE method controller
const deleteTask = (req,res)=>{
    res.status(200).json({delete: true, id: req.params});
}

module.exports = {getAllTasks, getTask, postTask, updateTask, deleteTask};