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

//#4 middleware express.static(path) for (static file sucha s css , script , image)
app.use('/public',express.static(__dirname +'/public'));

//#5 use the env file to set the message style
require('dotenv').config()

app.get('/secretjson',function(req,res){

    
    let mySecret = process.env.MESSAGE_STYLE;

    
    if(mySecret === "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }

    else{
        res.json({"message": "hello json"})
    }

});

//#6 use middleware to logger 
app.use((req,res,next)=>{
    const logMessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logMessage);
    next(); // Call next to move to the next middleware or route handler REALLY IMPORTANT
})

//#7 middleware chain to route to create time server


app.get('/now',(req,res) =>{
    req.time = new Date().toString
    next();
    }, (req,res) =>{
    res.json({"time " : req.time});
    });

//#8 Get Route Parameter Input from the Client

app.get("/:word/echo",(req,res)=>{
    console.log(req.params)
})

//#9 Get Query parameter Input from the Client

app.get('/name',(req,res) =>{

    res.send({"name" : req.query.first + " "+ req.query.last});
    
  })


//#10 Use body-parser to Parse POST Requests

const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

//#11 Get Data from POST Requests

app.post('/name',(req,res) =>{

    res.send({"name" : req.body.first + " "+ req.body.last});
  })

