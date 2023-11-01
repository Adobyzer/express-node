require('dotenv').config()

//import the express dependencies
let express = require('express');

//create a express object with field and methods
let app = express();

//chain a  middleware to a get route 

/*
In the route app.get('/now', ...) chain a middleware function and the final handler. 
In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). 
In the handler, respond with a JSON object, taking the structure {time: req.time}.
*/
app.get('/now',(req,res) =>{
req.time = new Date().toString
next();
}, (req,res) =>{
res.json({"time " : req.time});
});
//use middleware to logger (step 7)
app.use((req,res,next)=>{
    const logMessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logMessage);
    next(); // Call next to move to the next middleware or route handler REALLY IMPORTANT
})

//use middleware (step 4)
app.use('/public',express.static(__dirname + '/public'));
 
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



//#3  res.sendFile(path) method (non static file such html)


let absolutePathHtml = __dirname +'/views/index.html';

app.get('/',function(req,res,next){

res.sendFile(absolutePath);
});




//#4 middle ware express.static(path) for (static file sucha s css , script , image)
app.use('/public',express.static(__dirname +'/public'));


/*#5creating a simple API(serve data) route 

app.get('/json',function(req,res,next){

res.json({"message": "Hello json"});
});
*/

/*#6 playing arround with env variable in path /json

app.get('/json',function(req,res){

    //put it inside for test fcc
    let mySecret = process.env.MESSAGE_STYLE;

    // === for value and == for type ;(
    if(mySecret === "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }

    else{
        res.json({"message": "hello json"})
    }

});
*/


//#8 echo the url info 
app.get('/:word/echo',(req,res) =>{

    res.json({"echo": req.params.word})
  
  })

  //#9 get route query url

  app.get('/name',(req,res) =>{

    res.json({"name" : req.query.first + " "+ req.query.last});
    
  })
  























 module.exports = app;
