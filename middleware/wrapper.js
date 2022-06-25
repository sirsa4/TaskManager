//wrapper.js

const wrapper = (callback) =>{

    //wrapper returns another function which is async with try/catch block and which runs another middleware as next too(error)
    return async (req,res,next)=>{
        try {
            await callback(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = wrapper;