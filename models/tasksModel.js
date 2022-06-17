//taskControll.js

const mongoose = require("mongoose");


//get Schema from mongoose
const {Schema,model} = mongoose;

const taskBlueprint = new Schema({
name: {
    type: String,
    required: [true, 'Task name string must be included'],
    trim: true,
    maxlength: [30,'Task name cannot exceed more than 20 characters'],
},
completed: {
    type: Boolean,
    default: false,
},
}); 

//model, which wraps the schema
const TaskSchema = model("Task",taskBlueprint);

module.exports = {TaskSchema};