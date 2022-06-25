//500.js

const {ErrorClass} = require("../errors/ErrorClass");

const error = (err,req,res,next)=>{

    //404 error runs response
    if(err instanceof ErrorClass) return res.status(err.statusCode).json({msg: err.message});

    //500 general server error response
    res.status(500).json({msg: "500 error"})
}

module.exports = {
    error,
}