//index.js

const express = require("express");
const app = express();

//import task route
const taskRoute = require("./routes/taskRoute");

//middlwares

//access body.data 
app.use(express.json());

//use route
app.use("/api/v1/tasks",taskRoute);

const port = 3001;
app.listen(port, "localhost",()=>{
    console.log(`Server is running on port ${port}`);
})
