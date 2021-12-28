const express=require('express');
const Movie=require('../models/Movies');
const router=express.Router();
//get a list of names from the db
router.post('/names',function(req,res){
 //console.log(req.body);
 //var movie=new Movie(req.body);
  Movie.create(req.body).then(function(movie){
      console.log(req.body);
res.send(movie);
  }).catch(next);
});
router.get('/lastnames',function(req,res){
 
    res.send({
        type:"Get",
        name:"ayari"});
})

module.exports=router;