require('dotenv').config()

//import the express dependencies
let express = require('express');

//create a express object with field and methods
let app = express();


//use middleware (step 4)
let abosulutePathCss = __dirname +'/public'
app.use('/public',express.static(abosulutePathCss));
 
/*
const port = 3000;
app.listen(port, () => {
console.log("important method server listen on port : ", port);
})
*/

//#1 log "Hello World"

//console.log("Hello World");

/*#2 app.method(path,handler )

 ex app.get(/,req,res,next) or app.port(/,req,res,next)
 get = fetch info without modiyfing anything
 post = add info (so creating something)
handler = function(req,res,next)
req = requet
res = response

app.get("/",function(req,res){
    res.send("Hello Express");
});
*/


/*
#3  res.sendFile(path) method (non static file such html)


let absolutePathHtml = __dirname +'/views/index.html'

app.get('/',function(req,res,next){

res.sendFile(absolutePath);
});

*/


//#4 middle ware express.static(path) for (static file sucha s css , script , image)
//let abosulutePathCss = __dirname +'/public'
//app.use('/public',express.static(abosulutePathCss));


/*#5creating a simple API(serve data) route 

app.get('/json',function(req,res,next){

res.json({"message": "Hello json"});
});
*/

//#playing arround with env variable in path /json
const mySecret = process.env.MESSAGE_STYLE;
app.get('/json',function(req,res,next){

    //put it inside for test fcc
    const mySecret = process.env.MESSAGE_STYLE;

    // === for value and == for type ;(
    if(mySecret === "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }

    else{
        res.json({"message": "hello json"})
    }

});
























 module.exports = app;
