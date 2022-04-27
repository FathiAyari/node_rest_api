
var express = require('express');//create express app
var app=express();
var bodyParser=require('body-parser');
var PORT=3000;//set the port
var mongoose =require('mongoose');
var router=require('./routes/api');
const { urlencoded } = require('body-parser');
mongoose.connect("mongodb+srv://fathi:medmedaliali3@cluster0.79gwe.mongodb.net/sss?retryWrites=true&w=majority",
{
         useNewUrlParser: true,
           
            useUnifiedTopology: true
}

).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
var connection=mongoose.connection;
connection.on("connected",function(){
console.log("connected");
});
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use("/",router);


    
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})



