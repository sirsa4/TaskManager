//index.js
const express = require("express");
const app = express();

//import "connection" async function from connection.js
const connectDB = require("./db/connection");

//.env variable import and invoke
const env = require("dotenv");

//invoke config to be able to use .env variable
env.config()

//404, error page
const {errorPage} = require("./middleware/pageNotFound");

//500 server error middleware
const {error} = require("./middleware/500");

//import task route
const taskRoute = require("./routes/taskRoute");

//env import and invoke in 1-line.
/* require("dotenv").config(); */

//middlwares

//access body.data
app.use(express.static("./public"));
app.use(express.json());

//use route
app.use("/api/v1/tasks", taskRoute);

//404 page not found error page. Must be the last route in this server file
app.use(errorPage);

//server error
app.use(error);


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
