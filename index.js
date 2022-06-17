//index.js
const express = require("express");
const app = express();

//import "connection" async function from connection.js
const connectDB = require("./db/connection");

//.env variable import and invoke
const env = require("dotenv");

//invoke config to be able to use .env variable
env.config()

//import task route
const taskRoute = require("./routes/taskRoute");

//env import and invoke in 1-line.
/* require("dotenv").config(); */

//middlwares

//access body.data
app.use(express.json());

//use route
app.use("/api/v1/tasks", taskRoute);

const port = 3001;

//async function to run server only after MongoDB is connected
const startServer = async () => {

  try {
    //wait for mongoDB to connect
    const DB = await connectDB(process.env.MONGO_URI);

     //start server after connecting to mongoDB
    app.listen(port, "localhost", () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }

};
startServer();
