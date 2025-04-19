let express = require('express');

const PORT = 14590
//#1 log "Hello World"
console.log("Hello World");

//create a express object with field and methods
let app = express();

//#2 app.get method to serve string 'Response string'
//vital for loading the api
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });


app.get("/hello",function (req,res){
    res.send("Hello Express")
})

//#3 app.get method to server file like html  on / path
let absolutePathHtml = __dirname +'/views/index.html';

app.get('/',function(req,res,next){

res.sendFile(absolutePathHtml);
});

//#4 middle ware express.static(path) for (static file sucha s css , script , image)
app.use('/public',express.static(__dirname +'/public'));


/*
require('dotenv').config()



const bodyParser = require('body-parser');


//step 11  mount middle ware bodyParser


app.use(bodyParser.urlencoded({extended: false}));

//chain a  middleware to a get route 

/*
In the route app.get('/now', ...) chain a middleware function and the final handler. 
In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). 
In the handler, respond with a JSON object, taking the structure {time: req.time}.

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












/*#5creating a simple API(serve data) route 

app.get('/json',function(req,res,next){

res.json({"message": "Hello json"});
});




app.get('/json',function(req,res){

    
    let mySecret = process.env.MESSAGE_STYLE;

    
    if(mySecret === "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }

    else{
        res.json({"message": "hello json"})
    }

});




app.get('/:word/echo',(req,res) =>{

    res.json({"echo": req.params.word})
  
  })



  app.get('/name',(req,res) =>{

    res.send({"name" : req.query.first + " "+ req.query.last});
    
  })

  

 

  app.post('/name', (req, res) => {

    res.send("name : " + req.body.first + " " + req.body.last);
  
    console.log(req.body.first + " " + req.body.last);
  })

  */



  























 //module.exports = app;
