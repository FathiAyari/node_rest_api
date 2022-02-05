var mongoose=require('mongoose');
var scheema=mongoose.Schema;
// create mmovies scheeema
var MoviesScheema=new scheema({
    name:{
        type:String,
        required:[true,'name field is required']
    },
    score:Number,

});


module.exports=mongoose.model('Movies1',MoviesScheema);