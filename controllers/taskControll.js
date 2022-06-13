//taskController.js

//GET method controller for All tasks
const getAllTasks = (req,res)=>{
    res.status(200).send(`<h1>Hello There! 😒</h1>`);
}

//GET single
const getTask = (req,res)=>{
    res.status(200).json({id: req.params, complete: true});
}

//POST method controller
const postTask = (req,res)=>{
    const {name} = req.body;

    res.status(200).send(`Welcome ${name} , you ae now posted on server 😊`);
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