//connection.js

//require mongoose
const mongoose = require("mongoose");

//async function to connect to DB
const connection = async (url) => {
  try {
    const connect = await mongoose.connect(url);
    console.log("...connected to MongoDB");
  } catch (error) {
    console.log(err);
  }
};

module.exports = connection;
