//import all required packages 
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    duedate:{
        type:String,
        required:true
    }
}) ;
const Task = mongoose.model("Task", taskSchema);
module.exports= Task;