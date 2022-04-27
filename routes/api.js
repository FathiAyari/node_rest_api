const express=require('express');
const Movies=require('../models/movies');
var {getMovies,insertMovie}=require('../controller/MovieController')
const router=express.Router();



router.get('/get',getMovies);
router.post('/post',insertMovie);

module.exports=router;