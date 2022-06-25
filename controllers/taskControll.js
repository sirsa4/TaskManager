//taskController.js

//import modell
const {TaskSchema} = require("../models/tasksModel");

//async wrapper
const asyncWrapper = require("../middleware/wrapper");

//custom error instance
const {customError} = require("../errors/ErrorClass");

//GET method controller for All tasks
const getAllTasks = asyncWrapper(async (req,res)=>{
        const tasks = await TaskSchema.find({}).exec();

        res.status(200).json({succes: true, tasks});

});

//GET single
const getTask = asyncWrapper(async (req,res,next)=>{
        //get id params for url
        const {id} = req.params;
        
        //GET single task with mongoose function findOne(). _id: id. id in the database has key "_id"
        const task = await TaskSchema.findOne({_id: id});

        //404 error if task with id is not found
        if(!task)next(customError(`Task with id: ${id} does not exist`,404));
       /*  res.status(404).json({success: false, msg: `Task with id: ${id} does not exist`}); */

        //success response if task with id is found
        res.status(200).json({success: true, task});
   
       /*  res.status(500).json({success: false, msg: error}) */

})

//POST method controller
const postTask = asyncWrapper(async (req,res)=>{
        /* .create() method is normal javascript. Object.create() */
        console.log(req.body);
        const task = await TaskSchema.create(req.body);
    
        res.status(200).json(task);
    
});

//update/patch a single task
const updateTask = asyncWrapper(async (req,res, next)=>{
    
        const {id} = req.params;

        //first argument: condition, here the task is found with _id
        //second argument: update data, here it is req.body
        //third argument: option, to show new data in response to user and also run the validatior in case of error.
        const task = await TaskSchema.findOneAndUpdate({_id:id}, req.body,{
            new: true,
            runValidators: true,
        })

        //404 response
        if(!task)next(customError(`Task with id: ${id} does not exist`,404));

        //200 response
        res.status(200).json({success: true, method: req.method, task});
        
        //server error
        /* res.status(500).json({success: false, msg: error}); */
    
})

//DELETE method controller
const deleteTask = asyncWrapper( async (req,res, next)=>{
        //get url params
        const {id} = req.params;
        
        //find and delete a task with findOneAndDelete() mongoose method
        const task = await TaskSchema.findOneAndDelete({_id:id});

        //404 response if process going well, but task is not found
        if(!task)next(customError(`Task with id: ${id} does not exist`,404));

        //success response if task is deleted, here showing the deleted task in json format
        res.status(200).json({success: true, method: req.method, task});

        //500 response, general server error if response fails
       /*  res.status(500).json({success: false, msg: error}); */
})

module.exports = {getAllTasks, getTask, postTask, updateTask, deleteTask};