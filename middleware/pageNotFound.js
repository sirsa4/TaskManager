//pageNotFound.js

//middleware which is run
const errorPage = (req,res)=>{
    res.status(404).send(`<p>404! page does not exist: ${req.url}</p>`)
}

module.exports = {
    errorPage,
}