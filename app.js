
var express = require('express');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

//var routes=require('./routes/api')
var app = express();
var PORT = 3000;
// connect to mdb
mongoose.connect("mongodb://localhost/movie");
mongoose.Promise=global.Promise;


app.use(bodyParser.json());
app.use("/api",require('./routes/api'));
app.use(function(err,req,res,next){
    res.send({error:"fuck"});

});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})