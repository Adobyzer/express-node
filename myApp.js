//import the express dependencies
let express = require('express');

//create a express object with field and methods
let app = express();
const port = 3000;

app.listen(port, () => {
console.log("important method server listen on port : ", port);
})
//#1 log "Hello World"

console.log("Hello World");

//#2 app.method(path,handler ) ex app.get(/,req,res,next) or app.port(/,req,res,next)

app.get("/",function(req,res){
    res.send("Hello Express");
    res.send
});































 module.exports = app;
