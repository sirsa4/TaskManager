//ErrorClass.js

class ErrorClass extends Error {
    constructor(message,statusCode){
        //super is to access message from instance which child of class
        super(message);
        
        this.statusCode = statusCode;
    }
}

const customError = (msg, statusCode)=>{
    return new ErrorClass(msg,statusCode);
}

module.exports = {
    ErrorClass,
    customError
}